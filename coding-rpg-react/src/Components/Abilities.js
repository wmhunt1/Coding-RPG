import { useState } from 'react';
import '../App.css';
import './Game.css'

function Abilities(props) {
    const [abilities, setAbilities] = useState(props.hero.Abilities)
    const abilList = abilities.sort((a, b) => a.Name.localeCompare(b.Name)).map((abil, index) => <h4 key={index}>{abil.Name} ({abil.StaminaCost} SP) - {abil.Description}</h4>)
    if (abilities.length > 0) {
        return (<div>
            <h2>{props.hero.Name}'s Abilities</h2>
            <div className='power-book'>
                {abilList}
            </div>
        </div>)
    }
    else {
        return (<div>
            <h2>{props.hero.Name}'s Abilities</h2>
            <h3>No Abilities</h3>
        </div>)
    }
}
export default Abilities;