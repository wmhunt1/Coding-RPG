import { useState } from 'react';
import '../App.css';
import './Game.css'
import SkillNode from "./SkillNode"
import { EquipItemFromInventory, RemoveItemFromInventory } from '../Scripts/ItemScripts';
import { alchemyNode, craftNode, enchantNode, fireNode, fletchNode } from '../Database/SkillNodesDB'
import { AddToCharacterLog } from '../Scripts/CharacterScripts';

function Inventory(props) {
  const [hero, setHero] = useState(props.hero);
  const [inventory, setInventory] = useState(props.hero.Inventory);
  const [active, setActive] = useState("Inventory")
  const [allies, setAllies] = useState([props.hero, ...props.hero.Companions]);
  const [activeUser, setActiveUser] = useState(props.hero)
  const [activeList, setActiveList] = useState("Default")
  const [node, setNode] = useState(alchemyNode(hero))

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
    else if (item.Type === "Equipable") {
      handleEquip(char, inventory, item, item.Quantity)
    }
    else {
      AddToCharacterLog(char, item.Name + " cannot be equipped or consumed")
    }
    setHero(char)
    props.parentCallback(char);
  }
  function dropItem(char, inventory, item) {
    AddToCharacterLog(char, "Dropped " + item.Name + " X " + item.Quantity)
    RemoveItemFromInventory(char, inventory, item, item.Quantity)
    setHero(char)
    var newInventory = [...char.Inventory];
    setInventory(newInventory);
    props.parentCallback(char);
  }
  const charList = allies.map((ally, index) => <h4 key={index}>{ally.Name} <button onClick={() => setActiveUser(ally)}><h4>Set Active Character</h4></button></h4>)
  const itemList = inventory.sort((a, b) => a.Name.localeCompare(b.Name)).map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost} GP, QTY: {item.Quantity} {item.Type === "Equipable" ? <button onClick={() => { handleItem(activeUser, hero.Inventory, item) }}> Equip </button> : <div></div>}{item.Type === "Consumable" && item.SubType !== "Battle" ? <button onClick={() => { handleItem(activeUser, hero.Inventory, item) }}> Consume </button> : <div></div>}<button onClick={() => dropItem(hero, hero.Inventory, item)}>Drop</button></h4>)
  const consumeList = inventory.sort((a, b) => a.Name.localeCompare(b.Name)).filter(item => item.Type === "Consumable").map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost} GP, QTY: {item.Quantity} {item.SubType !== "Battle" ? <button onClick={() => { handleItem(activeUser, hero.Inventory, item) }}><h4>Consume</h4></button> : <div></div>}<button>Drop</button></h4>)
  const equipList = inventory.sort((a, b) => a.Name.localeCompare(b.Name)).filter(item => item.Type === "Equipable").map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost} GP, QTY: {item.Quantity} <button onClick={() => { handleItem(activeUser, hero.Inventory, item) }}><h4>Equip</h4></button><button>Drop</button></h4>)
  function enterSkill(node) {
    setNode(node)
    setActive("Node")
  }
  function leaveSkill(hero) {
    setActive("Inventory")
    setHero(hero)
    var newInventory = [...hero.Inventory];
    setInventory(newInventory);
    props.parentCallback(hero);
  }
  const handleCallback = (childData) => {
    var newChar = childData
    setHero(newChar)
    props.parentCallback(newChar);
  }
  return (<div>
    {active === "Inventory" ? <div>
      <h2>{hero.Name}'s Inventory</h2>
      <h3>{hero.Name} has {hero.Gold} GP</h3>
      <div className='inv-box'>
        <h4>Active User: {activeUser.Name}</h4>
        {charList}
      </div>
      <div className='inv-box'>
        <h4>Items</h4>
        <h5>Item Filters: <button onClick={() => setActiveList("Consumable")}>Consumables</button> <button onClick={() => setActiveList("Equipable")}>Equipable</button> <button onClick={() => setActiveList("Default")}>Clear</button></h5>
        {activeList === "Default" ? <div>{itemList.length > 0 ? <div>{itemList}</div> : <div><h4>Inventory is Empty</h4></div>}</div> : <div></div>}
        {activeList === "Consumable" ? <div>{consumeList.length > 0 ? <div>{consumeList}</div> : <div><h4>No Consumables Items</h4></div>}</div> : <div></div>}
        {activeList === "Equipable" ? <div>{equipList.length > 0 ? <div>{equipList}</div> : <div><h4>No Equipable Items</h4></div>}</div> : <div></div>}
      </div>
      <div><button onClick={() => (enterSkill(alchemyNode(hero)))}>Train Alchemy</button><button onClick={() => (enterSkill(craftNode(hero)))}>Train Crafting</button><button onClick={() => (enterSkill(enchantNode(hero)))}>Train Enchanting</button><button onClick={() => (enterSkill(fireNode(hero)))}>Train Firemaking</button><button onClick={(() => enterSkill(fletchNode(hero)))}>Train Fletching</button></div>
    </div> : <div></div>}
    {active === "Node" ? <SkillNode parentCallback={handleCallback} hero={hero} node={node} Back={() => leaveSkill(hero)}></SkillNode> : <div></div>}
    {/* <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
  </div>)
}

export default Inventory;