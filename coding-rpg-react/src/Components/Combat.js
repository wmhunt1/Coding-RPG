import '../App.css';
import './Game.css';
import { useState } from "react";
import { CombatPenalties, CombatRewards, CombatRound } from '../Scripts/CombatScripts';
import { RemoveItemFromInventory } from '../Scripts/ItemScripts';
import { AddToCharacterLog } from '../Scripts/CharacterScripts';

function Combat(props) {
    const [hero, setHero] = useState(props.hero);
    const [abilities, setAbilities] = useState(props.hero.Abilities);
    const [inventory, setInventory] = useState(props.hero.Inventory);
    const [spells, setSpells] = useState(props.hero.BaseStats.SpellBook);
    const [allies, setAllies] = useState([props.hero, ...props.hero.Companions]);
    const [allyBuffs, setAllyBuffs] = useState(allies);
    const [allyDeBuffs, setAllyDeBuffs] = useState(allies);
    const [enemies, setEnemies] = useState(props.enemies);
    const [enemyBuffs, setEnemyBuffs] = useState(enemies);
    const [enemyDeBuffs, setEnemyDeBuffs] = useState(enemies);
    const [enemiesOverZero, setEnemiesOverZero] = useState(props.enemies.length);
    const [alliesOverZero, setAlliesOverZero] = useState(allies.length);
    const [action, setAction] = useState("Basic Attack");
    const [preparedSpell, setPreparedSpell] = useState(null);
    const [preparedAbility, setPreparedAbility] = useState(null);
    const [round, setRound] = useState(1);

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
            if (enemies[e].BaseStats.HP.Current) {
                overZero++;
            }
        }
        setEnemiesOverZero(overZero)
        setAction("Basic Attack");
        setPreparedAbility(null)
        setPreparedSpell(null)
        if (overZero === 0) {
            AddToCharacterLog(hero, "The Party is Victorious")
            CombatRewards(hero, allies, enemies)
            setHero(hero)
            props.Back()
            props.parentCallback(hero);
        }
        var overZeroA = 0;
        for (let a = 0; a < allies.length; a++) {
            if (allies[a].BaseStats.HP.Current) {
                overZeroA++;
            }
        }
        setAlliesOverZero(overZeroA)
        if (overZeroA === 0) {
            AddToCharacterLog(hero, "The Party was Defeated")
            CombatPenalties(hero)
            setHero(hero)
            props.Back()
            props.parentCallback(hero);
        }
        round++;
        setRound(round)
        props.parentCallback(hero);
    }
    function handleConsumable(hero, allies, enemies, target, combatLog, action, spell, abil, round, inventory, item) {
        if (item.SubType !== "Battle") {
            item.ConsumeEffect(hero, combatLog)
        }
        else {
            item.ConsumeEffect(hero, allies, enemies, target, combatLog)
        }
        RemoveItemFromInventory(hero, inventory, item, item.Quantity)
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
    const alliesList = allies.filter(ally => ally.BaseStats.HP.Current > 0).map((ally, index) => <h4 key={index}>{ally.Condition.Symbol} {ally.Name} - HP {ally.BaseStats.HP.Current + ally.BaseStats.HP.Temp}/{ally.BaseStats.HP.Max + ally.BaseStats.HP.Bonus - ally.BaseStats.HP.Penalty}, MP {ally.BaseStats.MP.Current}/{ally.BaseStats.MP.Max + ally.BaseStats.MP.Bonus - ally.BaseStats.MP.Penalty}, SP {ally.BaseStats.SP.Current}/{ally.BaseStats.SP.Max + ally.BaseStats.SP.Bonus - ally.BaseStats.SP.Penalty}, SPD: {ally.Attributes.Speed.Value + ally.Attributes.Speed.Bonus - ally.Attributes.Speed.Penalty} <button onClick={() => RunCombat(hero, allies, enemies, ally, hero.Log, action, preparedSpell, preparedAbility, round)}>Target</button></h4>)
    const alliesBuffList = allyBuffs.filter(ally => ally.BaseStats.HP.Current > 0 && ally.Buffs.length > 0).map((ally, index) => <h5 style={{ display: "inline" }} key={index}>{ally.Name}'s Buffs: {ally.Buffs.map((buff, index) => <li style={{ display: "inline" }} key={index}>{buff.Name}</li>)} </h5>)
    const alliesDeBuffList = allyDeBuffs.filter(ally => ally.BaseStats.HP.Current > 0 && ally.DeBuffs.length > 0).map((ally, index) => <h5 style={{ display: "inline" }} key={index}>{ally.Name}'s DeBuffs: {ally.DeBuffs.map((deBuff, index) => <li style={{ display: "inline" }} key={index}>{deBuff.Name}</li>)} </h5>)
    const enemiesList = enemies.filter(enemy => enemy.BaseStats.HP.Current > 0).map((enemy, index) => <h4 key={index}>{enemy.Condition.Symbol} {enemy.Name} - HP: {enemy.BaseStats.HP.Current}/{enemy.BaseStats.HP.Max + enemy.BaseStats.HP.Bonus - enemy.BaseStats.HP.Penalty}, MP {enemy.BaseStats.MP.Current}/{enemy.BaseStats.MP.Max + enemy.BaseStats.MP.Bonus - enemy.BaseStats.MP.Penalty}, SP: {enemy.BaseStats.SP.Current}/{enemy.BaseStats.SP.Max + enemy.BaseStats.SP.Bonus - enemy.BaseStats.SP.Penalty}, SPD: {enemy.Attributes.Speed.Value + enemy.Attributes.Speed.Bonus - enemy.Attributes.Speed.Penalty} <button onClick={() => RunCombat(hero, allies, enemies, enemy, hero.Log, action, preparedSpell, preparedAbility, round)}>Target</button></h4>)
    const enemiesBuffList = enemyBuffs.filter(enemy => enemy.BaseStats.HP.Current > 0 && enemy.Buffs.length > 0).map((enemy, index) => <h5 style={{ display: "inline" }} key={index}>{enemy.Name}'s Buffs {enemy.Buffs.map((buff, index) => <li style={{ display: "inline" }} key={index}>{buff.Name}</li>)} </h5>)
    const enemiesDeBuffList = enemyDeBuffs.filter(enemy => enemy.BaseStats.HP.Current > 0 && enemy.DeBuffs.length > 0).map((enemy, index) => <h5 style={{ display: "inline" }} key={index}>{enemy.Name}'s DeBuffs {enemy.DeBuffs.map((deBuff, index) => <li style={{ display: "inline" }} key={index}>{deBuff.Name}</li>)} </h5>)
    const itemList = inventory.filter(item => item.Type === "Consumable").map((item, index) => <h5 key={index}>{item.Name} - QTY: {item.Quantity} <button onClick={() => { handleConsumable(hero, allies, enemies, enemies[0], hero.Log, "Use", preparedSpell, preparedAbility, round, inventory, item) }}>Use</button></h5>)
    const abilList = abilities.map((abil, index) => <h5 key={index}>{abil.Name} ({abil.StaminaCost} SP) <button onClick={() => handleAbility(abil)}>Use</button></h5>)
    //const abilListSP = abilities.sort((a, b) => a.Name.localeCompare(b.Name)).map((abil, index) => <h5 key={index}>{abil.Name} ({abil.StaminaCost} SP) <button onClick={() => handleAbility(abil)}>Use</button></h5>)
    const spellList = spells.filter(spell => spell.Use !== "Utility").map((spell, index) => <h5 key={index}>{spell.Name} ({spell.ManaCost} MP) <button onClick={() => handleSpell(spell)}>Spell</button></h5>)
    //const spellListMP = spells.sort((a, b) => a.Name.localeCompare(b.Name)).map((spell, index) => <h5 key={index}>{spell.Name} ({spell.ManaCost} MP) <button onClick={() => handleSpell(spell)}>Spell</button></h5>)
    return (<div>
        <div>{alliesOverZero > 0 ?
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
                            {/* <Log log={hero.Log} logName={"Combat"}></Log> */}
                            <div style={{ paddingTop: "1%", marginTop: "100px" }}>
                                <button onClick={props.Back}><h4>Run Away</h4></button>
                            </div>
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
                            {/* <h4>Filter <button onClick={() => setActiveAbilList("SP")}>Can Use</button> <button onClick={() => setActiveAbilList("Default")}>Clear</button></h4>
                            {activeAbilList === "Default" ? <div>{abilList}</div>:<div>{abilListSP}</div>} */}
                            <div>{abilList}</div>
                        </div>
                        <div className='combat-options'>
                            <h3>Spells</h3>
                            {/* <h4>Filter <button onClick={() => setActiveSpellList("MP")}>Can Cast</button> <button onClick={() => setActiveSpellList("Default")}>Clear</button></h4>
                            {activeSpellList === "Default" ? <div>{spellList}</div>:<div>{spellListMP}</div>} */}
                            <div>{spellList}</div>
                        </div>
                        <div className='combat-options'>
                            <h3>Inventory</h3>
                            {itemList}
                        </div>
                    </div>
                </div></div> : <div></div>}
            </div> : <div></div>}</div>
    </div>)
}

export default Combat;