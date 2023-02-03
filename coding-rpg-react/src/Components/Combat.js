import '../App.css';
import { useState, useRef, useEffect } from "react";
import { CombatRound } from '../Scripts/CombatScripts';
import { RemoveItemFromInventory } from '../Scripts/CharacterScripts';

function Combat(props) {
    const messagesEndRef = useRef(null)
    const [hero, setHero] = useState(props.hero)
    const [inventory, setInventory] = useState(props.hero.Inventory)
    const [allies, setAllies] = useState([props.hero, props.hero.Companions[0]]);
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

    function RunCombat(hero, allies, enemies, target, combatLog, action) {
        CombatRound(hero, allies, enemies, target.Enemy, combatLog, action);
        var newHero = hero;
        setHero(newHero)
        var newAllies = [...allies]
        setAllies(newAllies)
        var newEnemies = [...enemies]
        setEnemies(newEnemies);
        var overZero = 0;
        for (let e = 0; e < enemies.length; e++) {
            if (enemies[e].Enemy.CurrentHP) {
                overZero++;
            }
        }
        setEnemiesOverZero(overZero)
        setCombatLog(combatLog)
    }
    function handleConsumable(hero, allies, enemies, target, combatLog, action, inventory, item) {
        item.ConsumeEffect(hero)
        RemoveItemFromInventory(hero, inventory, item)
        var newInventory = [...hero.Inventory];
        setInventory(newInventory);
        RunCombat(hero, allies, enemies, target, combatLog, action)
        combatLog.push(hero.Name + " uses a(n) " + item.Name)
        setCombatLog(combatLog)
        setAction("Attack")
    }
    const alliesList = allies.map((ally, index) => <h4 key={index}>{ally.Name} - HP {ally.CurrentHP}/{ally.MaxHP}, MP {ally.CurrentMP}/{ally.MaxMP}, SP {ally.CurrentSP}/{ally.MaxSP}</h4>)
    const enemiesList = enemies.map((enemy) => <h4 key={enemy.Id}>{enemy.Enemy.Name} - HP: {enemy.Enemy.CurrentHP}/{enemy.Enemy.MaxHP}, MP: {enemy.Enemy.CurrentMP}/{enemy.Enemy.MaxMP}, SP: {enemy.Enemy.CurrentSP}/{enemy.Enemy.MaxSP}  <button onClick={() => RunCombat(hero, allies, enemies, enemy, combatLog, action)}><h4>Target</h4></button></h4>)
    const combatLogList = combatLog.map((message, index) => <h5 key={index}>{message}</h5>)
    const consumableItemList = inventory.filter(item => item.Type === "Consumable");
    const itemList = consumableItemList.map((item, index) => <h4 key={index}>{item.Name} - QTY: {item.Quantity} <button onClick={() => { handleConsumable(hero, allies, enemies, enemies[0], combatLog, "Use", inventory, item) }}><h4>Use</h4></button></h4>)
    if (hero.CurrentHP > 0 && enemiesOverZero > 0) {
        return (
            <div>
                <div>
                    <div style={{ height: "250px", width: "400px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", margin: "auto", overflow: "scroll" }}>
                        <h3>{hero.Name}'s Party</h3>
                        {alliesList}
                    </div>
                    <div style={{ display: "inline-block", verticalAlign: "text-top", paddingLeft: "1%", paddingRight: "1%", margin: "auto" }}>
                        <h3> VS </h3>
                    </div>
                    <div style={{ height: "250px", width: "400px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", margin: "auto", overflow: "scroll" }}>
                        <h3>Enemies</h3>
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