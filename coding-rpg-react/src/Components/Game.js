import '../App.css';
import { useState, useRef, useEffect } from "react";
import { AddToCharacterLog, HealHP } from '../Scripts/CharacterScripts';
import Menu from './Menu';
import Log from './Log';
import Toolbar from './Toolbar';
import CharacterSheet from './CharacterSheet';
import Combat from './Combat';
import Dungeon from './Dungeon';
import Equipment from './Equipment';
import Inventory from './Inventory';
import Party from './Party';
import Shop from './Shop';
import { rat } from '../Database/Characters'
//import { club, dagger, healingPotion } from '../Database/Items';
import { testShop } from '../Database/Shops'

function Game(props) {
  const [active, setActive] = useState("Game");
  const [hero, setHero] = useState(props.hero)

  function Heal(char) {
    HealHP(char, char.MaxHP)
    setHero(char);
    HealHP(char.Companions[0], char.Companions[0].MaxHP)
  }

  if (active === "Menu") {
    return (<div>
      <Menu hero={hero} Back={() => setActive("Game")}></Menu>
    </div>)
  }
  else if (active === "CharacterSheet") {
    return (<div>
      <CharacterSheet hero={hero} Back={() => setActive("Game")}></CharacterSheet>
    </div>)
  }
  else if (active === "Combat") {
    return (<div>
      <Combat hero={hero} enemies={[rat(), rat(), rat()]} Back={() => setActive("Test")}></Combat>
    </div>)
  }
  else if (active === "Dungeon") {
    return (<div>
      <Dungeon hero={hero} dungeonName={"Test Dungeon"} encounters={[[rat()], [rat(), rat()]]} boss={[rat(), rat(), rat()]} Back={() => setActive("Test")}></Dungeon>
    </div>)
  }
  else if (active === "Equipment") {
    return (<div>
      <Equipment hero={hero} Back={() => setActive("Game")}></Equipment>
    </div>)
  }
  else if (active === "Inventory") {
    return (<div>
      <Inventory hero={hero} Back={() => setActive("Game")}></Inventory>
    </div>)
  }
  else if (active === "Party") {
    return (<div>
      <Party hero={hero} Back={() => setActive("Game")}></Party>
    </div>)
  }
  else if (active === "Shop") {
    return (<div>
      <Shop shopName={testShop().Name} shopInventory={testShop().Inventory} hero={hero} Back={() => setActive("Game")}></Shop>
    </div>)
  }
  else if (active === "Test") {
    return (
      <div>  <div>
        <h2>Tests</h2>
        <button onClick={() => setActive("Combat")}><h3>Test Combat</h3></button>
        <button onClick={() => setActive("Dungeon")}><h3>Test Dungeon</h3></button>
        <button onClick={() => Heal(props.hero)}><h3>Test Heal</h3></button>
        <button onClick={() => setActive("Shop")}><h3>Test Shop</h3></button>
        <button onClick={() => setActive("Game")}><h3>Back</h3></button>
      </div></div>
    );
  }
  else {
    return (
      <div>
        <div>
          <Toolbar cSheet={() => setActive("CharacterSheet")} equip={() => setActive("Equipment")} inv={() => setActive("Inventory")} party={() => setActive("Party")} spells={() => setActive("Spells")} skill={() => setActive("Skills")} menu={() => setActive("Menu")} test={() => setActive("Test")}></Toolbar>
        </div>
        <div>
          <h2>Game Map</h2>
          <div>
          </div>
        </div>
        <div style={{ marginLeft: "25%", marginRight: "25%", width: "auto" }}>
          <Log log={hero.Log} logName={"Game"}></Log>
        </div>
      </div>
    );
  }
}

export default Game;