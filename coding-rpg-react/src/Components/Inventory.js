import { useState } from 'react';
import { EquipItemFromInventory, RemoveItemFromInventory} from '../Scripts/CharacterScripts';
import '../App.css';

function Inventory(props) {
  const [hero, setHero] = useState(props.hero);
  const [inventory, setInventory] = useState(props.hero.Inventory)

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
  function handleItem(char, inventory, item)
  {
    if (item.Type === "Consumable")
    {
      handleUse(char, inventory, item)
    }
    else
    {
      handleEquip(char, inventory, item)
    }
  }
  const itemList = inventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost} GP, QTY: {item.Quantity} <button onClick={() => { handleItem(hero, hero.Inventory, item) }}>Equip/Use</button></h4>)
  if (inventory.length > 0) {
    return (
      <div>
        <h2>{hero.Name}'s Inventory</h2>
        <h3>{hero.Gold} GP</h3>
        {itemList}
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