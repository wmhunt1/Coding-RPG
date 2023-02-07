import '../App.css';
import './Game.css';
import { useState } from "react";
import { CombatRewards, CombatRound } from '../Scripts/CombatScripts';
import { RemoveItemFromInventory } from '../Scripts/ItemScripts';
import Log from './Log';

function Combat(props) {
    const [hero, setHero] = useState(props.hero)
    const [abilities, setAbilities] = useState(props.hero.Abilities)
    const [inventory, setInventory] = useState(props.hero.Inventory)
    const [spells, setSpells] = useState(props.hero.SpellBook)
    const [allies, setAllies] = useState([props.hero, ...props.hero.Companions])
    const [allyBuffs, setAllyBuffs] = useState(allies)
    const [allyDeBuffs, setAllyDeBuffs] = useState(allies)
    const [enemies, setEnemies] = useState(props.enemies);
    const [enemyBuffs, setEnemyBuffs] = useState(enemies)
    const [enemyDeBuffs, setEnemyDeBuffs] = useState(enemies)
    const [enemiesOverZero, setEnemiesOverZero] = useState(props.enemies.length)
    const [combatLog, setCombatLog] = useState(["Combat Started"]);
    const [action, setAction] = useState("Basic Attack")
    const [preparedSpell, setPreparedSpell] = useState(null)
    const [preparedAbility, setPreparedAbility] = useState(null)
    const [round, setRound] = useState(1)

    function RunCombat(hero, allies, enemies, target, combatLog, action, spell, abil, round) {
        CombatRound(hero, allies, enemies, target, combatLog, action, spell, abil, round);
        var newHero = hero;
        setHero(newHero)
        var newAllies = [...allies]
        setAllies(newAllies)
        var newAllyBuffs = [...allies]
        setAllyBuffs(newAllyBuffs)
        var newAllyDeBuffs = [...allies]
        setAllyDeBuffs(newAllyDeBuffs)
        var newEnemies = [...enemies]
        setEnemies(newEnemies);
        var newEnemyBuffs = [...enemies]
        setEnemyBuffs(newEnemyBuffs)
        var newEnemyDeBuffs = [...enemies]
        setEnemyDeBuffs(newEnemyDeBuffs)
        var overZero = 0;
        for (let e = 0; e < enemies.length; e++) {
            if (enemies[e].CurrentHP) {
                overZero++;
            }
        }
        setEnemiesOverZero(overZero)
        setAction("Basic Attack");
        setPreparedAbility(null)
        setPreparedSpell(null)
        if (overZero === 0) {
            CombatRewards(hero, allies, enemies)
            setHero(hero)
            props.parentCallback(hero);
        }
        round++;
        setRound(round)
        props.parentCallback(hero);
    }
    function handleConsumable(hero, allies, enemies, target, combatLog, action, spell, abil, round, inventory, item) {
        item.ConsumeEffect(hero)
        RemoveItemFromInventory(hero, inventory, item)
        combatLog.push(hero.Name + " uses a(n) " + item.Name)
        var newInventory = [...hero.Inventory];
        setInventory(newInventory);
        RunCombat(hero, allies, enemies, target, combatLog, action, spell, abil, round)
        setAction("Basic Attack")
    }
    function handleSpell(spell) {
        setPreparedSpell(spell)
        setAction(spell.Type)
    }
    function handleAbility(abil) {
        setPreparedAbility(abil)
        setAction(abil.Name)
    }
    const alliesList = allies.filter(ally => ally.CurrentHP > 0).map((ally, index) => <h4 key={index}>{ally.Condition.Symbol} {ally.Name} - HP {ally.CurrentHP}/{ally.MaxHP}, MP {ally.CurrentMP}/{ally.MaxMP}, SP {ally.CurrentSP}/{ally.MaxSP}, SPD: {ally.Speed}<button onClick={() => RunCombat(hero, allies, enemies, ally, combatLog, action, preparedSpell, preparedAbility, round)}><h4>Target</h4></button></h4>)
    const alliesBuffList = allyBuffs.filter(ally => ally.CurrentHP > 0 && ally.Buffs.length > 0).map((ally, index) => <h5 style={{ display: "inline" }} key={index}>{ally.Name}'s Buffs: {ally.Buffs.map((buff, index) => <li style={{ display: "inline" }} key={index}>{buff.Name}</li>)} </h5>)
    const alliesDeBuffList = allyDeBuffs.filter(ally => ally.CurrentHP > 0 && ally.DeBuffs.length > 0).map((ally, index) => <h5 style={{ display: "inline" }} key={index}>{ally.Name}'s DeBuffs: {ally.DeBuffs.map((deBuff, index) => <li style={{ display: "inline" }} key={index}>{deBuff.Name}</li>)} </h5>)
    const enemiesList = enemies.filter(enemy => enemy.CurrentHP > 0).map((enemy, index) => <h4 key={index}>{enemy.Condition.Symbol} {enemy.Name} - HP: {enemy.CurrentHP}/{enemy.MaxHP}, MP {enemy.CurrentMP}/{enemy.MaxMP}, SP: {enemy.CurrentSP}/{enemy.MaxSP}, SPD: {enemy.Speed}<button onClick={() => RunCombat(hero, allies, enemies, enemy, combatLog, action, preparedSpell, preparedAbility, round)}><h4>Target</h4></button></h4>)
    const enemiesBuffList = enemyBuffs.filter(enemy => enemy.CurrentHP > 0 && enemy.Buffs.length > 0).map((enemy, index) => <h5 style={{ display: "inline" }} key={index}>{enemy.Name}'s Buffs {enemy.Buffs.map((buff, index) => <li style={{ display: "inline" }} key={index}>{buff.Name}</li>)} </h5>)
    const enemiesDeBuffList = enemyDeBuffs.filter(enemy => enemy.CurrentHP > 0 && enemy.DeBuffs.length > 0).map((enemy, index) => <h5 style={{ display: "inline" }} key={index}>{enemy.Name}'s DeBuffs {enemy.DeBuffs.map((deBuff, index) => <li style={{ display: "inline" }} key={index}>{deBuff.Name}</li>)} </h5>)
    const consumableItemList = inventory.filter(item => item.Type === "Consumable");
    const itemList = consumableItemList.map((item, index) => <h5 key={index}>{item.Name} - QTY: {item.Quantity} <button onClick={() => { handleConsumable(hero, allies, enemies, enemies[0], combatLog, "Use", inventory, item) }}><h6>Use</h6></button></h5>)
    const abilList = abilities.map((abil, index) => <h5 key={index}>{abil.Name} ({abil.StaminaCost} SP) <button onClick={() => handleAbility(abil)}><h6>Use Ability</h6></button></h5>)
    const spellList = spells.map((spell, index) => <h5 key={index}>{spell.Name} ({spell.ManaCost} MP) <button onClick={() => handleSpell(spell)}><h6>Cast Spell</h6></button></h5>)
    return (<div>
        <div>{hero.CurrentHP > 0 ?
            <div>
                {enemiesOverZero > 0 ? <div>           <div>
                    <div>
                        <div className='team-box'>
                            <h3>{hero.Name}'s Party</h3>
                            <h5>Currently Selected Action: {action}</h5>
                            {alliesList}
                            <ul>{alliesBuffList}</ul>
                            <ul>{alliesDeBuffList}</ul>
                        </div>
                        <div style={{ display: "inline-block", verticalAlign: "text-top", paddingLeft: "1%", paddingRight: "1%", width: "200px" }}>
                            <Log log={combatLog} logName={"Combat"}></Log>
                        </div>
                        <div className='team-box'>
                            <h3>Enemies' Party</h3>
                            {enemiesList}
                            <ul>{enemiesBuffList}</ul>
                            <ul>{enemiesDeBuffList}</ul>
                        </div>
                    </div>
                    <div>
                        <div className='combat-options'>
                            <h3>Abilities</h3>
                            {abilList}
                        </div>
                        <div className='combat-options'>
                            <h3>Spells</h3>
                            {spellList}
                        </div>
                        <div className='combat-options'>
                            <h3>Inventory</h3>
                            {itemList}
                        </div>
                    </div>
                    <div style={{ paddingTop: "1%" }}>
                        <button style={{ marginBottom: "1%" }} onClick={props.Back}><h4>Run Away</h4></button>
                    </div>
                </div></div> : <div> <div>
                    <h4>{hero.Name}'s Party is victorious!</h4>
                    <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button>
                </div></div>}
            </div> : <div><h4>Name: {hero.Name} cannot Fight</h4>
                <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button></div>}</div>

    </div>)
}

export default Combat;