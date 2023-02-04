import { useState } from 'react';
import '../App.css';

function Abilities(props) {
    const [abilities, setAbilities] = useState(props.hero.Abilities)
    const abilList = abilities.map((abil, index) => <h4 key={index}>{abil.Name}</h4>)
    if (abilities.length > 0) {
        return (<div>
            <h2>{props.hero.Name}'s Abilities</h2>
            <div style={{ overflow: "scroll" }}>
                {abilList}
            </div>
            <button onClick={props.Back}><h3>Back</h3></button>
        </div>)
    }
    else {
        return (<div>
            <h2>{props.hero.Name}'s Abilities</h2>
            <h3>No Abilities</h3>
            <button onClick={props.Back}><h3>Back</h3></button>
        </div>)
    }
}
export default Abilities;