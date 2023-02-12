import '../App.css';
import './Game.css';
import { useState } from "react";
import { AddItemToBank, AddItemToInventory, RemoveItemFromBank, RemoveItemFromInventory } from '../Scripts/ItemScripts';

function Bank(props) {
    const [active, setActive] = useState("banking")
    const [hero, setHero] = useState(props.hero);
    const [bank, setBank] = useState(hero.Bank)
    const [inventory, setInventory] = useState(hero.Inventory)
    const bankList = bank.map((item, index) => <h4 key={index}>{item.Name} X {item.Quantity} <button onClick={() => { handleWithdraw(hero, bank, inventory, item, 1) }}><h4>Withdraw</h4></button></h4>)
    const inventoryList = inventory.map((item, index) => <h4 key={index}>{item.Name} X {item.Quantity} <button onClick={() => { handleDeposit(hero, bank, inventory, item, 1) }}><h4>Deposit</h4></button></h4>)
    function handleDeposit(hero, bank, inventory, item, quantity) {
        if (item.Quantity >= 1) {
            RemoveItemFromInventory(hero, inventory, item, quantity)
            AddItemToBank(hero, bank, item, quantity)
            setHero(hero)
            setBank([...bank])
            setInventory([...inventory])
            props.parentCallback(hero);
        }
    }
    function handleWithdraw(hero, bank, inventory, item, quantity) {
        if (item.Quantity >= 1) {
            RemoveItemFromBank(hero, bank, item, quantity)
            AddItemToInventory(hero, inventory, item, quantity)
            setHero(hero)
            setBank([...bank])
            setInventory([...inventory])
            props.parentCallback(hero);
        }
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
            <h3>Withdraw</h3>
            {bankList.length > 0 ? <div style={{ overflow: "scroll", marginRight: "25%", marginLeft: "25%", border: "solid", marginBottom: "1%", height: "200px" }}>{bankList}</div> : <h3>Nothing to withdraw</h3>}
        </div> : <div></div>}
        {active === "deposit" ? <div>
            <h3>Deposit</h3>
            {inventoryList.length > 0 ? <div style={{ overflow: "scroll", marginRight: "25%", marginLeft: "25%", border: "solid", marginBottom: "1%", height: "200px" }}>{inventoryList}</div> : <h3>Nothing to deposit</h3>}
        </div> : <div></div>}
        {active !== "banking" ? <div><button onClick={() => setActive("banking")}><h4>Back to Bank</h4></button></div> : <div></div>}

    </div>)
}

export default Bank