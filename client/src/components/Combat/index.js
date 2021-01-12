import React, { useState, } from 'react';
import Goblin from "../../assets/characters/goblin.png";
//import Player from "../../assets/characters/player.png";
let hero = { name: "Hero", img: "" };
let goblin = { name: "Goblin", img: Goblin };
export default function Combat() {
    const [enemy, setEnemy] = useState(goblin);
    const [player, setPlayer] = useState(hero);
    return (
        <div id="combat-window">
            <h3>Combat</h3>
            <div id="enemy-div">
                {enemy.name}
                <img src={enemy.img} alt=""></img>
            </div>
            <div id="player-div">
                {player.name}
                <img src={player.img} alt=""></img>
            </div>
        </div>
    )
}