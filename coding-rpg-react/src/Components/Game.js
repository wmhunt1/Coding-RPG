import '../App.css';
import { useState } from "react";
import { HealHP } from '../Scripts/CharacterScripts';
import CharacterSheet from './CharacterSheet';
import Inventory from './Inventory';
import Combat from './Combat';
import Equipment from './Equipment';
function Game(props) {
  const [active, setActive] = useState("Game");
  const [hero, setHero] = useState(props.hero)
  const [log, setLog] = useState([props.hero.Log]);

  function Heal(char) {
    HealHP(char, char.MaxHP)
    setHero(char);
    setLog(char.log);
  }
  const logList = hero.Log.map((message, index) => <h5 key={index}>{message}</h5>)
  if (active === "CharacterSheet") {
    return (<div>
      <CharacterSheet hero={hero} Back={() => setActive("Game")}></CharacterSheet>
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
  else if (active === "Combat") {
    return (<div>
      <Combat hero={hero} Enemies={[{ Id: 1, Name: "Rat 1", Log: [], Level: 1, CurrentXP: 10, MaxXP: 100, CurrentHP: 5, MaxHP: 5, Strength: 1, Weapon: { Name: "Bite", Damage: 1, DamageType: "Piercing" } }, { Id: 2, Name: "Rat 2", Log: [], Level: 1, CurrentXP: 10, MaxXP: 100, CurrentHP: 5, MaxHP: 5, Strength: 1, Weapon: { Name: "Dagger", Damage: 1, DamageType: "Piercing" } }]} Back={() => setActive("Game")}></Combat>
    </div>)
  }
  else {
    return (
      <div>
        <h2>Toolbar</h2>
        <div>
          <button onClick={() => setActive("CharacterSheet")}><h3>Character Sheet</h3></button>
          <button onClick={() => setActive("Equipment")}><h3>Equipment</h3></button>
          <button onClick={() => setActive("Inventory")}><h3>Inventory</h3></button>
        </div>
        <div>
          <h2>Actions</h2>
        </div>
        <div>
          <h2>Game Log</h2>
          {logList}
        </div>
        <button onClick={props.Back}><h3>Main Menu</h3></button>
        <div>
          <h2>Tests</h2>
          <button onClick={() => setActive("Combat")}><h3>Test Combat</h3></button>
          <button onClick={() => Heal(props.hero, log)}><h3>Test Heal</h3></button>
        </div>

      </div>
    );
  }
}

export default Game;