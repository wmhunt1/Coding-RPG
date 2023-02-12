import '../App.css';
import './Game.css';
import { useState } from "react";
import { AddItemToBank, AddItemToInventory, RemoveItemFromBank, RemoveItemFromInventory } from '../Scripts/ItemScripts';
import { AddGold, AddToCharacterLog, RemoveGold } from '../Scripts/CharacterScripts';

function Bank(props) {
    const [active, setActive] = useState("banking")
    const [hero, setHero] = useState(props.hero);
    const [gold, setGold] = useState(hero.Gold)
    const [bank, setBank] = useState(hero.Bank)
    const [bankGold, setBankGold] = useState(hero.BankGold)
    const [inventory, setInventory] = useState(hero.Inventory)
    const [quantity, setQuantity] = useState(1)
    const bankList = bank.map((item, index) => <h4 key={index}>{item.Name} X {item.Quantity} <button onClick={() => { handleWithdraw(hero, bank, inventory, item, quantity) }}><h4>Withdraw</h4></button></h4>)
    const inventoryList = inventory.map((item, index) => <h4 key={index}>{item.Name} X {item.Quantity} <button onClick={() => { handleDeposit(hero, bank, inventory, item, quantity) }}><h4>Deposit</h4></button></h4>)
    function handleDeposit(hero, bank, inventory, item, quantity) {
        if (quantity > 0 && quantity <= item.Quantity) {
            RemoveItemFromInventory(hero, inventory, item, quantity)
            AddItemToBank(hero, bank, item, quantity)
            setHero(hero)
            setBank([...bank])
            setInventory([...inventory])
        }
        else {
            AddToCharacterLog(hero, "Quantity cannot be less than 0 or greater than the item's Quantity")
        }
        props.parentCallback(hero);
    }
    function handleWithdraw(hero, bank, inventory, item, quantity) {
        if (quantity > 0 && quantity <= item.Quantity) {
            RemoveItemFromBank(hero, bank, item, quantity)
            AddItemToInventory(hero, inventory, item, quantity)
            setHero(hero)
            setBank([...bank])
            setInventory([...inventory])
            props.parentCallback(hero);
        }
        else {
            AddToCharacterLog(hero, "Quantity cannot be less than 0 or greater than the item's Quantity")
        }
        props.parentCallback(hero);
    }
    function depositGold(hero, gold, bankGold, quantity) {
        if (quantity > 0 && quantity <= gold) {
            hero.Gold -= quantity
            hero.BankGold += quantity;
            setHero(hero)
            setGold(gold - quantity)
            setBankGold(bankGold + quantity)
            AddToCharacterLog(hero, hero.Name + " deposited " + quantity + " Gold to the Bank")
        }
        else {
            AddToCharacterLog(hero, "Quantity cannot be less than 0 or greater than the item's Quantity")
        }
        props.parentCallback(hero);
    }
    function withdrawGold(hero, gold, bankGold, quantity) {
        if (quantity > 0 && quantity <= bankGold) {
            AddGold(hero, quantity)
            hero.BankGold -= quantity;
            setHero(hero)
            setGold(gold + quantity)
            setBankGold(bankGold - quantity)
            AddToCharacterLog(hero, hero.Name + " withdrew " + quantity + " Gold from the Bank")
        }
        else {
            AddToCharacterLog(hero, "Quantity cannot be less than 0 or greater than the item's Quantity")
        }
        props.parentCallback(hero);
    }
    return (<div>
        <h2>{props.hero.Name}'s Bank</h2>
        {active === "banking" ?
            <div style={{ overflow: "scroll", marginRight: "25%", marginLeft: "25%", border: "solid", marginBottom: "1%" }}>
                <div><button className='menu-button' onClick={() => setActive("withdraw")}><h3>Withdraw</h3></button></div>
                <div><button className='menu-button' onClick={() => setActive("deposit")}><h3>Deposit</h3></button></div>
                <div><button className='menu-button' onClick={props.Back}><h3>Leave Bank</h3></button></div>
            </div> : <div></div>}
        {active === "withdraw" ? <div>
            <h3 style={{ display: "inline-block" }}>Withdraw - Bank's Gold: {bankGold} <button onClick={() => withdrawGold(hero,gold,  bankGold, quantity)}> Withdraw {quantity} </button></h3>(<button style={{ display: "inline-block" }} onClick={() => setQuantity(quantity - 1)}>-</button><h4 style={{ display: "inline-block" }}> Qty: {quantity} </h4><button style={{ display: "inline-block" }} onClick={() => setQuantity(quantity + 1)}>+</button>)
            {bankList.length > 0 ? <div style={{ overflow: "scroll", marginRight: "25%", marginLeft: "25%", border: "solid", marginBottom: "1%", height: "200px" }}>{bankList}</div> : <h3>Nothing to withdraw</h3>}
        </div> : <div></div>}
        {active === "deposit" ? <div>
            <h3 style={{ display: "inline-block" }}>Deposit - {hero.Name}'s Gold: {gold} <button onClick={() => depositGold(hero, gold, bankGold, quantity)}> Deposit {quantity} </button></h3>(<button style={{ display: "inline-block" }} onClick={() => setQuantity(quantity - 1)}>-</button><h4 style={{ display: "inline-block" }}> Qty: {quantity} </h4> <button style={{ display: "inline-block" }} onClick={() => setQuantity(quantity + 1)}>+</button>)
            {inventoryList.length > 0 ? <div style={{ overflow: "scroll", marginRight: "25%", marginLeft: "25%", border: "solid", marginBottom: "1%", height: "200px" }}>{inventoryList}</div> : <h3>Nothing to deposit</h3>}
        </div> : <div></div>}
        {active !== "banking" ? <div><button onClick={() => setActive("banking")}><h4>Back to Bank</h4></button></div> : <div></div>}

    </div>)
}

export default Bank