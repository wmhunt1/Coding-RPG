import '../App.css';
import { useState } from "react";
import { CombatRound } from '../Scripts/CombatScripts';
//import { EarnXP } from '../Scripts/CharacterScripts';

function Combat(props) {
    const [hero, setHero] = useState(props.hero)
    const [enemies, setEnemies] = useState(props.enemies);
    const [enemiesOverZero, setEnemiesOverZero] = useState(props.enemies.length)
    const [combatLog, setCombatLog] = useState(["Combat Started"]);
    function RunCombat(hero, enemies, target, combatLog) {
        CombatRound(hero, enemies, target.Enemy, combatLog);
        setHero(hero)
        setEnemies(enemies);
        var overZero = 0;
        for (let e = 0; e < enemies.length; e++) {
            if (enemies[e].Enemy.CurrentHP) {
                overZero++;
            }
        }
        setEnemiesOverZero(overZero)
        setCombatLog(combatLog)
    }
    const enemiesList = enemies.map((enemy) => <h4 key={enemy.Id}>{enemy.Enemy.Name} - {enemy.Enemy.CurrentHP}/{enemy.Enemy.MaxHP} <button onClick={() => RunCombat(hero, enemies, enemy, combatLog)}>Attack</button></h4>)
    const combatLogList = combatLog.map((message, index) => <h5 key={index}>{message}</h5>)
    if (hero.CurrentHP > 0 && enemiesOverZero > 0) {
        return (
            <div>
                <h3>Allies</h3>
                <h4>{hero.Name} - HP {hero.CurrentHP}/{hero.MaxHP}</h4>
                <h3>Enemies</h3>
                {enemiesList}
                <div>
                    <h2>Combat Log</h2>
                    {combatLogList}
                </div>
                <button onClick={props.Back}><h3>Back</h3></button>
            </div>
        );

    }
    else if (hero.CurrentHP > 0) {
        return (
            <div>
                <h4>{hero.Name} - HP {hero.CurrentHP}/{hero.MaxHP}</h4>
                <h4>{hero.Name} is victorious!</h4>
                <button onClick={props.Back}><h3>Back</h3></button>
            </div>
        );
    }
    else {
        return (
            <div>
                <h4>Name: {hero.Name} cannot Fight</h4>
                <button onClick={props.Back}><h3>Back</h3></button>
            </div>
        );
    }
}

export default Combat;