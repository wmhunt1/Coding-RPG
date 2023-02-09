import { useState } from 'react';
import '../App.css';
import './Game.css'

function SkillBook(props) {
    const [hero, setHero] = useState(props.hero)
    const [skills, setSkills] = useState(props.hero.SkillBook)
    const skillList = skills.sort((a, b) => a.Name.localeCompare(b.Name)).map((skill, index) => <h4 key={index}>{skill.Name} - Level: {skill.Level}: {skill.CurrentXP}/{skill.MaxXP}</h4>)
    return (<div>
        <h2>{hero.Name}'s Skills</h2>
        {skills.length > 0 ? <div className='power-book'> {skillList}</div> : <h3>No Skills</h3>}
        {/* <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
    </div>)
}
export default SkillBook;