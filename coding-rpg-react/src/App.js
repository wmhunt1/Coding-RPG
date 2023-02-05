import { useState } from "react";
import Game from "./Components/Game";
import MainMenu from "./Components/MainMenu";
import './App.css';
import { dog } from "./Database/Characters";
import { rage } from "./Database/Abilities";
import { healingPotion, sword, tunic } from "./Database/Items";
import { basicHeal, fireBall, magicMissile } from "./Database/Spells";

var newHero = { Name: "Hero", Log: [], Level: 1, CurrentXP: 50, MaxXP: 50, CurrentHP: 10, MaxHP: 10, CurrentMP: 10, MaxMP: 10, CurrentSP: 10, MaxSP: 10, Strength: 10, StrBonus: 0, StrPenalty: 0, Constitution: 10, ConBonus: 0, ConPenalty: 0, Dexterity: 10, DexBonus: 0, DexPenalty: 0, Intelligence: 10, Wisdom: 10, Charisma: 10, WillPower: 10, Perception: 10, Luck: 10, Beauty: 10, Speed: 10, Weapon: sword(), Torso: tunic(), Inventory: [healingPotion()], Gold: 5, Companions: [dog()], Abilities: [rage()], SpellBook: [basicHeal(), fireBall(), magicMissile()], Buffs: [], DeBuffs: [], ItemDrops: [] }
function App() {
  const [active, setActive] = useState("MainMenu");
  const hero = newHero;
  if (active === "MainMenu") {
    return (
      <div>
        <div style={{ height: "100%", border: "solid", marginLeft: "10%", marginRight: "10%", paddingBottom: "25%", paddingTop: "1%", marginBottom: "1%", textAlign: "center" }}>
          <h1>Coding RPG</h1>
          <MainMenu hero={hero} NewGame={() => setActive("Game")}></MainMenu>

        </div>
        <footer style={{ textAlign: "left", marginLeft: "1%" }}>Coding RPG - 2023</footer>
      </div>
    );
  }
  else {
    return (
      <div>
        <div style={{ height: "100%", border: "solid", marginLeft: "10%", marginRight: "10%", paddingBottom: "5%", paddingTop: "1%", marginBottom: "1%", textAlign: "center" }}>
          <h1>Coding RPG</h1>
          <Game hero={hero} Back={() => setActive("MainMenu")}></Game>
        </div>
        <footer style={{ textAlign: "left", marginLeft: "1%" }}>Coding RPG - 2023</footer>
      </div>
    );
  }
}

export default App;
