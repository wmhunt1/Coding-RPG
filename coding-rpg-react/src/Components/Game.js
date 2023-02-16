import '../App.css';
import './Game.css'
import { useState } from "react";
import Abilities from './Abilities';
import Bank from './Bank';
import CharacterSheet from './CharacterSheet';
import Combat from './Combat';
import Dialogue from './Dialogue';
import Dungeon from './Dungeon';
import Equipment from './Equipment';
import Inventory from './Inventory';
import Journal from './Journal';
import Log from './Log';
import MainMenu from './MainMenu';
import Map from './Map';
import Menu from './Menu';
import Party from './Party';
import SkillBook from './SkillBook';
import SkillNode from './SkillNode';
import SpellBook from './SpellBook';
import Shop from './Shop';
import Toolbar from './Toolbar';
import { worldMap } from '../Database/MapsDB';

function Game(props) {
  const [active, setActive] = useState("MainMenu");
  const [hero, setHero] = useState(props.hero)
  const [log, setLog] = useState(props.log)
  const [combat, setCombat] = useState(null)
  const [dialogue, setDialogue] = useState(null)
  const [dungeon, setDungeon] = useState(null)
  const [shop, setShop] = useState(null)
  const [skill, setSkill] = useState()
  const handleCallback = (childData, location) => {
    var newLog = [...childData.Log]
    setLog(newLog)
    if (location !== undefined) {
      setActive(location.active)
      if (location.combat !== null) {
        setCombat(location.combat)
      }
      if (location.dialogue !== null) {
        setDialogue(location.dialogue)
      }
      if (location.dungeon !== null) {
        setDungeon(location.dungeon)
      }
      if (location.shop !== null) {
        setShop(location.shop)
      }
      if (location.skill !== null) {
        setSkill(location.skill)
      }
    }
  }
  return (
    <div>
      <div>
        {active !== "Combat" && active !== "Dungeon" && active !== "Dialogue" && active !== "MainMenu"? <Toolbar home={() => setActive("Game")} abil={() => setActive("Abilities")} cSheet={() => setActive("CharacterSheet")} equip={() => setActive("Equipment")} inv={() => setActive("Inventory")} journal={() => setActive("Journal")} party={() => setActive("Party")} spells={() => setActive("Spells")} skill={() => setActive("Skills")} menu={() => setActive("Menu")} test={() => setActive("Test")}></Toolbar> : <div></div>}
      </div>
      <div>
        {active === "Menu" ? <Menu hero={hero} Back={() => setActive("Game")} MainMenu={()=> setActive("MainMenu")}></Menu> : <div></div>}
        {active === "Abilities" ? <Abilities hero={hero} Back={() => setActive("Game")}></Abilities> : <div></div>}
        {active === "Bank" ? <Bank parentCallback={handleCallback} hero={hero} Back={() => setActive("Game")}></Bank> : <div></div>}
        {active === "CharacterSheet" ? <CharacterSheet parentCallback={handleCallback} hero={hero} Back={() => setActive("Game")}></CharacterSheet> : <div></div>}
        {active === "Combat" ? <Combat parentCallback={handleCallback} hero={hero} enemies={combat} Back={() => setActive("Game")}></Combat> : <div></div>}
        {active === "Dialogue" ? <Dialogue parentCallback={handleCallback} hero={hero} talk={dialogue} Back={() => setActive("Game")}></Dialogue> : <div></div>}
        {active === "Dungeon" ? <Dungeon parentCallback={handleCallback} hero={hero} dungeon={dungeon} Back={() => setActive("Game")}></Dungeon> : <div></div>}
        {active === "Equipment" ? <Equipment parentCallback={handleCallback} hero={hero} log={hero} Back={() => setActive("Game")}></Equipment> : <div></div>}
        {active === "Inventory" ? <Inventory parentCallback={handleCallback} hero={hero} Back={() => setActive("Game")}></Inventory> : <div></div>}
        {active === "Journal" ? <Journal hero={hero} skill={skill} Back={() => setActive("Game")}></Journal> : <div></div>}
        {active === "MainMenu" ? <MainMenu hero={hero} NewGame={() => setActive("Game")}></MainMenu>: <div></div>}
        {active === "Party" ? <Party hero={hero} Back={() => setActive("Game")} parentCallback={handleCallback}></Party> : <div></div>}
        {active === "Skill" ? <SkillNode parentCallback={handleCallback} hero={hero} node={skill} Back={() => setActive("Game")} ></SkillNode> : <div></div>}
        {active === "Shop" ? <Shop parentCallback={handleCallback} shop={shop} hero={hero} Back={() => setActive("Game")}></Shop> : <div></div>}
        {active === "Skills" ? <SkillBook parentCallback={handleCallback} hero={hero} Back={() => setActive("Game")}></SkillBook> : <div></div>}
        {active === "Spells" ? <SpellBook hero={hero} Back={() => setActive("Game")} parentCallback={handleCallback}></SpellBook> : <div></div>}
        {active === "Test" ? <div className='menu-box'>
          <h2>Tests</h2>
          <div><button className='menu-button' onClick={() => setActive("Bank")}><h3>Test Bank</h3></button></div>
          <div><button className='menu-button' onClick={() => setActive("Game")}><h3>Leave</h3></button></div>
        </div> : <div></div>}
      </div>
      {active === "Game" ? <div><div style={{ marginLeft: "20%", marginRight: "20%" }}><Map parentCallback={handleCallback} hero={hero} map={worldMap(hero)}></Map></div> </div> : <div> </div>}
      {active !== "Dungeon" && active !== "Dialogue" && active !== "Combat" && active !== "MainMenu"? <div style={{ marginLeft: "25%", marginRight: "25%", width: "auto", height: "200px" }}>
        <Log log={log} logName={"Game"}></Log>
      </div> : <div></div>}
    </div>
  );
}

export default Game;