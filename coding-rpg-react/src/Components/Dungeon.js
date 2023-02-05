import { useState } from "react";
import Combat from "./Combat";

function Dungeon(props) {
    const [hero, setHero] = useState(props.hero);
    const [encounters, setEncounters] = useState(props.encounters);
    const [boss, setBoss] = useState(props.boss);
    const [activeEncounter, setActiveEncounter] = useState(props.encounters[0]);
    const [active, setActive] = useState("Dungeon");
    const [defeated, setDefeated] = useState(0)
    const [bossDefeated, setBossDefeated] = useState(0)
    function handleEncounter(encounter) {
        setActiveEncounter(encounter)
        setActive("Encounter")
    }
    function calculateDefeatedEncounters() {
        setActive("Dungeon");
        var defeat = 0;
        var bossDefeat = 0;
        for (var e = 0; e < encounters.length; e++) {
            console.log(encounters[e][0].Name)
            var zero = 0;
            for (var i = 0; i < encounters[e].length; i++) {
                if (encounters[e][i].CurrentHP <= 0) {
                    zero++
                }
                console.log(encounters[e].length)
                if (zero === encounters[e].length) {
                    defeat++
                }
            }
        }
        var bossZero = 0;
        for (var b = 0; b < boss.length; b++) {
            if (boss[b].CurrentHP <= 0) {
                bossZero++
            }
        }
        if (bossZero === boss.length) {
            bossDefeat = 1;
        }
        setDefeated(defeat)
        setBossDefeated(bossDefeat)
        if (bossDefeat === 1) {
            setActive("Cleared")
        }
    }
    const encounterList = encounters.map((encounter, index) => <h3 key={index}>Encounter {index + 1}: {encounter[0].Name}(s)<button onClick={() => handleEncounter(encounter)}><h3>Start Encounter</h3></button></h3>)
    if (hero.CurrentHP > 0) {
        if (active === "Dungeon" && defeated !== encounters.length) {
            return (
                <div>
                    <h2>{props.dungeonName}</h2>
                    <h4>Encounters Defeated: {defeated}/{encounters.length}</h4>
                    <h4>Dungeon Cleared: {bossDefeated}/{1}</h4>
                    {encounterList}
                    <button onClick={props.Back}><h3>Back</h3></button>
                </div>
            )
        }
        else if (active === "Dungeon" && defeated === encounters.length) {
            return (
                <div>
                    <h2>{props.dungeonName}</h2>
                    <h4>Encounters Defeated: {defeated}/{encounters.length}</h4>
                    <h4>Dungeon Cleared: {bossDefeated}/{1}</h4>
                    <h3>Boss: {boss[0].Name}(s) <button onClick={() => handleEncounter(boss)}><h3>Start Boss Fight</h3></button></h3>
                    <button style={{marginBottom: "1%"}}onClick={props.Back}><h3>Run</h3></button>
                </div>
            )
        }
        else if (active === "Cleared") {
            return (
                <div>
                    <h2>{props.dungeonName}</h2>
                    <h3>Dungeon Cleared</h3>
                    <button style={{marginBottom: "1%"}}onClick={props.Back}><h3>Back</h3></button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>{props.dungeonName}</h2>
                    <Combat hero={hero} enemies={activeEncounter} Back={() => calculateDefeatedEncounters()}></Combat>
                </div>
            )
        }
    }
    else {
        return (<div>
            <h2>{props.dungeonName}</h2>
            <h3>You cannot continue</h3>
            <button style={{marginBottom: "1%"}}onClick={props.Back}><h3>Back</h3></button>
        </div>)
    }
}
export default Dungeon;