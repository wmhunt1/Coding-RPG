import { useState } from "react";
import Game from "./Components/Game";
import MainMenu from "./Components/MainMenu";
import './App.css';
import { hero } from "./Database/Characters";

var newHero = hero()
function App() {
  const [active, setActive] = useState("MainMenu");
  const hero = newHero;
  return (
    <div>
      {active === "MainMenu" ? <div style={{ height: "100%", border: "solid", marginLeft: "10%", marginRight: "10%", paddingBottom: "25%", paddingTop: "1%", marginBottom: "1%", textAlign: "center" }}>
        <h1>Coding RPG</h1>
        <MainMenu hero={hero} NewGame={() => setActive("Game")}></MainMenu>
      </div> : <div></div>}
      {active === "Game" ? <div style={{ height: "100%", border: "solid", marginLeft: "10%", marginRight: "10%", paddingBottom: "5%", paddingTop: "1%", marginBottom: "1%", textAlign: "center" }}>
        <h1>Coding RPG</h1>
        <Game hero={hero} log={hero.Log}Back={() => setActive("MainMenu")}></Game>
      </div> : <div></div>}
      <footer style={{ textAlign: "left", marginLeft: "1%" }}>Coding RPG - 2023</footer>
    </div>
  );
}

export default App;
