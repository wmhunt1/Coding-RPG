import { alchemyRecipes, cookingRecipes, craftingRecipes, drawWater, enchantingRecipes, engineeringRecipes, farmingRecipes, firemakingRecipes, fishingRecipes, fletchingRecipes, gatherBlackFeathers, herbLoreRecipes, huntingRecipes, millWheat, mineSaltpeter, miningRecipes, shearSheep, smithingRecipes, woodcuttingRecipes } from "./SkillRecipesDB"

export function alchemyNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Alchemy");
    var alchemyNode = { Name: "Alchemy", Skill: hero.SkillBook[skillIndex], Recipes: alchemyRecipes() }
    return alchemyNode;
}
//cooking
export function cookNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Cooking");
    var cookNode = { Name: "Stove", Skill: hero.SkillBook[skillIndex], Recipes: cookingRecipes() }
    return cookNode;
}
export function millNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Cooking");
    var cookNode = { Name: "Mill", Skill: hero.SkillBook[skillIndex], Recipes: [millWheat()] }
    return cookNode;
}
export function waterNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Cooking");
    var cookNode = { Name: "Draw Water", Skill: hero.SkillBook[skillIndex], Recipes: [drawWater()] }
    return cookNode;
}
export function wellNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Cooking");
    var cookNode = { Name: "Draw Water", Skill: hero.SkillBook[skillIndex], Recipes: [drawWater()] }
    return cookNode;
}
export function craftNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Crafting");
    var craftNode = { Name: "Crafting", Skill: hero.SkillBook[skillIndex], Recipes: craftingRecipes() }
    return craftNode;
}
export function enchantNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Enchanting");
    var enchantNode = { Name: "Enchanting", Skill: hero.SkillBook[skillIndex], Recipes: enchantingRecipes() }
    return enchantNode;
}
//enginering
export function engineNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Engineering");
    var engineNode = { Name: "Engineering Bench", Skill: hero.SkillBook[skillIndex], Recipes: engineeringRecipes() }
    return engineNode;
}
//farming
export function farmNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Farming");
    var farmNode = { Name: "Farm", Skill: hero.SkillBook[skillIndex], Recipes: farmingRecipes() }
    return farmNode;
}
export function sheepNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Farming");
    var farmNode = { Name: "Flock of Sheep", Skill: hero.SkillBook[skillIndex], Recipes: [shearSheep()] }
    return farmNode;
}
export function fireNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Firemaking");
    var fireNode = { Name: "Firemaking", Skill: hero.SkillBook[skillIndex], Recipes: firemakingRecipes() }
    return fireNode
}
export function fishNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Fishing");
    var fishNode = { Name: "Fishing Spot", Skill: hero.SkillBook[skillIndex], Recipes: fishingRecipes() }
    return fishNode
}
export function fletchNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Fletching");
    var fletchNode = { Name: "Fletching", Skill: hero.SkillBook[skillIndex], Recipes: fletchingRecipes() }
    return fletchNode
}
export function herbNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Herblore");
    var huntNode = { Name: "Gather Herbs", Skill: hero.SkillBook[skillIndex], Recipes: herbLoreRecipes() }
    return huntNode;
}
//hunting
export function blackFeatherNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Hunting");
    var huntNode = { Name: "Scattered Black Feathers", Skill: hero.SkillBook[skillIndex], Recipes: [gatherBlackFeathers()] }
    return huntNode;
}
export function huntNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Hunting");
    var huntNode = { Name: "Hunting Ground", Skill: hero.SkillBook[skillIndex], Recipes: huntingRecipes() }
    return huntNode;
}
//mining
export function mineNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Mining");
    var mineNode = { Name: "Mine", Skill: hero.SkillBook[skillIndex], Recipes: miningRecipes() }
    return mineNode
}
export function saltPeterNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Mining");
    var mineNode = { Name: "Mine", Skill: hero.SkillBook[skillIndex], Recipes: [mineSaltpeter()] }
    return mineNode
}
export function smithNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Smithing");
    var smithNode = { Name: "Anvil & Forge", Skill: hero.SkillBook[skillIndex], Recipes: smithingRecipes() }
    return smithNode
}
export function woodNode(hero) {
    var skillIndex = hero.SkillBook.findIndex(x => x.Name === "Woodcutting");
    var woodNode = { Name: "Trees", Skill: hero.SkillBook[skillIndex], Recipes: woodcuttingRecipes() }
    return woodNode
}