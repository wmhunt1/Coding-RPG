import React, { Component } from "react";
import Intro from "./pages/Intro";
import CharacterCreation from "./pages/CharacterCreation";
import Main from "./pages/Main";
import Title from "./Title";

function Game() {
return (
  <div>
    <h1>Coding RPG</h1>
    <Intro/>
    <CharacterCreation/>
    <Main/>
  </div>
)
}
export default Game;