import { useState } from "react"
import { LevelUp } from "../Scripts/CharacterScripts"
import { AttributeIncrease } from "./AttributeIncrease"
import './Game.css'

export function LevelUpScreen(props) {
    const [hero, setHero] = useState(props.hero)
    const [log, setLog] = useState(props.log)
    const [active, setActive] = useState("Leveling")
    const [aOne, setAOne] = useState("Strength")
    const [aTwo, setATwo] = useState("Strength")
    const [aThree, setAThree] = useState("Strength")
    const handleCallbackOne = (childData) => {
        setAOne(childData)
    }
    const handleCallbackTwo = (childData) => {
        setATwo(childData)
    }
    const handleCallbackThree = (childData) => {
        setAThree(childData)
    }
    function IncreaseAttribute(hero, attribute) {
        if (attribute === "Strength") {
            hero.Attributes.Strength.Value++;
        }
        else if (attribute === "Constitution") {
            hero.Attributes.Constitution.Value++;
        }
        else if (attribute === "Dexterity") {
            hero.Attributes.Dexterity.Value++;
        }
        else if (attribute === "Intelligence") {
            hero.Attributes.Intelligence.Value++;
        }
        else if (attribute === "Wisdom") {
            hero.Attributes.Wisdom.Value++;
        }
        else if (attribute === "Charisma") {
            hero.Attributes.Charisma.Value++;
        }
        else if (attribute === "Perception") {
            hero.Attributes.Perception.Value++;
        }
        else if (attribute === "Luck") {
            hero.Attributes.Luck.Value++;
        }
        else if (attribute === "Beauty") {
            hero.Attributes.Beauty.Value++;
        }
        else {
            hero.Attributes.Speed.Value++;
        }
        setHero(hero);
    }
    function handleLevelUp(char, a1, a2, a3, log) {
        LevelUp(char, log);
        IncreaseAttribute(char, a1)
        IncreaseAttribute(char, a2)
        IncreaseAttribute(char, a3)
        var newChar = char;
        setHero(newChar);
        props.parentCallback(newChar);
        if (char.CurrentXP < char.MaxXP) {
            setActive("Leveled");
        }
    }
    return (
        <div>
            {active === "Leveling" ? <div>
                <div style={{ marginBottom: "1%" }}>
                    <h3>Select Attributes To Increase</h3>
                    <div className="attribute-selection"><AttributeIncrease parentCallback={handleCallbackOne}></AttributeIncrease></div>
                    <div className="attribute-selection"><AttributeIncrease parentCallback={handleCallbackTwo}></AttributeIncrease></div>
                    <div className="attribute-selection"><AttributeIncrease parentCallback={handleCallbackThree}></AttributeIncrease></div>
                </div>
                <div style={{ paddingBottom: "1%" }}>
                    <button onClick={() => handleLevelUp(hero, aOne, aTwo, aThree, log)}><h3>Level {hero.Name} to Level {hero.Level + 1}</h3></button>
                </div>
                <div>
                </div>
            </div> : <div>
                <h2>{hero.Name} is now Level {hero.Level}</h2>
            </div>}
            <button style={{ marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button>
        </div>
    )
}
export default LevelUpScreen