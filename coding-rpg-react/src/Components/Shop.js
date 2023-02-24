import '../App.css';
import './Game.css';
import { useState } from "react";
import { AddGold, AddToCharacterLog, RemoveGold } from '../Scripts/CharacterScripts';
import { AddItemToInventory, RemoveItemFromInventory } from '../Scripts/ItemScripts';
import Dialogue from './Dialogue';
import Dungeon from "./Dungeon"
import SkillNode from "./SkillNode"
import { BarterSkill } from '../Database/SkillsDB';
import { EarnSkillXP, FindSkillInSkillBook } from '../Scripts/SkillScripts';
import { FindRepuation } from '../Scripts/RelationshipAndReputationScript';

function Shop(props) {
    const [active, setActive] = useState("Shopping")
    const [hero, setHero] = useState(props.hero);
    const [gold, setGold] = useState(props.hero.Gold)
    const [barter, setBarter] = useState(FindSkillInSkillBook(hero, new BarterSkill()))
    const [quantity, setQuantity] = useState(1)
    const [shopInventory, setShopInventory] = useState(props.shop.Inventory)
    const [heroInventory, setHeroInventory] = useState(props.shop.buyFilter(hero))
    const [dialogue, setDialogue] = useState(props.shop.Dialogue)
    const [dungeon, setDungeon] = useState(props.shop.Dungeon)
    const [node, setNode] = useState(props.shop.Node)
    const [rep, setRep] = useState(props.shop.Rep)
    const shopInventoryList = shopInventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {Math.round(item.Cost - item.Cost * (FindSkillInSkillBook(hero, new BarterSkill()).Level / 10))} GP <button onClick={() => { handleBuy(hero, heroInventory, item, quantity) }}><h4>Buy</h4></button></h4>)
    const heroInventoryList = heroInventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {Math.floor(item.Cost / 2 + (item.Cost / 2) * (FindSkillInSkillBook(hero, new BarterSkill()).Level / 10))} GP, QTY: {item.Quantity} <button onClick={() => { handleSell(hero, heroInventory, shopInventory, item, quantity) }}><h4>Sell</h4></button></h4>)
    function handleBuy(hero, inventory, item, quantity) {
        if (item.Cost * quantity > hero.Gold) {
            AddToCharacterLog(hero, "Cannot afford " + item.Name + " X " + quantity)
        }
        else {
            var repBonus = 0;
            var repIndex = FindRepuation(hero, rep)
            if (repIndex !== null) {
                repBonus = Math.Round(hero.Reputation[repIndex] / 100)
            }
            RemoveGold(hero, quantity * (Math.round(item.Cost - item.Cost * (FindSkillInSkillBook(hero, new BarterSkill()).Level / 10) - repBonus)))
            EarnSkillXP(hero, FindSkillInSkillBook(hero, new BarterSkill()), Math.round(item.Cost - item.Cost * (FindSkillInSkillBook(hero, new BarterSkill()).Level / 10)))
            AddItemToInventory(hero, inventory, item, quantity, hero)
            var newHero = hero;
            setHero(newHero);
            setBarter(FindSkillInSkillBook(hero, new BarterSkill()))
            var newGold = hero.Gold;
            setGold(newGold)
            setHeroInventory(hero.Inventory)
            var newInventory = [...hero.Inventory];
            setHeroInventory(newInventory);
        }
        props.parentCallback(hero);

    }
    function handleSell(hero, heroInventory, shopInventory, item) {
        if (quantity > 0 && quantity <= item.Quantity) {
            var repBonus = 0;
            var repIndex = FindRepuation(hero, rep)
            if (repIndex !== null) {
                repBonus = Math.Round(hero.Reputation[repIndex] / 100)
            }
            AddGold(hero, quantity * (Math.floor(item.Cost / 2 + (item.Cost / 2) * (FindSkillInSkillBook(hero, new BarterSkill()).Level / 10) + repBonus)))
            RemoveItemFromInventory(hero, heroInventory, item, quantity, hero)
            EarnSkillXP(hero, FindSkillInSkillBook(hero, new BarterSkill()), Math.floor(item.Cost / 2 + (item.Cost / 2) * (FindSkillInSkillBook(hero, new BarterSkill()).Level / 10)))
            var newHero = hero;
            setHero(newHero);
            setBarter(FindSkillInSkillBook(hero, new BarterSkill()))
            var newGold = hero.Gold;
            setGold(newGold)
            if (shopInventory.find(x => x.Name === item.Name)) {
                var findItem = shopInventory.findIndex(x => x.Name === item.Name);
                var newItem = shopInventory[findItem];
                newItem.Quantity++;
                shopInventory[findItem] = newItem;
            }
            else {
                shopInventory.push(item);
            }
            setShopInventory(shopInventory);
            var newHeroInventory = [...hero.Inventory];
            setHeroInventory(newHeroInventory);
            var newShopInventory = [...shopInventory];
            setShopInventory(newShopInventory);
        }
        else {
            AddToCharacterLog(hero, "Quantity cannot be less than 0 or greater than the item's Quantity")
        }
        props.parentCallback(hero);
    }
    function startShopDialogue(hero) {
        setActive("Dialogue")
    }
    function finishShopDialogue(hero) {
        setActive("Shopping")
        setHero(hero)
        setGold(hero.Gold)
        props.parentCallback(hero);
    }
    function startShopDungeon(hero) {
        setActive("Dungeon")
    }
    function finishShopDungeon(hero) {
        setActive("Shopping")
        setHero(hero)
        setGold(hero.Gold)
        props.parentCallback(hero);
    }
    function enterSkill(hero) {
        setActive("Node")
    }
    function leaveSkill(hero) {
        setActive("Shopping")
        setHero(hero)
        var newHeroInventory = [...hero.Inventory];
        setHeroInventory(newHeroInventory);
        props.parentCallback(hero);
    }
    const handleCallback = (childData) => {
        var newChar = childData
        setHero(newChar)
        props.parentCallback(newChar);
    }
    return (<div>
        <h2>{props.shop.Name}</h2>
        {active !== "Dialogue" && active !== "Dungeon" && active !== "Node" ? <h3>{hero.Name}'s Gold: {gold} - Barter: Level {barter.Level}({barter.CurrentXP}/{barter.MaxXP})</h3> : <div></div>}
        {active === "Shopping" ?
            <div style={{ overflow: "scroll", marginRight: "25%", marginLeft: "25%", border: "solid", marginBottom: "1%" }}>
                {dialogue !== null ? <div><button className='menu-button' onClick={() => startShopDialogue(hero)}><h3>Talk To {dialogue.Char}</h3></button></div> : <div></div>}
                <div><button className='menu-button' onClick={() => setActive("buy")}><h3>Buy</h3></button></div>
                <div><button className='menu-button' onClick={() => setActive("sell")}><h3>Sell</h3></button></div>
                {node !== null ? <div><button className='menu-button' onClick={() => enterSkill(hero)}><h3>Borrow {node.Name}</h3></button></div> : <div></div>}
                {dungeon !== null ? <div><button className='menu-button' onClick={() => startShopDungeon(hero)}><h3>Enter {dungeon.Name}</h3></button></div> : <div></div>}
                <div><button className='menu-button' onClick={props.Back}><h3>Leave Store</h3></button></div>
            </div> : <div></div>}
        {active === "buy" ? <div style={{ overflow: "scroll", marginRight: "25%", marginLeft: "25%", border: "solid", marginBottom: "1%", height: "200px" }}>
            <button style={{ display: "inline-block" }} onClick={() => setQuantity(quantity - 1)}>-</button><h4 style={{ display: "inline-block" }}> Qty: {quantity} </h4><button style={{ display: "inline-block" }} onClick={() => setQuantity(quantity + 1)}>+</button>
            {shopInventoryList}
        </div> : <div></div>}
        {active === "sell" ? <div>
            <button style={{ display: "inline-block" }} onClick={() => setQuantity(quantity - 1)}>-</button><h4 style={{ display: "inline-block" }}> Qty: {quantity} </h4><button style={{ display: "inline-block" }} onClick={() => setQuantity(quantity + 1)}>+</button>
            {heroInventoryList.length > 0 ? <div style={{ overflow: "scroll", marginRight: "25%", marginLeft: "25%", border: "solid", marginBottom: "1%", height: "200px" }}>{heroInventoryList}</div> : <h3>Nothing to sell</h3>}
        </div> : <div></div>}
        {active !== "Shopping" && active !== "Dialogue" && active !== "Node" && active !== "Dungeon" ? <div><button onClick={() => setActive("Shopping")}><h4>Back to {props.shop.Name}</h4></button></div> : <div></div>}
        {active === "Dialogue" ? <Dialogue parentCallback={handleCallback} hero={hero} talk={dialogue} Back={() => finishShopDialogue(hero)}></Dialogue> : <div></div>
        }
        {active === "Dungeon" ? <Dungeon parentCallback={handleCallback} hero={hero} dungeon={dungeon} Back={() => finishShopDungeon(hero)}></Dungeon> : <div></div>
        }
        {active === "Node" ? <SkillNode parentCallback={handleCallback} hero={hero} node={node} Back={() => leaveSkill(hero)}></SkillNode> : <div></div>
        }
    </div>)
}

export default Shop