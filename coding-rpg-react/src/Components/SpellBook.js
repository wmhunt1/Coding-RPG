import { useState } from 'react';
import '../App.css';
import './Game.css'
import { CastSpell } from "../Scripts/AbilityAndSpellScripts"

function SpellBook(props) {
    const [hero, setHero] = useState(props.hero)
    const [heroMP, setHeroMP] = useState(props.hero.BaseStats.MP.Current)
    const [spells, setSpells] = useState(props.hero.SpellBook)
    const [allies, setAllies] = useState([props.hero, ...props.hero.Companions])
    const [activeTarget, setActiveTarget] = useState(props.hero)
    const [list, setList] = useState("Default")
    function handleCastSpell(char, allies, enemies, target, log, spell) {
        CastSpell(char, allies, enemies, target, log, spell)
        setHero(char)
        setHeroMP(char.BaseStats.MP.Current)
        props.parentCallback(char);
    }
    const charList = allies.map((ally, index) => <h4 key={index}>{ally.Name} <button onClick={() => setActiveTarget(ally)}><h4>Set Active Character</h4></button></h4>)
    const spellList = spells.map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description} {spell.Use !== "Combat" ? <button onClick={() => handleCastSpell(hero, allies, allies, activeTarget, hero.Log, spell)}>Cast</button> : <div></div>}</h4>)
    const altSpellList = spells.filter(spell => spell.School.Name === "Alteration").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description} {spell.Use !== "Combat" ? <button onClick={() => handleCastSpell(hero, allies, allies, activeTarget, hero.Log, spell)}>Cast</button> : <div></div>}</h4>)
    const conjSpellList = spells.filter(spell => spell.School.Name === "Conjuration").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description} {spell.Use !== "Combat" ? <button onClick={() => handleCastSpell(hero, allies, allies, activeTarget, hero.Log, spell)}>Cast</button> : <div></div>}</h4>)
    const destSpellList = spells.filter(spell => spell.School.Name === "Destruction").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description} {spell.Use !== "Combat" ? <button onClick={() => handleCastSpell(hero, allies, allies, activeTarget, hero.Log, spell)}>Cast</button> : <div></div>}</h4>)
    const divSpellList = spells.filter(spell => spell.School.Name === "Divination").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description} {spell.Use !== "Combat" ? <button onClick={() => handleCastSpell(hero, allies, allies, activeTarget, hero.Log, spell)}>Cast</button> : <div></div>}</h4>)
    const illSpellList = spells.filter(spell => spell.School.Name === "Illusion").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description} {spell.Use !== "Combat" ? <button onClick={() => handleCastSpell(hero, allies, allies, activeTarget, hero.Log, spell)}>Cast</button> : <div></div>}</h4>)
    const restSpellList = spells.filter(spell => spell.School.Name === "Restoration").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description} {spell.Use !== "Combat" ? <button onClick={() => handleCastSpell(hero, allies, allies, activeTarget, hero.Log, spell)}>Cast</button> : <div></div>}</h4>)

    return (<div>
        <h2>{props.hero.Name}'s SpellBook MP:{heroMP}</h2>
        <h5>Spell Filters:<button onClick={() => setList("Alteration")}>Alteration</button><button onClick={() => setList("Conjuration")}>Conjuration</button><button onClick={() => setList("Destruction")}>Destruction</button><button onClick={() => setList("Divination")}>Divination</button><button onClick={() => setList("Illusion")}>Illusion</button><button onClick={() => setList("Restoration")}>Restoration</button><button onClick={() => setList("Default")}>Clear</button></h5>
        <div style={{ display: "inline-block", verticalAlign: "text-top", width: "250px" }}>
            <div style={{ border: "solid", paddingLeft: "1%", paddingRight: "1%", height: "250px" }}>
                <h4>Active Target: {activeTarget.Name}</h4>
                {charList}</div></div>
        <div style={{ display: "inline-block", verticalAlign: "text-top", marginLeft: "1%" }}>
            {list === "Default" ? <div style={{ width: "500px" }} className='power-book'> {spellList}</div> : <div></div>}
            {list === "Alteration" ? <div style={{ width: "500px" }} className='power-book'> {altSpellList}</div> : <div></div>}
            {list === "Conjuration" ? <div style={{ width: "500px" }} className='power-book'> {conjSpellList}</div> : <div></div>}
            {list === "Destruction" ? <div style={{ width: "500px" }} className='power-book'> {destSpellList}</div> : <div></div>}
            {list === "Divination" ? <div style={{ width: "500px" }} className='power-book'> {divSpellList}</div> : <div></div>}
            {list === "Illusion" ? <div style={{ width: "500px" }} className='power-book'> {illSpellList}</div> : <div></div>}
            {list === "Restoration" ? <div style={{ width: "500px" }} className='power-book'> {restSpellList}</div> : <div></div>}
        </div>
        {/* <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
    </div>)
}
export default SpellBook;