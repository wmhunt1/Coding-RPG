import '../App.css';
import { useState } from "react";
import { AddGold, AddItemToInventory, AddToCharacterLog, RemoveGold, RemoveItemFromInventory } from '../Scripts/CharacterScripts';

function Shop(props) {
    const [active, setActive] = useState("shopping")
    const [hero, setHero] = useState(props.hero);
    const [gold, setGold] = useState(props.hero.Gold)
    const [shopInventory, setShopInventory] = useState(props.shopInventory)
    const [heroInventory, setHeroInventory] = useState(props.hero.Inventory)
    const shopInventoryList = shopInventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost} GP <button onClick={() => { handleBuy(hero, heroInventory, item) }}><h4>Buy</h4></button></h4>)
    const heroInventoryList = heroInventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost/2} GP, QTY: {item.Quantity} <button onClick={() => { handleSell(hero, heroInventory, shopInventory, item) }}><h4>Sell</h4></button></h4>)
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

    }
    function handleSell(hero, heroInventory, shopInventory, item) {
        AddGold(hero, item.Cost/2)
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
        else
        {
            shopInventory.push(item);  
        }
        setShopInventory(shopInventory);
        var newHeroInventory = [...hero.Inventory];
        setHeroInventory(newHeroInventory);
        var newShopInventory = [...shopInventory];
        setShopInventory(newShopInventory);
    }
    if (active === "buy") {
        return (<div>
            <h2>{props.shopName}</h2>
            <h3>{hero.Name}'s Gold: {gold}</h3>
            {shopInventoryList}
            <button onClick={() => setActive("shop")}><h3>Back</h3></button>
        </div>);
    }
    else if (active === "sell" && heroInventoryList.length > 0) {
        return (<div>
            <h2>{props.shopName}</h2>
            <h3>{hero.Name}'s Gold: {gold}</h3>
            {heroInventoryList}
            <button onClick={() => setActive("shop")}><h3>Back</h3></button>
        </div>);
    }
    else if (active === "sell" && heroInventoryList.length > 0) {
        return (<div>
            <h2>{props.shopName}</h2>
            <h3>{hero.Name}'s Gold: {gold}</h3>
            <h3>Nothing to sell</h3>
            <button onClick={() => setActive("shop")}><h3>Back</h3></button>
        </div>);
    }
    else {
        return (<div>
            <h2>{props.shopName}</h2>
            <h3>{hero.Name}'s Gold: {gold}</h3>
            <button onClick={() => setActive("buy")}><h3>Buy</h3></button>
            <button onClick={() => setActive("sell")}><h3>Sell</h3></button>
            <button onClick={props.Back}><h3>Back</h3></button>
        </div>);
    }
}

export default Shop