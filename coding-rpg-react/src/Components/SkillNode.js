import { useState} from 'react';
import '../App.css';
import {AddToSkillLog, UseSkillRecipe } from '../Scripts/SkillScripts';
import './Game.css'

function SkillNode(props) {
    const [hero, setHero] = useState(props.hero)
    const [skills, setSkills] = useState(props.hero.SkillBook)
    const [node, setNode] = useState(props.node)
    const [activeSkill, setActiveSkill] = useState(props.node.Skill)
    const [recipes, setRecipes] = useState(props.node.Recipes)
    function handleTrainSkill(char, skill, recipe) {
        AddToSkillLog(char, char.Name + " starts to  " + recipe.Name)
        props.parentCallback(char);
        setTimeout(() => { 
        UseSkillRecipe(char, skill, recipe)
        setHero(char)
        setSkills(char.SkillBook)
        setActiveSkill(skill)
        props.parentCallback(char);
    }, 1000)
       
    }
    const recipeList = recipes.sort((a, b) => a.Name.localeCompare(b.Name) && a.LevelRequirement - b.LevelRequirement).filter(recipe => recipe.LevelRequirement <= activeSkill.Level).map((recipe, index) => <h4 key={index}>{recipe.Name}({recipe.LevelRequirement}) {recipe.Exp} XP <button onClick={() => handleTrainSkill(hero, activeSkill, recipe)}>{recipe.Verb}</button></h4>)
    return (<div style ={{marginLeft:"25%", marginRight:"25%"}}>
        <h2>{node.Name}</h2>
        <h3>{activeSkill.Name} - Level: {activeSkill.Level} {activeSkill.CurrentXP}/{activeSkill.MaxXP}</h3>
        <div className='power-book'>{recipeList}</div>
        <button style={{ marginTop: "1%", marginBottom: "1%" }} onClick={props.Back}><h3>Leave</h3></button>
    </div>)
}
export default SkillNode;