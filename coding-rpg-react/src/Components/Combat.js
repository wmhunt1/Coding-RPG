import '../App.css';
import { useState } from "react";
import { CombatRewards, CombatRound } from '../Scripts/CombatScripts';
import { RemoveItemFromInventory } from '../Scripts/CharacterScripts';
import Log from './Log';

function Combat(props) {
    const [hero, setHero] = useState(props.hero)
    const [inventory, setInventory] = useState(props.hero.Inventory)
    const [allies, setAllies] = useState([props.hero, props.hero.Companions[0]]);
    const [enemies, setEnemies] = useState(props.enemies);
    const [enemiesOverZero, setEnemiesOverZero] = useState(props.enemies.length)
    const [combatLog, setCombatLog] = useState(["Combat Started"]);
    const [action, setAction] = useState("Attack");

    function RunCombat(hero, allies, enemies, target, combatLog, action) {
        CombatRound(hero, allies, enemies, target, combatLog, action);
        var newHero = hero;
        setHero(newHero)
        var newAllies = [...allies]
        setAllies(newAllies)
        var newEnemies = [...enemies]
        setEnemies(newEnemies);
        var overZero = 0;
        for (let e = 0; e < enemies.length; e++) {
            if (enemies[e].CurrentHP) {
                overZero++;
            }
        }
        setEnemiesOverZero(overZero)
        if (overZero === 0) {
            CombatRewards(hero, allies, enemies)
        }
    }
    function handleConsumable(hero, allies, enemies, target, combatLog, action, inventory, item) {
        item.ConsumeEffect(hero)
        RemoveItemFromInventory(hero, inventory, item)
        var newInventory = [...hero.Inventory];
        setInventory(newInventory);
        RunCombat(hero, allies, enemies, target, combatLog, action)
        combatLog.push(hero.Name + " uses a(n) " + item.Name)
        setAction("Attack")
    }
    const alliesList = allies.filter(ally => ally.CurrentHP > 0).map((ally, index) => <h4 key={index}>{ally.Name} - HP {ally.CurrentHP}/{ally.MaxHP}, MP {ally.CurrentMP}/{ally.MaxMP}, SP {ally.CurrentSP}/{ally.MaxSP}</h4>)
    const enemiesList = enemies.filter(enemy => enemy.CurrentHP > 0).map((enemy, index) => <h4 key={index}>{enemy.Name} - HP: {enemy.CurrentHP}/{enemy.MaxHP}, MP: {enemy.CurrentMP}/{enemy.MaxMP}, SP: {enemy.CurrentSP}/{enemy.MaxSP}  <button onClick={() => RunCombat(hero, allies, enemies, enemy, combatLog, action)}><h4>Target</h4></button></h4>)
    const consumableItemList = inventory.filter(item => item.Type === "Consumable");
    const itemList = consumableItemList.map((item, index) => <h4 key={index}>{item.Name} - QTY: {item.Quantity} <button onClick={() => { handleConsumable(hero, allies, enemies, enemies[0], combatLog, "Use", inventory, item) }}><h4>Use</h4></button></h4>)
    if (hero.CurrentHP > 0 && enemiesOverZero > 0) {
        return (
            <div>
                <div>
                    <div style={{ height: "250px", width: "400px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll" }}>
                        <h3>{hero.Name}'s Party</h3>
                        {alliesList}
                    </div>
                    <div style={{ display: "inline-block", verticalAlign: "text-top", paddingLeft: "1%", paddingRight: "1%", width: "200px"}}>
                        <Log log={combatLog} logName={"Combat"}></Log>
                    </div>
                    <div style={{ height: "250px", width: "400px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll" }}>
                        <h3>Enemies' Party</h3>
                        {enemiesList}
                    </div>
                </div>
                <div>
                    <div style={{ height: "200px", width: "400px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", marginRight: "1%", marginLeft: "1%", marginTop: "1%", overflow: "scroll" }}>
                        <h3>Action Selection</h3>
                        <button onClick={() => setAction("Attack")}><h4>Basic Attack</h4></button>
                        <button onClick={props.Back}><h4>Run Away</h4></button>
                    </div>
                    <div style={{ display: "inline-block", verticalAlign: "text-top", paddingLeft: "1%", paddingRight: "1%", margin: "auto" }}>
                    </div>
                    <div style={{ height: "200px", width: "400px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", marginRight: "1%", marginLeft: "1%", marginTop: "1%", overflow: "scroll" }}>
                        <h3>Inventory</h3>
                        {itemList}
                    </div>
                </div>
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