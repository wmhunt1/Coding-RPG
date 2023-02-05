import '../App.css';
import './Game.css'
import { useState } from "react";
import { EarnXP, FullyRecover } from '../Scripts/CharacterScripts';
import Menu from './Menu';
import Log from './Log';
import Toolbar from './Toolbar';
import Abilities from './Abilities';
import CharacterSheet from './CharacterSheet';
import Combat from './Combat';
import Dungeon from './Dungeon';
import Equipment from './Equipment';
import Inventory from './Inventory';
import Party from './Party';
import SpellBook from './SpellBook';
import Shop from './Shop';
import { rat } from '../Database/Characters'
import { testShop } from '../Database/Shops'

function Game(props) {
  const [active, setActive] = useState("Game");
  const [hero, setHero] = useState(props.hero)

  function Heal(char) {
    FullyRecover(char)
    setHero(char);
    for (var c = 0; c < char.Companions.length; c++) {
      FullyRecover(char.Companions[c])
    }
  }
  function TestXP(char) {
    EarnXP(char, char.MaxXP)
  }

  return (
    <div>
      <div>
        {active !== "Combat" && active !== "Dungeon" ? <Toolbar abil={() => setActive("Abilities")} cSheet={() => setActive("CharacterSheet")} equip={() => setActive("Equipment")} inv={() => setActive("Inventory")} party={() => setActive("Party")} spells={() => setActive("Spells")} skill={() => setActive("Skills")} menu={() => setActive("Menu")} test={() => setActive("Test")}></Toolbar> : <div></div>}
      </div>
      <div>
        {active === "Menu" ? <Menu hero={hero} Back={() => setActive("Game")}></Menu> : <div></div>}
        {active === "Abilities" ? <Abilities hero={hero} Back={() => setActive("Game")}></Abilities> : <div></div>}
        {active === "CharacterSheet" ? <CharacterSheet hero={hero} Back={() => setActive("Game")}></CharacterSheet> : <div></div>}
        {active === "Combat" ? <Combat hero={hero} enemies={[rat(), rat(), rat()]} Back={() => setActive("Test")}></Combat> : <div></div>}
        {active === "Dungeon" ? <Dungeon hero={hero} dungeonName={"Test Dungeon"} encounters={[[rat()], [rat(), rat()]]} boss={[rat(), rat(), rat()]} Back={() => setActive("Test")}></Dungeon> : <div></div>}
        {active === "Equipment" ? <Equipment hero={hero} Back={() => setActive("Game")}></Equipment> : <div></div>}
        {active === "Inventory" ? <Inventory hero={hero} Back={() => setActive("Game")}></Inventory> : <div></div>}
        {active === "Party" ? <Party hero={hero} Back={() => setActive("Game")}></Party> : <div></div>}
        {active === "Skills" ? <div></div> : <div></div>}
        {active === "Spells" ? <SpellBook hero={hero} Back={() => setActive("Game")}></SpellBook> : <div></div>}
        {active === "Test" ? <div className='menu-box'>
          <h2>Tests</h2>
          <div><button className='menu-button' onClick={() => setActive("Combat")}><h3>Test Combat</h3></button></div>
          <div><button className='menu-button' onClick={() => setActive("Dungeon")}><h3>Test Dungeon</h3></button></div>
          <div><button className='menu-button' onClick={() => Heal(hero)}><h3>Test Heal</h3></button></div>
          <div><button className='menu-button' onClick={() => setActive("Shop")}><h3>Test Shop</h3></button></div>
          <div><button className='menu-button' onClick={() => TestXP(hero)}><h3>Test XP</h3></button></div>
        </div> : <div></div>}
      </div>
      <div style={{ marginLeft: "25%", marginRight: "25%", width: "auto" }}>
        <Log log={hero.Log} logName={"Game"}></Log>
      </div>
    </div>
  );
}

export default Game;