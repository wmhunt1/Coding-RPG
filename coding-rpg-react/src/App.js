import { useState } from "react";
import Game from "./Components/Game";
import MainMenu from "./Components/MainMenu";
import './App.css';

var newHero = { Name: "Hero", Log: ["Entering World"], Level: 1, CurrentXP: 0, MaxXP: 100, CurrentHP: 10, MaxHP: 10, CurrentMP: 10, MaxMP: 10, CurrentSP: 10, MaxSP: 10, Strength: 10, Weapon: {Name: "Dagger", Type: "Weapon", Damage: 1, DamageType:"Piercing", Cost: 2, Quantity: 1}, Inventory: [{Name: "Club", Type: "Weapon", Damage: 1, DamageType:"Bludgeoning", Cost: 2, Quantity: 1}]}
function App() {
  const [active, setActive] = useState("MainMenu");
  const hero = newHero;
  if (active === "MainMenu") {
    return (
      <div className="App">
        <h1>Coding RPG</h1>
        <MainMenu hero={hero} NewGame={() => setActive("Game")}></MainMenu>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <h1>Coding RPG</h1>
        <Game hero={hero} Back={() => setActive("MainMenu")}></Game>
      </div>
    );
  }

}

export default App;
