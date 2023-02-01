import { useState } from 'react';
import { EquipItemFromInventory } from '../Scripts/CharacterScripts';
import '../App.css';

function Inventory(props) {
  const [hero, setHero] = useState(props.hero);
  const [inventory, setInventory] = useState(props.hero.Inventory)

  function handleEquip(char, inventory, weapon) {
    EquipItemFromInventory(char, inventory, weapon)
    setHero(char);
    setInventory(char.Inventory);
    
  }
  const itemList = inventory.map((item, index) => <h4 key={index}>{item.Name} - Price: {item.Cost} GP, QTY: {item.Quantity} <button onClick={() => { handleEquip(hero, hero.Inventory, item) }}>Equip</button></h4>)
  if (inventory.length > 0) {
    return (
      <div>
        <h2>{hero.Name}'s Inventory</h2>
        {itemList}
        <button onClick={props.Back}><h3>Back</h3></button>
      </div>
    );
  }
  else {
    return (
      <div>
        <h2>{hero.Name}'s Inventory</h2>
        <h4>Inventory is Empty</h4>
        <button onClick={props.Back}><h3>Back</h3></button>
      </div>
    );
  }
}

export default Inventory;