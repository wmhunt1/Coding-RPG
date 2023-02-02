import '../App.css';
import { useState, useRef, useEffect } from "react";
import { CombatRound } from '../Scripts/CombatScripts';
import { RemoveItemFromInventory } from '../Scripts/CharacterScripts';

function Combat(props) {
    const messagesEndRef = useRef(null)
    const [hero, setHero] = useState(props.hero)
    const [inventory, setInventory] = useState(props.hero.Inventory)
    const [enemies, setEnemies] = useState(props.enemies);
    const [enemiesOverZero, setEnemiesOverZero] = useState(props.enemies.length)
    const [combatLog, setCombatLog] = useState(["Combat Started"]);
    const [action, setAction] = useState("Attack");

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        //scrollToBottom()
    }, [combatLog]);

    function RunCombat(hero, enemies, target, combatLog, action) {
        CombatRound(hero, enemies, target.Enemy, combatLog, action);
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
    function handleConsumable(hero, enemies, target, combatLog, action, inventory, item) {
        item.ConsumeEffect(hero)
        RemoveItemFromInventory(hero, inventory, item)
        var newInventory = [...hero.Inventory];
        setInventory(newInventory);
        RunCombat(hero, enemies, target, combatLog, action)
        combatLog.push(hero.Name + " uses a(n) " + item.Name)
        setCombatLog(combatLog)
        setAction("Attack")
    }
    const enemiesList = enemies.map((enemy) => <h4 key={enemy.Id}>{enemy.Enemy.Name} - HP: {enemy.Enemy.CurrentHP}/{enemy.Enemy.MaxHP}, MP: {enemy.Enemy.CurrentMP}/{enemy.Enemy.MaxMP}, SP: {enemy.Enemy.CurrentSP}/{enemy.Enemy.MaxSP}  <button onClick={() => RunCombat(hero, enemies, enemy, combatLog, action)}>Target</button></h4>)
    const combatLogList = combatLog.map((message, index) => <h5 key={index}>{message}</h5>)
    const consumableItemList = inventory.filter(item => item.Type === "Consumable");
    const itemList = consumableItemList.map((item, index) => <h4 key={index}>{item.Name} - QTY: {item.Quantity} <button onClick={() => { handleConsumable(hero, enemies, enemies[0], combatLog, "Use", inventory, item) }}>Use</button></h4>)
    if (hero.CurrentHP > 0 && enemiesOverZero > 0) {
        return (
            <div>
                <div style={{ display: "inline-block", verticalAlign: "text-top" ,border: "solid", paddingLeft: "1%", paddingRight: "1%", margin: "auto"}}>
                    <h3>{hero.Name}'s Party</h3>
                    <h4>{hero.Name} - HP {hero.CurrentHP}/{hero.MaxHP}, MP {hero.CurrentMP}/{hero.MaxMP}, SP HP {hero.CurrentSP}/{hero.MaxSP}</h4>
                </div>
                <div style={{ display: "inline-block", verticalAlign: "text-top", paddingLeft: "1%", paddingRight: "1%", margin: "auto"}}>
                    <h3> VS </h3>
                </div>
                <div style={{ display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", margin: "auto"}}>
                    <h3>Enemies</h3>
                    {enemiesList}
                </div>
                <div>
                    <h3>Action Selection</h3>
                    <button onClick={() => setAction("Attack")}><h4>Basic Attack</h4></button>
                    <button onClick={props.Back}><h4>Run Away</h4></button>
                </div>
                <div>
                    <h3>Inventory</h3>
                    {itemList}
                </div>
                <div>
                    <h3>Combat Log</h3>
                    <div style={{ overflowAnchor: "none", marginLeft: "25%", marginRight: "25%", marginBottom: "1%", height: `200px`, overflow: "scroll", border: "solid", textAlign: "center" }}>
                        {combatLogList}
                        <div ref={messagesEndRef}></div>
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