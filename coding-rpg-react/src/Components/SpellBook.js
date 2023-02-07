import { useState } from 'react';
import '../App.css';
import './Game.css'

function SpellBook(props) {
    const [spells, setSpells] = useState(props.hero.SpellBook)
    const spellList = spells.sort((a, b) => a.Name.localeCompare(b.Name)).map((spell, index) => <h4 key={index}>{spell.Name} ({spell.ManaCost} MP) - {spell.Description}</h4>)
    return (<div>
        <h2>{props.hero.Name}'s SpellBook</h2>
        {spells.length > 0 ? <div className='power-book'> {spellList}</div> : <h3>No Spells</h3>}
        <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button>
    </div>)
}
export default SpellBook;