import { useState } from "react"
import { LevelUp } from "../Scripts/CharacterScripts"
import { AttributeIncrease } from "./AttributeIncrease"
import './Game.css'

export function LevelUpScreen(props) {
    const [hero, setHero] = useState(props.hero)
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
            hero.Strength++;
        }
        else if (attribute === "Constitution") {
            hero.Constitution++;
        }
        else if (attribute === "Dexterity") {
            hero.Dexterity++;
        }
        else if (attribute === "Intelligence") {
            hero.Intelligence++;
        }
        else if (attribute === "Wisdom") {
            hero.Wisdom++;
        }
        else if (attribute === "Charisma") {
            hero.Charisma++;
        }
        else if (attribute === "Perception") {
            hero.Perception++;
        }
        else if (attribute === "Luck") {
            hero.Luck++;
        }
        else if (attribute === "Beauty") {
            hero.Beauty++;
        }
        else {
            hero.Speed++;
        }
        setHero(hero);
    }
    function handleLevelUp(hero, a1, a2, a3) {
        LevelUp(hero);
        IncreaseAttribute(hero, a1)
        IncreaseAttribute(hero, a2)
        IncreaseAttribute(hero, a3)
        setHero(hero);
        if (hero.CurrentXP < hero.MaxXP) {
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
                    <button onClick={() => handleLevelUp(hero, aOne, aTwo, aThree)}><h3>Level {hero.Name} to Level {hero.Level + 1}</h3></button>
                </div>
                <div>
                </div>
            </div> : <div>
                <h2>{hero.Name} is now Level {hero.Level}</h2>
            </div>}
        </div>
    )
}
export default LevelUpScreen