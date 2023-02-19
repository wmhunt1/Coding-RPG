import { useState } from "react";
import '../App.css';
import './Game.css';

function Factions(props) {
    const [factions, setFactions] = useState(props.hero.Reputation)
    const factionList = factions.sort((a, b) => a.Name.localeCompare(b.Name)).map((faction, index) => <h4 key={index}>{faction.Faction.Name} - {faction.Reputation}</h4>)
    return (<div>
        <h2>Factions and Repuation</h2>
        <div style = {{overflow: "scroll", marginRight: "25%", marginLeft:"25%", border: "solid", height: "250px"}}>
        {factions.length > 0 ? <>{factionList}</>:<h4>No Known Factions</h4>}
        </div>
{/* <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
    </div>)
}
export default Factions;