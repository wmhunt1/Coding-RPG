import '../App.css';
import { useState } from "react";
import CharacterSheet from './CharacterSheet';
import Inventory from './Inventory';
import Combat from './Combat';
function Game(props) {
  const [active, setActive] = useState("Game");
  const [hero, setHero] = useState(props.Hero)
  function Heal(char)
  {
    char.CurrentHP = char.MaxHP;
    setHero(char);
  }
  if (active == "CharacterSheet") {
    return (<div>
      <CharacterSheet Hero={hero} Back={() => setActive("Game")}></CharacterSheet>
    </div>)
  }
  else if (active == "Inventory") {
    return (<div>
      <Inventory Hero={hero} Back={() => setActive("Game")}></Inventory>
    </div>)
  }
  else if (active == "Combat") {
    return (<div>
      <Combat Hero={hero} Enemy = {{ Name: "Rat", Level: 1, CurrentXP: 10, MaxXP: 100, CurrentHP: 5, MaxHP: 5, Strength: 5 }} Back={() => setActive("Game")}></Combat>
    </div>)
  }
  else {
    return (
      <div>
        <div>
          <button onClick={() => setActive("CharacterSheet")}><h3>Character Sheet</h3></button>
          <button onClick={() => setActive("Inventory")}><h3>Inventory</h3></button>
        </div>
        <div>
        <h2>Tests</h2>
        <button onClick={() => setActive("Combat")}><h3>Test Combat</h3></button>
        <button onClick={() => Heal(props.Hero)}><h3>Test Heal</h3></button>
        </div>
        <button onClick={props.Back}><h3>Back to Main Menu</h3></button>
      </div>
    );
  }
}

export default Game;