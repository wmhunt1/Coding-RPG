import { useState } from 'react';
import '../App.css';
import { UseSkillRecipe } from '../Scripts/SkillScripts';
import { skillRecipes } from '../Database/SkillRecipes';
import './Game.css'

function SkillBook(props) {
    const [hero, setHero] = useState(props.hero)
    const [skills, setSkills] = useState(props.hero.SkillBook)
    const [activeSkill, setActiveSkill] = useState(props.hero.SkillBook[0])
    const [recipes, setRecipes] = useState(skillRecipes())
    const [recipeFilter, setRecipeFilter] = useState("")
    const [active, setActive] = useState("Skills")
    function handleShowRecipes(char, skill) {
        setActiveSkill(skill)
        setRecipeFilter(skill.Name)
        setActive("Recipes")
        props.parentCallback(char);
    }
    function handleTrainSkill(char, skill, recipe) {
        UseSkillRecipe(char, skill, recipe)
        setHero(char)
        setSkills(char.SkillBook)
        setActiveSkill(skill)
        props.parentCallback(char);
    }

    const skillList = skills.sort((a, b) => a.Name.localeCompare(b.Name)).map((skill, index) => <h4 key={index}>{skill.Name} - Level: {skill.Level}: {skill.CurrentXP}/{skill.MaxXP} {skill.Name !== "Combat" ? <button onClick={() => handleShowRecipes(hero, skill)}>Train Skill</button>: <div></div>}</h4>)
    const recipeList = recipes.sort((a, b) => a.Name.localeCompare(b.Name) && a.LevelRequirement - b.LevelRequirement).filter(recipe => recipe.Skill === recipeFilter && recipe.LevelRequirement <= activeSkill.Level).map((recipe, index) => <h4 key={index}>{recipe.Name}({recipe.LevelRequirement}) {recipe.Exp} XP<button onClick={() => handleTrainSkill(hero, activeSkill, recipe)}>{recipe.Verb}</button></h4>)
    return (<div>
        <h2>{hero.Name}'s Skills</h2>
        {active === "Skills" ? <div>
            {skills.length > 0 ? <div className='power-book'> {skillList}</div> : <h3>No Skills</h3>}</div> :
            <div><h3>{activeSkill.Name} - Level: {activeSkill.Level} {activeSkill.CurrentXP}/{activeSkill.MaxXP}</h3>{recipeList.length > 0 ? <div className='power-book'>{recipeList}</div> : <h3>No {activeSkill.Name} Recipes</h3>}<button onClick={() => setActive("Skills")}>Back To Skills</button></div>}
        {/* <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button> */}
    </div>)
}
export default SkillBook;