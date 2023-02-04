import '../App.css';
import { useState } from "react";
import { CombatRewards, CombatRound } from '../Scripts/CombatScripts';
import { RemoveItemFromInventory } from '../Scripts/CharacterScripts';
import Log from './Log';

function Combat(props) {
    const [hero, setHero] = useState(props.hero)
    const [abilities, setAbilities] = useState(props.hero.Abilities)
    const [inventory, setInventory] = useState(props.hero.Inventory)
    const [spells, setSpells] = useState(props.hero.SpellBook)
    const [allies, setAllies] = useState([props.hero, props.hero.Companions[0]])
    const [enemies, setEnemies] = useState(props.enemies);
    const [enemiesOverZero, setEnemiesOverZero] = useState(props.enemies.length)
    const [combatLog, setCombatLog] = useState(["Combat Started"]);
    const [action, setAction] = useState("Basic Attack")
    const [preparedSpell, setPreparedSpell] = useState(null)
    const [preparedAbility, setPreparedAbility] = useState(null)

    function RunCombat(hero, allies, enemies, target, combatLog, action, spell, abil) {
        CombatRound(hero, allies, enemies, target, combatLog, action, spell, abil);
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
        setAction("Basic Attack");
        setPreparedAbility(null)
        setPreparedSpell(null)
        if (overZero === 0) {
            CombatRewards(hero, allies, enemies)
            setHero(hero)
        }
    }
    function handleConsumable(hero, allies, enemies, target, combatLog, action, spell, abil, inventory, item) {
        item.ConsumeEffect(hero)
        RemoveItemFromInventory(hero, inventory, item)
        combatLog.push(hero.Name + " uses a(n) " + item.Name)
        var newInventory = [...hero.Inventory];
        setInventory(newInventory);
        RunCombat(hero, allies, enemies, target, combatLog, action, spell, abil)
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
    const alliesList = allies.filter(ally => ally.CurrentHP > 0).map((ally, index) => <h4 key={index}>{ally.Name} - HP {ally.CurrentHP}/{ally.MaxHP}, MP {ally.CurrentMP}/{ally.MaxMP}, SP {ally.CurrentSP}/{ally.MaxSP} <button onClick={() => RunCombat(hero, allies, enemies, ally, combatLog, action, preparedSpell, preparedAbility)}><h4>Target</h4></button></h4>)
    const enemiesList = enemies.filter(enemy => enemy.CurrentHP > 0).map((enemy, index) => <h4 key={index}>{enemy.Name} - HP: {enemy.CurrentHP}/{enemy.MaxHP}, MP: {enemy.CurrentMP}/{enemy.MaxMP}, SP: {enemy.CurrentSP}/{enemy.MaxSP}  <button onClick={() => RunCombat(hero, allies, enemies, enemy, combatLog, action, preparedSpell, preparedAbility)}><h4>Target</h4></button></h4>)
    const consumableItemList = inventory.filter(item => item.Type === "Consumable");
    const itemList = consumableItemList.map((item, index) => <h5 key={index}>{item.Name} - QTY: {item.Quantity} <button onClick={() => { handleConsumable(hero, allies, enemies, enemies[0], combatLog, "Use", inventory, item) }}><h6>Use</h6></button></h5>)
    const abilList = abilities.map((abil, index) => <h5 key={index}>{abil.Name} ({abil.StaminaCost} SP) <button onClick={() => handleAbility(abil)}><h6>Use Ability</h6></button></h5>)
    const spellList = spells.map((spell, index) => <h5 key={index}>{spell.Name} ({spell.ManaCost} MP) <button onClick={() => handleSpell(spell)}><h6>Cast Spell</h6></button></h5>)
    if (hero.CurrentHP > 0 && enemiesOverZero > 0) {
        return (
            <div>
                <div>
                    <div style={{ height: "250px", width: "400px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll" }}>
                        <h3>{hero.Name}'s Party</h3>
                        <h5>Currently Selected Action: {action}</h5>
                        {alliesList}
                    </div>
                    <div style={{ display: "inline-block", verticalAlign: "text-top", paddingLeft: "1%", paddingRight: "1%", width: "200px" }}>
                        <Log log={combatLog} logName={"Combat"}></Log>
                    </div>
                    <div style={{ height: "250px", width: "400px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll" }}>
                        <h3>Enemies' Party</h3>
                        {enemiesList}
                    </div>
                </div>
                <div>
                    <div style={{ height: "200px", width: "300px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", marginRight: "1%", marginLeft: "1%", marginTop: "1%", overflow: "scroll" }}>
                        <h3>Abilities</h3>
                        {abilList}
                    </div>
                    <div style={{ height: "200px", width: "300px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", marginRight: "1%", marginLeft: "1%", marginTop: "1%", overflow: "scroll" }}>
                        <h3>Spells</h3>
                        {spellList}
                    </div>
                    <div style={{ height: "200px", width: "300px", display: "inline-block", verticalAlign: "text-top", border: "solid", paddingLeft: "1%", paddingRight: "1%", marginRight: "1%", marginLeft: "1%", marginTop: "1%", overflow: "scroll" }}>
                        <h3>Inventory</h3>
                        {itemList}
                    </div>
                </div>
                <div style={{ paddingTop: "1%" }}>
                    <button onClick={props.Back}><h4>Run Away</h4></button>
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