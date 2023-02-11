import {alchemyRecipes, cookingRecipes, farmingRecipes, firemakingRecipes, fishingRecipes, fletchingRecipes, huntingRecipes, miningRecipes, smithingRecipes, woodcuttingRecipes} from "./SkillRecipesDB"

export function alchemyNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Alchemy");
    var alchemyNode = {Name: "Mortar and Pestle", Skill: hero.SkillBook[skillIndex], Recipes: alchemyRecipes()}
    return alchemyNode;
}
export function cookNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Cooking");
    var cookNode = {Name: "Stove", Skill: hero.SkillBook[skillIndex], Recipes: cookingRecipes()}
    return cookNode;
}
export function farmNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Farming");
    var farmNode = {Name: "Farm", Skill: hero.SkillBook[skillIndex], Recipes: farmingRecipes()}
    return farmNode;
}
export function fireNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Firemaking");
    var fireNode = {Name: "Tinderbox", Skill: hero.SkillBook[skillIndex], Recipes: firemakingRecipes()}
    return fireNode
}
export function fishNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Fishing");
    var fishNode = {Name: "Fishing Spot", Skill: hero.SkillBook[skillIndex], Recipes: fishingRecipes()}
    return fishNode
}
export function fletchNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Fletching");
    var fletchNode = {Name: "Knife", Skill: hero.SkillBook[skillIndex], Recipes: fletchingRecipes()}
    return fletchNode
}
export function huntNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Hunting");
    var huntNode = {Name: "Hunting Ground", Skill: hero.SkillBook[skillIndex], Recipes: huntingRecipes()}
    return huntNode;
}
export function mineNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Mining");
    var mineNode = {Name: "Mine", Skill: hero.SkillBook[skillIndex], Recipes: miningRecipes()}
    return mineNode
}
export function smithNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Smithing");
    var smithNode = {Name: "Anvil & Forge", Skill: hero.SkillBook[skillIndex], Recipes: smithingRecipes()}
    return smithNode
}
export function woodNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Woodcutting");
    var woodNode = {Name: "Trees", Skill: hero.SkillBook[skillIndex], Recipes: woodcuttingRecipes()}
    return woodNode
}