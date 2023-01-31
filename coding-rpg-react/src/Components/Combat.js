import '../App.css';
import { useState } from "react";
import { CombatRound } from '../Scripts/CombatScripts';
//import { EarnXP } from '../Scripts/CharacterScripts';

function Combat(props) {
    const [hero, setHero] = useState(props.Hero)
    const [enemies, setEnemies] = useState(props.Enemies);
    const [enemiesOverZero, setEnemiesOverZero] = useState(props.Enemies.length)
    function RunCombat(hero, enemies, target) {
        CombatRound(hero, enemies, target);
        setHero(hero)
        setEnemies(enemies);
        var overZero = 0;
        for (let e = 0; e < enemies.length; e++)
        {
            if (enemies[e].CurrentHP)
            {
                overZero++;
            }
        }
        setEnemiesOverZero(overZero)
    }
    const enemiesList = enemies.map((enemy) => <h4 key={enemy.Id}>{enemy.Name} - {enemy.CurrentHP}/{enemy.MaxHP} <button onClick={() => RunCombat(hero, enemies, enemy)}>Attack</button></h4>)
    if (hero.CurrentHP > 0 && enemiesOverZero > 0) {
        return (
            <div>
                <h3>Allies</h3>
                <h4>{hero.Name} - HP {hero.CurrentHP}/{hero.MaxHP}</h4>
                <h3>Enemies</h3>
                {enemiesList}
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