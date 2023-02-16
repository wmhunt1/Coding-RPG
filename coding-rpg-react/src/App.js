import { useState } from "react";
import Game from "./Components/Game";
import MainMenu from "./Components/MainMenu";
import './App.css';
import { hero } from "./Database/CharactersDB";

var newHero = hero()
function App() {
  const hero = newHero;
  return (
    <div>
       <div style={{ height: "850px", border: "solid", marginLeft: "10%", marginRight: "10%", paddingBottom: "5%", paddingTop: ".5%", marginBottom: "1%", textAlign: "center" }}>
        <h1 style={{ lineHeight: "5pt" }}>Coding RPG</h1>
        <Game hero={hero} log={hero.Log}></Game>
      </div>
      <footer style={{ textAlign: "left", marginLeft: "1%" }}>Coding RPG - 2023</footer>
    </div>
  );
}

export default App;
