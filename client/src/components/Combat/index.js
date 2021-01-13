import React, { useState, } from 'react';
import "./index.css"
import Goblin from "../../assets/characters/goblin.png";
import Player from "../../assets/characters/player.png";
let hero = { name: "Hero", img: Player, hp: 10 };
let goblin = { name: "Goblin", img: Goblin, hp: 10 };
export default function Combat() {
    const [enemy, setEnemy] = useState(goblin);
    const [player, setPlayer] = useState(hero);
    return (
        <div id="combat-window">
            <h3>Combat</h3>
            <div id="enemy-div">
                <h4>Name: {enemy.name}</h4>
                <img height="100px" width="100px" src={enemy.img} alt=""></img>
                <p>HP: {enemy.hp}</p>
            </div>
            <div id="player-div">
                <h4>Name: {player.name}</h4>
                <img height="100px" width="100px" src={player.img} alt=""></img>
                <p>HP: {player.hp}</p>
            </div>
        </div>
    )
}