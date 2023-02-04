import { useState } from 'react';
import '../App.css';

function SpellBook(props) {
    const [spells, setSpells] = useState(props.hero.SpellBook)
    const spellList = spells.map((spell, index) => <h4 key={index}>{spell.Name}, {spell.ManaCost} MP - Description: ({spell.Type} - {spell.Amount} {spell.DamageType})</h4>)
    if (spells.length > 0) {
        return (<div>
            <h2>{props.hero.Name}'s SpellBook</h2>
            <div style={{overflow: "scroll"}}>
            {spellList}
            </div>
            <button onClick={props.Back}><h3>Back</h3></button>
        </div>)
    }
    else {
        return (<div>
            <h2>{props.hero.Name}'s SpellBook</h2>
            <h3>No Spells</h3>
            <button onClick={props.Back}><h3>Back</h3></button>
        </div>)
    }
}
export default SpellBook;