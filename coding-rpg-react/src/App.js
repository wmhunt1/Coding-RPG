import { useState } from "react";
import Game from "./Components/Game";
import MainMenu from "./Components/MainMenu";
import './App.css';

var Hero = { Name: "Hero", Level: 1, CurrentXP: 0, MaxXP: 100, CurrentHP: 10, MaxHP: 10, CurrentMP: 10, MaxMP: 10, CurrentSP: 10, MaxSP: 10, Strength: 10}
function App() {
  const [active, setActive] = useState("MainMenu");
  const hero = Hero;
  if (active === "MainMenu") {
    return (
      <div className="App">
        <h1>Coding RPG</h1>
        <MainMenu NewGame={() => setActive("Game")}></MainMenu>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <h1>Coding RPG</h1>
        <Game Hero={hero} Back={() => setActive("MainMenu")}></Game>
      </div>
    );
  }

}

export default App;
