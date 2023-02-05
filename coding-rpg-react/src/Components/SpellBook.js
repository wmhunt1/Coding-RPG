import { useState } from 'react';
import '../App.css';
import './Game.css'

function SpellBook(props) {
    const [spells, setSpells] = useState(props.hero.SpellBook)
    const spellList = spells.sort((a, b) => a.Name.localeCompare(b.Name)).map((spell, index) => <h4 key={index}>{spell.Name} ({spell.ManaCost} MP) - {spell.Description}</h4>)
    if (spells.length > 0) {
        return (<div>
            <h2>{props.hero.Name}'s SpellBook</h2>
            <div className='power-book'>
                {spellList}
            </div>
        </div>)
    }
    else {
        return (<div>
            <h2>{props.hero.Name}'s SpellBook</h2>
            <h3>No Spells</h3>
        </div>)
    }
}
export default SpellBook;