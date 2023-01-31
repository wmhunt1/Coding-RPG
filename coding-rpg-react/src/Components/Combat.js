import '../App.css';
import { useState } from "react";

var Enemy = { Name: "Rat", Level: 1, CurrentXP: 10, MaxXP: 100, CurrentHP: 5, MaxHP: 5, Strength: 5 }
function Combat(props) {
    const [hero, setHero] = useState(props.Hero)
    const [heroHP, setHeroHP] = useState(props.Hero.CurrentHP)
    const [enemy, setEnemy] = useState(props.Enemy);
    const [enemyHP, setEnemyHP] = useState(props.Enemy.CurrentHP);
    const [heroMessage, setHeroMessage] = useState();
    const [enemyMessage, setEnemyMessage] = useState();
    function AttackHero(char1, char2) {
        char1.CurrentHP -= char2.Strength;
        setHero(char1);
        setHeroHP(char1.CurrentHP);
        setHeroMessage(char1.Name + " Attacks " + char2.Name);
    }
    function AttackEnemy(char1, char2) {
        char1.CurrentHP -= char2.Strength;
        setEnemy(char1);
        setEnemyHP(char1.CurrentHP);
        setEnemyMessage(char1.Name + " Attacks " + char2.Name);
    }
    function CombatRound(hero, enemy) {
        if (hero.CurrentHP > 0) {
            AttackEnemy(enemy, hero);
        }
        if (enemy.CurrentHP > 0) {
            AttackHero(hero, enemy);
        }
        if (hero.CurrentHP > 0 && enemy.CurrentHP <= 0) {
            hero.CurrentXP += enemy.CurrentXP;
        }
    }
    if (hero.CurrentHP > 0 && enemy.CurrentHP > 0) {
        return (
            <div>
                <h4>Name: {hero.Name} - HP {heroHP}/{hero.MaxHP}</h4>
                <h5>Action: {heroMessage}</h5>
                <button onClick={() => CombatRound(hero, enemy)}>Fight!</button>
                <h4>Name: {enemy.Name} - HP {enemyHP}/{enemy.MaxHP}</h4>
                <h5>Action: {enemyMessage}</h5>
                <button onClick={props.Back}><h3>Back</h3></button>
            </div>
        );

    }
    else if (hero.CurrentHP > 0) {
        return (
            <div>
                <h4>Name: {hero.Name} - HP {heroHP}/{hero.MaxHP}</h4>
                <h5>Action: {heroMessage}</h5>
                <h4>Name: {enemy.Name} - HP {enemyHP}/{enemy.MaxHP}</h4>
                <h5>Action: {enemyMessage}</h5>
                <h4>Name: {hero.Name} is victorious!</h4>
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