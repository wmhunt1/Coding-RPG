import { useState } from 'react';
import { EquipItemFromInventory, RemoveItemFromInventory } from '../Scripts/CharacterScripts';
import '../App.css';

function Inventory(props) {
  const [hero, setHero] = useState(props.hero);
  const [inventory, setInventory] = useState(props.hero.Inventory);
  const [allies, setAllies] = useState([props.hero, props.hero.Companions[0]]);
  const [activeUser, setActiveUser] = useState(props.hero)

  function handleEquip(char, inventory, item) {
    EquipItemFromInventory(char, inventory, item)
    setHero(char);
    var newInventory = [...char.Inventory];
    setInventory(newInventory);
  }
  function handleUse(char, inventory, item) {
    item.ConsumeEffect(char)
    RemoveItemFromInventory(char, inventory, item)
    var newInventory = [...char.Inventory];
    setInventory(newInventory);
  }
  function handleItem(char, inventory, item) {
    if (item.Type === "Consumable") {
      handleUse(char, inventory, item)
    }
    else {
      handleEquip(char, inventory, item)
    }
  }
  const charList = allies.map((ally, index) => <h4 key={index}>{ally.Name} <button onClick={() => setActiveUser(ally)}><h4>Set Active Character</h4></button></h4>)
  const itemList = inventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost} GP, QTY: {item.Quantity} <button onClick={() => { handleItem(activeUser, hero.Inventory, item) }}><h4>Equip/Use</h4></button></h4>)
  if (inventory.length > 0) {
    return (
      <div>
        <div>
          <h2>{hero.Name}'s Inventory</h2>
          <h3>{hero.Gold} GP</h3>
          <div style={{ verticalAlign: "text-top", height: "250px", display: "inline-block", border: "solid", paddingLeft: "1%", paddingRight: "1%", marginLeft: "1%", marginRight: "1%", overflow: "scroll"}}>
            <h4>Active User: {activeUser.Name}</h4>
            {charList}
          </div>
          <div style={{ verticalAlign: "text-top", height: "250px", display: "inline-block", border: "solid", paddingLeft: "1%", paddingRight: "1%", marginLeft: "1%", marginRight: "1%", overflow: "scroll"}}>
            <h4>Items</h4>
            {itemList}
          </div>
        </div>
        <button onClick={props.Back}><h3>Back</h3></button>
      </div>
    );
  }
  else {
    return (
      <div>
        <h2>{hero.Name}'s Inventory</h2>
        <h3>{hero.Gold} GP</h3>
        <h4>Inventory is Empty</h4>
        <button onClick={props.Back}><h3>Back</h3></button>
      </div>
    );
  }
}

export default Inventory;