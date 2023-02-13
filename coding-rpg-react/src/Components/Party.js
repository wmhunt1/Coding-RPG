import { useState } from 'react';
import Abilities from './Abilities';
import CharacterSheet from './CharacterSheet';
import Equipment from "./Equipment";
import SkillBook from "./SkillBook"
import SpellBook from './SpellBook';
import '../App.css';
import { tacticsList } from '../Database/TacticsDB'
import { AddToCharacterLog, ChangeTactics } from '../Scripts/CharacterScripts';

function Party(props) {
    const [hero, setHero] = useState(props.hero)
    const [party, setParty] = useState(props.hero.Companions)
    const [active, setActive] = useState("Party")
    const [activeHero, setActiveHero] = useState(party[0]);
    const [activeHeroIndex, setActiveHeroIndex] = useState(0)
    const [tactics, setTactics] = useState(tacticsList())
    function handleAbilityView(hero, index) {
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
    function handleSkillView(hero, index) {
        setActive("ViewSkill")
        setActiveHero(hero)
        setActiveHeroIndex(index)
    }
    function handleSpellView(hero, index) {
        setActive("ViewSpell")
        setActiveHero(hero)
        setActiveHeroIndex(index)
    }
    function handleTacticView(hero, index) {
        setActive("ViewTactics")
        setActiveHero(hero)
        setActiveHeroIndex(index)
    }
    function handleTacticSelection(char, tactic) {
        var newHero = ChangeTactics(char, tactic)
        setActiveHero(newHero)
        AddToCharacterLog(hero, char.Name + " Tactics switched to " + tactic.Name)
        props.parentCallback(hero);
    }
    const partyList = party.map((companion, index) => <h3 key={index}>Name: {companion.Name} <button onClick={() => handleAbilityView(companion, index)}><h3>View Abilities</h3></button><button onClick={() => handleCompanionView(companion, index)}><h3>View Character Sheet</h3></button><button onClick={() => handleEquipmentView(companion, index)}><h3>View Equipment</h3></button><button onClick={() => handleSkillView(companion, index)}><h3>View Skills</h3></button><button onClick={() => handleSpellView(companion, index)}><h3>View SpellBook</h3></button><button onClick={() => handleTacticView(companion, index)}><h3>Change Tactics</h3></button></h3>)
    const tacticList = tactics.map((tactic, index) => <h3 key={index}>{tactic.Name} - {tactic.Desc} <button onClick={()=> handleTacticSelection(activeHero, tactic)}>Select</button></h3>)
    return (
        <div>
            <h2>{props.hero.Name}'s Party</h2>
            {party.length > 0 ? <div>{partyList}</div> : <div><h3>No Companions</h3></div>}
            {active === "ViewAbil" ? <div><Abilities hero={activeHero}></Abilities></div> : <div></div>}
            {active === "ViewCS" ? <div><CharacterSheet hero={activeHero}></CharacterSheet></div> : <div></div>}
            {active === "ViewEquip" ? <div><Equipment hero={activeHero}></Equipment></div> : <div></div>}
            {active === "ViewSkill" ? <div><SkillBook hero={activeHero}></SkillBook></div> : <div></div>}
            {active === "ViewSpell" ? <div><SpellBook hero={activeHero}></SpellBook></div> : <div></div>}
            {active === "ViewTactics" ? <div style={{border: "solid", height: "300px", overflow: "scroll", marginLeft: "20%", marginRight: "20%"}}>{tacticList}</div> : <div></div>}
            {/* <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
        </div>
    )
}
export default Party;