import React from "react";
import Menu from "./Menu";
import Intro from "./Intro";
import CharacterCreation from "./CharacterCreation";

function Game() {
    return (
        <div>
      <header id = "title">
        <h1>Coding RPG</h1>
      </header>
      <Menu/>
      <Intro/>
      <CharacterCreation/>
      </div>
    );
  }
  
  export default Game;