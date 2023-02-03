import { useState } from 'react';
import CharacterSheet from './CharacterSheet';
import Equipment from "./Equipment";
import '../App.css';

function Party(props) {
    const [party, setParty] = useState(props.hero.Companions)
    const [active, setActive] = useState("Party")
    const [activeHero, setActiveHero] = useState(party[0]);
    const [activeHeroIndex, setActiveHeroIndex] = useState(0)
    function handleCompanionView(hero, index) {
        setActive("ViewCS")
        setActiveHero(hero)
        setActiveHeroIndex(index)
    }
    function handleEquipmentView(hero, index) {
        setActive("ViewE")
        setActiveHero(hero)
        setActiveHeroIndex(index)
    }
    // function changeCharacter(party, index)
    // {
    //     console.log(index)
    //     if (index >= 0 && index <= party.length)
    //     {
    //         handleCompanionView(party[index], index)
    //     }
    // }
    const partyList = party.map((companion, index) => <h3 key={index}>Name: {companion.Name} <button onClick={() => handleCompanionView(companion, index)}><h3>View Character Sheet</h3></button><button onClick={() => handleEquipmentView(companion, index)}><h3>View Equipment</h3></button></h3>)
    if (active === "Party") {
        if (party.length > 0) {
            return (<div>
                <h2>{props.hero.Name}'s Party</h2>
                {partyList}
                <button onClick={props.Back}><h3>Back</h3></button>
            </div>)
        }
        else {
            return (<div>
                <h2>{props.hero.Name}'s Party</h2>
                <h3>No Companions</h3>
                <button onClick={props.Back}><h3>Back</h3></button>
            </div>)
        }
    }
    else if (active === "ViewCS"){
        return (<div>
            {/* <div style={{display: "inline-block"}}><button onClick={() => changeCharacter(party, activeHeroIndex-1)}><h4>Previous Companion</h4></button></div>
            <div style={{display: "inline-block"}}><button onClick={() => changeCharacter(party, activeHeroIndex+1)}><h4>Next Companion</h4></button></div> */}
            <div><CharacterSheet hero={activeHero} Back={() => setActive("Party")}></CharacterSheet></div>
        </div>)
    }
    else
    {
        return(<div>
            <div><Equipment hero={activeHero} Back={() => setActive("Party")}></Equipment></div>
        </div>)
    }
}
export default Party;