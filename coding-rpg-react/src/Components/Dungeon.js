import { useState } from "react";
import { AddGold } from "../Scripts/CharacterScripts";
import { AddItemToInventory } from "../Scripts/ItemScripts";
import { CheckIfDungeonQuestObjective } from "../Scripts/QuestScripts";
import Combat from "./Combat";
import Dialogue from "./Dialogue"

function Dungeon(props) {
    const [hero, setHero] = useState(props.hero);
    const [encounters, setEncounters] = useState(props.dungeon.Encounters);
    const [boss, setBoss] = useState(props.dungeon.Boss)
    const [goldReward, setGoldReward] = useState(props.dungeon.GoldReward)
    const [itemReward, setItemReward] = useState(props.dungeon.ItemReward)
    const [dialogue, setDialogue] = useState(null)
    const [activeEncounter, setActiveEncounter] = useState(props.dungeon.Encounters[0]);
    const [activeEncounterIndex, setActiveEncounterIndex] = useState(0)
    const [active, setActive] = useState("Dungeon");
    const [defeated, setDefeated] = useState(0)
    const [showBoss, setShowBoss] = useState(0)
    const [bossDefeated, setBossDefeated] = useState(0)
    const [rewardClaimed, setRewardClaimed] = useState(false)
    function handleEncounter(encounter) {
        setActiveEncounter(encounter.Content)
        if (encounter.Type === "Combat") {
            setActive("Encounter")
        }
        else {
            setActive("Dialogue")
            setDialogue(encounter.Content[0])
        }
    }
    function claimRewards(char) {
        if (goldReward > 0) {
            AddGold(char, goldReward)
        }
        if (itemReward !== null) {

            AddItemToInventory(char, char.Inventory, itemReward, itemReward.Quantity)
        }
        CheckIfDungeonQuestObjective(char, props.dungeon)
        setHero(char)
        props.parentCallback(char);
        setRewardClaimed(true)
    }
    function checkIfEncounterDefeated(activeEncounter, activeEncounterIndex, encounters, defeated) {
        var passed = false;
        setActive("Dungeon")
        if (activeEncounter.Type === "Combat") {
            var overZero = activeEncounter.Content.length;
            for (var e = 0; e < activeEncounter.Content.length; e++) {
                if (activeEncounter.Content[e].CurrentHP <= 0) {
                    overZero--
                }
            }
            if (overZero === 0) {
                passed = true;
            }
        }
        else {
            passed = true;
        }
        if (passed === true) {
            setDefeated(defeated + 1)
            if (encounters.length > defeated + 1) {
                setActiveEncounter(encounters[activeEncounterIndex + 1])
                setActiveEncounterIndex(activeEncounterIndex + 1)
            }
            else if (encounters.length === defeated + 1) {
                setShowBoss(1)
            }
            else {
                setBossDefeated(1)
            }
        }
    }
    const handleCallback = (childData) => {
        var newChar = childData
        setHero(newChar)
        props.parentCallback(newChar);
    }
    const encounterList = encounters.map((encounter, index) => <h3 key={index}>{activeEncounter === encounter ? <div>{encounter.Type} Encounter {index + 1}: {encounter.Name} <button onClick={() => handleEncounter(encounter)}><h3>Start Encounter</h3></button></div> : <div></div>}</h3>)
    return (<div>
        <div>
            <h2>{props.dungeon.Name}</h2>
            {hero.CurrentHP > 0 ?
                <div>
                    {active === "Dungeon" && bossDefeated === 0 ?
                        <div>
                            {showBoss === 0 ?
                                <div>
                                    <h4>Encounters Defeated: {defeated}/{encounters.length}</h4>
                                    <h4>Dungeon Cleared: {bossDefeated}/{1}</h4>
                                    {encounterList}
                                </div>
                                : <div>
                                    <h4>Encounters Defeated: {defeated}/{encounters.length}</h4>
                                    <h4>Dungeon Cleared: {bossDefeated}/{1}</h4>
                                    <h3>Boss: {boss.Name} <button onClick={() => handleEncounter(boss)}><h3>Start Boss Fight</h3></button></h3>
                                </div>
                            }
                        </div>
                        : <div></div>}
                    {
                        bossDefeated === 1 && active !== "Dialogue" && active === "Dungeon" ?
                            <div>
                                <h3>Dungeon Cleared</h3>
                                {rewardClaimed === false ? <div><button onClick={() => claimRewards(hero)}><h3>Claim Rewards</h3></button></div> : <div><h3>Rewards Claimed</h3></div>}
                            </div> : <div></div>
                    }
                    {active === "Encounter" ? <div> <Combat parentCallback={handleCallback} hero={hero} enemies={activeEncounter} Back={() => checkIfEncounterDefeated(activeEncounter, activeEncounterIndex, encounters, defeated)}></Combat></div> : <div></div>}
                    {active === "Dialogue" ? <div> <Dialogue parentCallback={handleCallback} hero={hero} talk={dialogue} Back={() => checkIfEncounterDefeated(activeEncounter, activeEncounterIndex, encounters, defeated)}></Dialogue></div> : <div></div>}
                </div>
                :
                <div>
                    <h3>You cannot continue</h3>
                </div>
            }
            {active !== "Encounter" && active !== "Dialogue" ? <div>
                <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave Dungeon</h3></button>
            </div> : <div></div>}
        </div>
    </div>)
}
export default Dungeon;