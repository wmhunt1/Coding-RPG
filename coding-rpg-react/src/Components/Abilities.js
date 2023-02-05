import { useState } from 'react';
import '../App.css';
import './Game.css'

function Abilities(props) {
    const [abilities, setAbilities] = useState(props.hero.Abilities)
    const abilList = abilities.sort((a, b) => a.Name.localeCompare(b.Name)).map((abil, index) => <h4 key={index}>{abil.Name} ({abil.StaminaCost} SP) - {abil.Description}</h4>)
    return (<div>
        <h2>{props.hero.Name}'s Abilities</h2>
        {abilities.length > 0 ? <div className='power-book'> {abilList}</div> :  <h3>No Abilities</h3>}
    </div>)
}
export default Abilities;