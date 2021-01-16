import React, { useState, } from 'react';
import "./index.css"
import {combat} from "../../scripts/combatScripts.js"
import Goblin from "../../assets/characters/goblin.png";
import Player from "../../assets/characters/player.png";
let hero = { name: "Hero", img: Player, hp: 10 };
let goblin = { name: "Goblin", img: Goblin, hp: 10 };
export default function Combat() {
    const [player, setPlayer] = useState(hero);
    const [playerHP, setPlayerHP] = useState(hero.hp)
    const [enemy, setEnemy] = useState(goblin);
    const [enemyHP, setEnemyHP] = useState(goblin.hp)
    
    const handleCombat = (char1,char2) =>{
        combat(char1,char2)
        setPlayerHP(char1.hp)
        setEnemyHP(char2.hp)
    }
    return (
        <div id="combat-window">
            <h3>Combat</h3>
            <div id="enemy-div">
                <h4>Name: {enemy.name}</h4>
                <img height="100px" width="100px" src={enemy.img} alt=""></img>
                <p>HP: {enemyHP}</p>
            </div>
            <div id="player-div">
                <h4>Name: {player.name}</h4>
                <img height="100px" width="100px" src={player.img} alt=""></img>
                <p>HP: {playerHP}</p>
            </div>
            <button onClick={() =>{handleCombat(hero,goblin)}}>Fight</button>
        </div>
    )
}