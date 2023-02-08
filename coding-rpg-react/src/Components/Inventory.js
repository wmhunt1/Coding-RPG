import { useState } from 'react';
import {EquipItemFromInventory, RemoveItemFromInventory} from '../Scripts/ItemScripts';
import '../App.css';
import './Game.css'

function Inventory(props) {
  const [hero, setHero] = useState(props.hero);
  const [inventory, setInventory] = useState(props.hero.Inventory);
  const [allies, setAllies] = useState([props.hero, props.hero.Companions[0]]);
  const [activeUser, setActiveUser] = useState(props.hero)

  function handleEquip(char, inventory, item) {
    if (char.Name !== "Dog") {
      EquipItemFromInventory(char, inventory, item)
      setHero(char);
      var newInventory = [...char.Inventory];
      setInventory(newInventory);
    }
  }
  function handleUse(char, inventory, item) {
    item.ConsumeEffect(char)
    RemoveItemFromInventory(char, inventory, item, item.Quantity)
    var newInventory = [...char.Inventory];
    setInventory(newInventory);
  }
  function handleItem(char, inventory, item) {
    if (item.Type === "Consumable") {
      handleUse(char, inventory, item, item.Quantity)
    }
    else if (item.Type === "Equipable")
    {
      handleEquip(char, inventory, item, item.Quantity)
    }
    else
    {
      char.Log.push(item.Name + " cannot be equipped or consumed")
    }
    setHero(char)
    props.parentCallback(hero);
  }
  const charList = allies.map((ally, index) => <h4 key={index}>{ally.Name} <button onClick={() => setActiveUser(ally)}><h4>Set Active Character</h4></button></h4>)
  const itemList = inventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost} GP, QTY: {item.Quantity} <button onClick={() => { handleItem(activeUser, hero.Inventory, item) }}>{item.Type === "Equipable"? <h4>Equip</h4>:<h4></h4>}{item.Type ==="Consumable"?<h4>Use</h4>:<h4></h4>}</button></h4>)
  return (<div>
    <div>
      <h2>{hero.Name}'s Inventory</h2>
      <h3>{hero.Gold} GP</h3>
      <div className='inv-box'>
        <h4>Active User: {activeUser.Name}</h4>
        {charList}
      </div>
      <div className='inv-box'>
        <h4>Items</h4>
        {inventory.length > 0 ? <div>{itemList}</div> : <div><h4>Inventory is Empty</h4></div>}
      </div>
    </div>
    <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button>
  </div>)
}

export default Inventory;