import { useState } from 'react';
import '../App.css';
import './Game.css'

function SkillBook(props) {
    const [hero, setHero] = useState(props.hero)
    const [skills, setSkills] = useState(props.hero.SkillBook)
    const [list, setList] = useState("Default")
    const skillList = skills.sort((a, b) => a.Name.localeCompare(b.Name)).map((skill, index) => <h4 key={index}>{skill.Name} - Level: {skill.Level}: {skill.CurrentXP}/{skill.MaxXP}</h4>)
    const armorSkillList = skills.sort((a, b) => a.Name.localeCompare(b.Name)).filter(skill => skill.Type === "Armor").map((skill, index) => <h4 key={index}>{skill.Name} - Level: {skill.Level}: {skill.CurrentXP}/{skill.MaxXP}</h4>)
    const craftSkillList = skills.sort((a, b) => a.Name.localeCompare(b.Name)).filter(skill => skill.Type === "Crafting").map((skill, index) => <h4 key={index}>{skill.Name} - Level: {skill.Level}: {skill.CurrentXP}/{skill.MaxXP}</h4>)
    const gatherSkillList = skills.sort((a, b) => a.Name.localeCompare(b.Name)).filter(skill => skill.Type === "Gathering").map((skill, index) => <h4 key={index}>{skill.Name} - Level: {skill.Level}: {skill.CurrentXP}/{skill.MaxXP}</h4>)
    const magicSkillList = skills.sort((a, b) => a.Name.localeCompare(b.Name)).filter(skill => skill.Type === "Magic").map((skill, index) => <h4 key={index}>{skill.Name} - Level: {skill.Level}: {skill.CurrentXP}/{skill.MaxXP}</h4>)
    const utilitySkillList = skills.sort((a, b) => a.Name.localeCompare(b.Name)).filter(skill => skill.Type === "Utility").map((skill, index) => <h4 key={index}>{skill.Name} - Level: {skill.Level}: {skill.CurrentXP}/{skill.MaxXP}</h4>)
    const weaponSkillList = skills.sort((a, b) => a.Name.localeCompare(b.Name)).filter(skill => skill.Type === "Weapon").map((skill, index) => <h4 key={index}>{skill.Name} - Level: {skill.Level}: {skill.CurrentXP}/{skill.MaxXP}</h4>)
    return (<div style={{  marginLeft: "25%", marginRight: "25%"}}>
        <h2>{hero.Name}'s Skills</h2>
        <h5>Skill Filters: <button onClick={() => setList("Armor")}>Armor</button> <button onClick={() => setList("Craft")}>Crafting</button> <button onClick={() => setList("Gather")}>Gathering</button> <button onClick={() => setList("Magic")}>Magic</button> <button onClick={() => setList("Utility")}>Utility</button> <button onClick={() => setList("Weapon")}>Weapon</button> <button onClick={() => setList("Default")}>Clear</button></h5>
        {list === "Default" ? <div className='power-book'> {skillList}</div> : <div></div>}
        {list === "Armor" ? <div className='power-book'> {armorSkillList}</div> : <div></div>}
        {list === "Craft" ? <div className='power-book'> {craftSkillList}</div> : <div></div>}
        {list === "Gather" ? <div className='power-book'> {gatherSkillList}</div> : <div></div>}
        {list === "Magic" ? <div className='power-book'> {magicSkillList}</div> : <div></div>}
        {list === "Utility" ? <div className='power-book'> {utilitySkillList}</div> : <div></div>}
        {list === "Weapon" ? <div className='power-book'> {weaponSkillList}</div> : <div></div>}
        {/* <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
    </div>)
}
export default SkillBook;