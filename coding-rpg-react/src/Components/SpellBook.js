import { useState } from 'react';
import '../App.css';
import './Game.css'

function SpellBook(props) {
    const [spells, setSpells] = useState(props.hero.SpellBook)
    const [list, setList] = useState("Default")
    const spellList = spells.map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description}</h4>)
    const conjSpellList = spells.filter(spell => spell.School.Name === "Conjuration").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description}</h4>)
    const destSpellList = spells.filter(spell => spell.School.Name === "Destruction").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description}</h4>)
    const illSpellList = spells.filter(spell => spell.School.Name === "Illusion").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description}</h4>)
    const restSpellList = spells.filter(spell => spell.School.Name === "Restoration").map((spell, index) => <h4 key={index}>{spell.Name} - {spell.School.Name} ({spell.ManaCost} MP) - {spell.Description}</h4>)
    return (<div>
        <h2>{props.hero.Name}'s SpellBook</h2>
        <h5>Spell Filters: <button onClick={() => setList("Conjuration")}>Conjuration</button> <button onClick={() => setList("Destruction")}>Destruction</button> <button onClick={() => setList("Illusion")}>Illusion</button> <button onClick={() => setList("Restoration")}>Restoration</button> <button onClick={() => setList("Default")}>Clear</button></h5>
        {list === "Default" ? <div className='power-book'> {spellList}</div> : <div></div>}
        {list === "Conjuration" ? <div className='power-book'> {conjSpellList}</div> : <div></div>}
        {list === "Destruction" ? <div className='power-book'> {destSpellList}</div> : <div></div>}
        {list === "Illusion" ? <div className='power-book'> {illSpellList}</div> : <div></div>}
        {list === "Restoration" ? <div className='power-book'> {restSpellList}</div> : <div></div>}
        {/* <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
    </div>)
}
export default SpellBook;