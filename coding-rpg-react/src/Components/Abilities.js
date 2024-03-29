import { useState } from 'react';
import '../App.css';
import './Game.css'

function Abilities(props) {
    const [abilities, setAbilities] = useState(props.hero.Abilities)
    const abilList = abilities.map((abil, index) => <h4 key={index}>{abil.Name} ({abil.StaminaCost} SP) - {abil.Description}</h4>)
    return (<div style={{  marginLeft: "25%", marginRight: "25%"}}>
        <h2>{props.hero.Name}'s Abilities</h2>
        {abilities.length > 0 ? <div className='power-book'> {abilList}</div> :  <h3>No Abilities</h3>}
        {/* <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
    </div>)
}
export default Abilities;