import { useState } from 'react';
import Abilities from './Abilities';
import CharacterSheet from './CharacterSheet';
import Equipment from "./Equipment";
import SpellBook from './SpellBook';
import '../App.css';

function Party(props) {
    const [party, setParty] = useState(props.hero.Companions)
    const [active, setActive] = useState("Party")
    const [activeHero, setActiveHero] = useState(party[0]);
    const [activeHeroIndex, setActiveHeroIndex] = useState(0)
    function handleAbilityView(hero, index)
    {
        setActive("ViewAbil")
        setActiveHero(hero)
        setActiveHeroIndex(index)
    }
    function handleCompanionView(hero, index) {
        setActive("ViewCS")
        setActiveHero(hero)
        setActiveHeroIndex(index)
    }
    function handleEquipmentView(hero, index) {
        setActive("ViewEquip")
        setActiveHero(hero)
        setActiveHeroIndex(index)
    }
    function handleSpellView(hero, index) {
        setActive("ViewSpell")
        setActiveHero(hero)
        setActiveHeroIndex(index)
    }
    const partyList = party.map((companion, index) => <h3 key={index}>Name: {companion.Name} <button onClick={() => handleAbilityView(companion, index)}><h3>View Abilities</h3></button><button onClick={() => handleCompanionView(companion, index)}><h3>View Character Sheet</h3></button><button onClick={() => handleEquipmentView(companion, index)}><h3>View Equipment</h3></button><button onClick={() => handleSpellView(companion, index)}><h3>View SpellBook</h3></button></h3>)
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
    else if (active === "ViewAbil"){
        return (<div>
            <div><Abilities hero={activeHero} Back={() => setActive("Party")}></Abilities></div>
        </div>)
    }
    else if (active === "ViewCS"){
        return (<div>
            <div><CharacterSheet hero={activeHero} Back={() => setActive("Party")}></CharacterSheet></div>
        </div>)
    }
    else if (active === "ViewEquip")
    {
        return(<div>
            <div><Equipment hero={activeHero} Back={() => setActive("Party")}></Equipment></div>
        </div>)
    }
    else
    {
        return(<div>
            <div><SpellBook hero={activeHero} Back={() => setActive("Party")}></SpellBook></div>
        </div>)
    }
}
export default Party;