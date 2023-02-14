import {alchemyRecipes, cookingRecipes, craftingRecipes, enchantingRecipes, farmingRecipes, firemakingRecipes, fishingRecipes, fletchingRecipes, herbLoreRecipes, huntingRecipes, miningRecipes, smithingRecipes, woodcuttingRecipes} from "./SkillRecipesDB"

export function alchemyNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Alchemy");
    var alchemyNode = {Name: "Alchemy", Skill: hero.SkillBook[skillIndex], Recipes: alchemyRecipes()}
    return alchemyNode;
}
export function cookNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Cooking");
    var cookNode = {Name: "Stove", Skill: hero.SkillBook[skillIndex], Recipes: cookingRecipes()}
    return cookNode;
}
export function craftNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Crafting");
    var craftNode = {Name: "Crafting", Skill: hero.SkillBook[skillIndex], Recipes: craftingRecipes()}
    return craftNode;
}
export function enchantNode(hero)
{
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Enchanting");
    var enchantNode = {Name: "Enchanting", Skill: hero.SkillBook[skillIndex], Recipes: enchantingRecipes()}
    return enchantNode;
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
    var fireNode = {Name: "Firemaking", Skill: hero.SkillBook[skillIndex], Recipes: firemakingRecipes()}
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
    var fletchNode = {Name: "Fletching", Skill: hero.SkillBook[skillIndex], Recipes: fletchingRecipes()}
    return fletchNode
}
export function herbNode(hero){
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Herblore");
    var huntNode = {Name: "Gather Herbs", Skill: hero.SkillBook[skillIndex], Recipes: herbLoreRecipes()}
    return huntNode;
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