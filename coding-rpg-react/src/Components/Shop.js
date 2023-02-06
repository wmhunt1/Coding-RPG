import '../App.css';
import './Game.css';
import { useState } from "react";
import { AddGold, AddItemToInventory, AddToCharacterLog, RemoveGold, RemoveItemFromInventory } from '../Scripts/CharacterScripts';

function Shop(props) {
    const [active, setActive] = useState("shopping")
    const [hero, setHero] = useState(props.hero);
    const [gold, setGold] = useState(props.hero.Gold)
    const [shopInventory, setShopInventory] = useState(props.shop.Inventory)
    const [heroInventory, setHeroInventory] = useState(props.hero.Inventory)
    const shopInventoryList = shopInventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost} GP <button onClick={() => { handleBuy(hero, heroInventory, item) }}><h4>Buy</h4></button></h4>)
    const heroInventoryList = heroInventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost / 2} GP, QTY: {item.Quantity} <button onClick={() => { handleSell(hero, heroInventory, shopInventory, item) }}><h4>Sell</h4></button></h4>)
    function handleBuy(hero, inventory, item) {
        if (item.Cost > hero.Gold) {
            AddToCharacterLog(hero, "Cannot afford " + item.Name)
        }
        else {
            RemoveGold(hero, item.Cost)
            AddItemToInventory(hero, inventory, item)
            var newHero = hero;
            setHero(newHero);
            var newGold = hero.Gold;
            setGold(newGold)
            setHeroInventory(hero.Inventory)
            var newInventory = [...hero.Inventory];
            setHeroInventory(newInventory);
        }
        props.parentCallback(hero);

    }
    function handleSell(hero, heroInventory, shopInventory, item) {
        AddGold(hero, item.Cost / 2)
        RemoveItemFromInventory(hero, heroInventory, item)
        var newHero = hero;
        setHero(newHero);
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
        props.parentCallback(hero);
    }
    return (<div>
        <h2>{props.shop.Name}</h2>
        <h3>{hero.Name}'s Gold: {gold}</h3>
        <div>
            <div><button className='menu-button' onClick={() => setActive("buy")}><h3>Buy</h3></button></div>
            <div><button className='menu-button' onClick={() => setActive("sell")}><h3>Sell</h3></button></div>
        </div>
        {active === "buy" ? <div>
            {shopInventoryList}
        </div> : <div></div>}
        {active === "sell" ? <div>
            {heroInventoryList.length > 0 ? <div>{heroInventoryList}</div> : <h3>Nothing to sell</h3>}
        </div> : <div></div>}
        <button className='menu-button' onClick={props.Back}><h3>Leave Store</h3></button>
    </div>)
}

export default Shop