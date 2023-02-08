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
import Dialogue from './Dialogue';
import Dungeon from './Dungeon';
import Equipment from './Equipment';
import Inventory from './Inventory';
import Journal from './Journal';
import Party from './Party';
import SkillBook from './SkillBook';
import SpellBook from './SpellBook';
import Shop from './Shop';
import { rat } from '../Database/Characters'
import { testDungeon } from '../Database/Dungeons';
import { testQuest } from '../Database/Quests';
import { testShop } from '../Database/Shops'
import { testDialogue } from '../Database/Dialogues';
import { CheckForQuest } from '../Scripts/QuestScripts';

function Game(props) {
  const [active, setActive] = useState("Game");
  const [hero, setHero] = useState(props.hero)
  const [log, setLog] = useState(props.log)
  const handleCallback = (childData) => {
    var newLog = [...childData.Log]
    setLog(newLog)
  }
  function Heal(char) {
    FullyRecover(char)
    for (var c = 0; c < char.Companions.length; c++) {
      FullyRecover(char.Companions[c])
    }
    var newChar = char;
    setHero(newChar);
    var newLog = [...char.Log]
    setLog(newLog)
  }
  function TestXP(char) {
    EarnXP(char, char.MaxXP)
    var newChar = char;
    setHero(newChar);
    var newLog = [...char.Log]
    setLog(newLog)
  }

  return (
    <div>
      <div>
        {active !== "Combat" && active !== "Dungeon" && active !== "Dialogue" ? <Toolbar home={() => setActive("Home")} abil={() => setActive("Abilities")} cSheet={() => setActive("CharacterSheet")} equip={() => setActive("Equipment")} inv={() => setActive("Inventory")} journal = {() => setActive("Journal")}party={() => setActive("Party")} spells={() => setActive("Spells")} skill={() => setActive("Skills")} menu={() => setActive("Menu")} test={() => setActive("Test")}></Toolbar> : <div></div>}
      </div>
      <div>
        {active === "Menu" ? <Menu hero={hero} Back={() => setActive("Game")}></Menu> : <div></div>}
        {active === "Abilities" ? <Abilities hero={hero} Back={() => setActive("Game")}></Abilities> : <div></div>}
        {active === "CharacterSheet" ? <CharacterSheet parentCallback={handleCallback} hero={hero} Back={() => setActive("Game")}></CharacterSheet> : <div></div>}
        {active === "Combat" ? <Combat parentCallback={handleCallback} hero={hero} enemies={[rat(), rat(), rat()]} Back={() => setActive("Test")}></Combat> : <div></div>}
        {active === "Dialogue" ? <Dialogue parentCallback={handleCallback} hero={hero} talk={testDialogue(hero)} Back={() => setActive("Test")}></Dialogue> : <div></div>}
        {active === "Dungeon" ? <Dungeon parentCallback={handleCallback} hero={hero} dungeon={testDungeon()} Back={() => setActive("Test")}></Dungeon> : <div></div>}
        {active === "Equipment" ? <Equipment parentCallback={handleCallback} hero={hero} Back={() => setActive("Game")}></Equipment> : <div></div>}
        {active === "Inventory" ? <Inventory parentCallback={handleCallback} hero={hero} Back={() => setActive("Game")}></Inventory> : <div></div>}
        {active === "Journal" ? <Journal hero={hero} Back={() => setActive("Game")}></Journal> : <div></div>}
        {active === "Party" ? <Party hero={hero} Back={() => setActive("Game")}></Party> : <div></div>}
        {active === "Shop" ? <Shop parentCallback={handleCallback} shop={testShop()} hero={hero} Back={() => setActive("Test")}></Shop> : <div></div>}
        {active === "Skills" ? <SkillBook parentCallback={handleCallback} hero={hero} Back={() => setActive("Game")}></SkillBook> : <div></div>}
        {active === "Spells" ? <SpellBook hero={hero} Back={() => setActive("Game")}></SpellBook> : <div></div>}
        {active === "Test" ? <div className='menu-box'>
          <h2>Tests</h2>
          <div><button className='menu-button' onClick={() => setActive("Combat")}><h3>Test Combat</h3></button></div>
          <div><button className='menu-button' onClick={() => setActive("Dialogue")}><h3>Test Dialogue</h3></button></div>
          <div><button className='menu-button' onClick={() => setActive("Dungeon")}><h3>Test Dungeon</h3></button></div>
          <div><button className='menu-button' onClick={() => Heal(hero)}><h3>Test Heal</h3></button></div>
          <div><button className='menu-button' onClick={() => setActive("Shop")}><h3>Test Shop</h3></button></div>
          <div><button className='menu-button' onClick={() => TestXP(hero)}><h3>Test XP</h3></button></div>
          <div><button className='menu-button' onClick={() => setActive("Game")}><h3>Leave</h3></button></div>
        </div> : <div></div>}
      </div>
      {active !== "Combat" && active !== "Dungeon" && active !== "Shop" && active !== "Dialogue"? <div><h2>Map</h2></div> : <div></div>}
      <div style={{ marginLeft: "25%", marginRight: "25%", width: "auto" }}>
        <Log log={log} logName={"Game"}></Log>
      </div>
    </div>
  );
}

export default Game;