import { useState } from "react";
import Game from "./Components/Game";
import MainMenu from "./Components/MainMenu";
import './App.css';
import { club, dagger, healingPotion, tunic } from "./Database/Items";

var newHero = { Name: "Hero", Log: ["Entering World"], Level: 1, CurrentXP: 0, MaxXP: 100, CurrentHP: 10, MaxHP: 10, CurrentMP: 10, MaxMP: 10, CurrentSP: 10, MaxSP: 10, Strength: 10, Constitution: 10, Dexterity: 10, Intelligence: 10, Wisdom: 10, Charisma: 10, WillPower: 10, Perception: 10, Luck: 10, Beauty: 10, Speed: 10, Weapon: dagger(), Torso: tunic(), Inventory: [healingPotion(), new club()], Gold: 5 }
function App() {
  const [active, setActive] = useState("MainMenu");
  const hero = newHero;
  if (active === "MainMenu") {
    return (
      <div style={{ border: "solid", marginLeft: "10%", marginRight: "10%", paddingBottom: "10%", paddingTop: "10", marginBottom: "10%", textAlign: "center" }}>
          <h1>Coding RPG</h1>
        <MainMenu hero={hero} NewGame={() => setActive("Game")}></MainMenu>
      </div>
    );
  }
  else {
    return (
      <div style={{border: "solid", marginLeft: "10%", marginRight: "10%", paddingBottom: "1%", paddingTop: "10", marginBottom: "10%", textAlign: "center" }}>
        <h1>Coding RPG</h1>
        <Game hero={hero} Back={() => setActive("MainMenu")}></Game>
      </div>
    );
  }

}

export default App;
