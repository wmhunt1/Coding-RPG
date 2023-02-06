import { useState } from "react";
import { AddGold, AddItemToInventory } from "../Scripts/CharacterScripts";
import Combat from "./Combat";

function Dungeon(props) {
    const [hero, setHero] = useState(props.hero);
    const [encounters, setEncounters] = useState(props.dungeon.Encounters);
    const [boss, setBoss] = useState(props.dungeon.Boss)
    const [goldReward, setGoldReward] = useState(props.dungeon.GoldReward)
    const [itemReward, setItemReward] = useState(props.dungeon.ItemReward)
    const [activeEncounter, setActiveEncounter] = useState(props.dungeon.Encounters[0]);
    const [active, setActive] = useState("Dungeon");
    const [defeated, setDefeated] = useState(0)
    const [bossDefeated, setBossDefeated] = useState(0)
    const [rewardClaimed, setRewardClaimed] = useState(false)
    function handleEncounter(encounter) {
        setActiveEncounter(encounter)
        setActive("Encounter")
    }
    function calculateDefeatedEncounters() {
        setActive("Dungeon");
        var defeat = 0;
        var bossDefeat = 0;
        for (var e = 0; e < encounters.length; e++) {
            var zero = 0;
            for (var i = 0; i < encounters[e].length; i++) {
                if (encounters[e][i].CurrentHP <= 0) {
                    zero++
                }
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
    function claimRewards(char) {
        if (goldReward > 0) {
            AddGold(char, goldReward)
        }
        if (itemReward !== null) {

            AddItemToInventory(char, char.Inventory, itemReward)
        }
        setHero(char)
        props.parentCallback(char);
        setRewardClaimed(true)
    }
    const handleCallback = (childData) => {
        var newChar = childData
        setHero(newChar)
        props.parentCallback(newChar);
    }
    const encounterList = encounters.map((encounter, index) => <h3 key={index}>Encounter {index + 1}: {encounter[0].Name}(s)<button onClick={() => handleEncounter(encounter)}><h3>Start Encounter</h3></button></h3>)
    return (<div>
        <div>
            <h2>{props.dungeon.Name}</h2>
            {hero.CurrentHP > 0 ?
                <div>
                    {active === "Dungeon" ?
                        <div>
                            {defeated !== encounters.length ?
                                <div>
                                    <h4>Encounters Defeated: {defeated}/{encounters.length}</h4>
                                    <h4>Dungeon Cleared: {bossDefeated}/{1}</h4>
                                    {encounterList}
                                </div>
                                : <div>
                                    <h4>Encounters Defeated: {defeated}/{encounters.length}</h4>
                                    <h4>Dungeon Cleared: {bossDefeated}/{1}</h4>
                                    <h3>Boss: {boss[0].Name}(s) <button onClick={() => handleEncounter(boss)}><h3>Start Boss Fight</h3></button></h3>
                                </div>
                            }
                        </div>
                        : <div></div>}
                    {
                        active === "Cleared" ?
                            <div>
                                <h3>Dungeon Cleared</h3>
                                {rewardClaimed === false ? <div><button onClick={() => claimRewards(hero)}><h3>Claim Rewards</h3></button></div> : <div><h3>Rewards Claimed</h3></div>}
                            </div> : <div></div>
                    }
                    {active === "Encounter" ? <div> <Combat parentCallback={handleCallback} hero={hero} enemies={activeEncounter} Back={() => calculateDefeatedEncounters()}></Combat></div> : <div></div>}
                </div>
                :
                <div>
                    <h3>You cannot continue</h3>
                </div>
            }
            {active !== "Encounter" ? <div>
                <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave Dungeon</h3></button>
            </div> : <div></div>}
        </div>
    </div>)
}
export default Dungeon;