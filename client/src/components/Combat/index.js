import React, { useState, } from 'react';

const hero = {name: "Hero", hp: 10}
const goblin = {name: "Goblin", hp: 10}
export default function Combat()
{
    const [enemy, setEnemy] = useState(goblin.name);
    const [enemyHP, setEnemyHP] = useState(goblin.hp)
    const [player, setPlayer] = useState(hero);
    // const damage = () =>{
    //     setEnemyHP(5)
    // }
    //const attack = () =>{}
    return(
        <div id = "combat-window">
            <h3>Combat</h3>
            <div id = "enemy-div">
                {goblin.name}: {goblin.hp}
            </div>
            <div id = "player-div">
                {player.name}: {player.hp}
            </div>
            <button 
            // onClick={setEnemyHP(5)}
            >Attack</button>
        </div>
    )
}