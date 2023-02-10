import { ashes, bronzeBar, bronzeDagger, cookedFish, cookedRatMeat, copperOre, ironBar, ironOre, milk, rawFish, rawRatMeat, tinOre, woodBow, woodLogs, } from "./ItemsDB"
export function skillRecipes() {
    var skillRecipes = [burnWoodLogs(), cookRawFish(), cookRawRatMeat(), cutWood(), fishFish(), fletchWoodBow(), mineCopperOre(), mineIronOre(), mineTinOre(), smeltBronzeBar(), smeltIronBar(), smithBronzeArmor(), smithBronzeDagger()]
    return skillRecipes;
}
//crafting
//alchemy
export function alchemyRecipes()
{
    var alchemyRecipes = []
    return alchemyRecipes
}
//cooking
export function cookingRecipes() {
    var cookingRecipes = [cookRawFish(), cookRawRatMeat()]
    return cookingRecipes;
}
export function cookRawFish() {
    var cook = { Name: "Cook Raw Fish", Skill: "Cooking", Verb: "Cook", LevelRequirement: 1, Exp: 25, Input: [{ Item: rawFish(), Quantity: 1 }], Output: { Item: cookedFish(), Quantity: 1 } }
    return cook
}
export function cookRawRatMeat() {
    var cook = { Name: "Cook Raw Rat Meat", Skill: "Cooking", Verb: "Cook", LevelRequirement: 1, Exp: 25, Input: [{ Item: rawRatMeat(), Quantity: 1 }], Output: { Item: cookedRatMeat(), Quantity: 1 } }
    return cook
}
//firemaking
export function firemakingRecipes() {
    var firemakingRecipes = [burnWoodLogs()]
    return firemakingRecipes
}
export function burnWoodLogs() {
    var burn = { Name: "Burn Wood Logs", Skill: "Firemaking", Verb: "Burn", LevelRequirement: 1, Exp: 25, Input: [{ Item: woodLogs(), Quantity: 1 }], Output: { Item: ashes(), Quantity: 1 } }
    return burn;
}
//fletching
export function fletchingRecipes() {
    var fletchingRecipes = [fletchWoodBow()]
    return fletchingRecipes
}
export function fletchWoodBow() {
    var fletch = { Name: "Fletch Wood Bow", Skill: "Fletching", Verb: "Fletched", LevelRequirement: 1, Exp: 25, Input: [{ Item: woodLogs(), Quantity: 1 }], Output: { Item: woodBow(), Quantity: 1 } }
    return fletch;
}
//smith
export function smithingRecipes() {
    var smithingRecipes = [smeltBronzeBar(), smeltIronBar(), smithBronzeArmor(), smithBronzeDagger()]
    return smithingRecipes
}
export function smeltBronzeBar() {
    var smelt = { Name: "Smelt Bronze Bar", Skill: "Smithing", Verb: "Smelt", LevelRequirement: 1, Exp: 25, Input: [{ Item: copperOre(), Quantity: 1 }, { Item: tinOre(), Quantity: 1 }], Output: { Item: bronzeBar(), Quantity: 1 } }
    return smelt;
}
export function smeltIronBar() {
    var smelt = { Name: "Smelt Iron Bar", Skill: "Smithing", Verb: "Smelt", LevelRequirement: 5, Exp: 50, Input: [{ Item: ironOre(), Quantity: 2 }], Output: { Item: ironBar(), Quantity: 1 } }
    return smelt;
}
export function smithBronzeArmor() {
    var smith = { Name: "Smith Bronze Armor", Skill: "Smithing", Verb: "Smith", LevelRequirement: 5, Exp: 125, Input: [{ Item: bronzeBar(), Quantity: 5 }], Output: { Item: bronzeDagger(), Quantity: 1 } }
    return smith;
}
export function smithBronzeDagger() {
    var smith = { Name: "Smith Bronze Dagger", Skill: "Smithing", Verb: "Smith", LevelRequirement: 1, Exp: 25, Input: [{ Item: bronzeBar(), Quantity: 1 }], Output: { Item: bronzeDagger(), Quantity: 1 } }
    return smith;
}
//gathering
//farming
export function farmingRecipes(){
    var farm = []
    return farm;
}
export function milkCow(){
    var milkCow = { Name: "Milk Cow", Skill: "Farming", Verb: "Milk", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: milk(), Quantity: 1 } }
    return milkCow
}
//fishing
export function fishingRecipes() {
    var fish = [fishFish()]
    return fish;
}
export function fishFish() {
    var fish = { Name: "Fish Fish", Skill: "Fishing", Verb: "Fish", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: rawFish(), Quantity: 1 } }
    return fish
}
//mining
export function miningRecipes() {
    var mine = [mineCopperOre(), mineTinOre(), mineIronOre()]
    return mine;
}
export function mineCopperOre() {
    var mine = { Name: "Mine Copper Ore", Skill: "Mining", Verb: "Mine", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: copperOre(), Quantity: 1 } }
    return mine;
}
export function mineIronOre() {
    var mine = { Name: "Mine Iron Ore", Skill: "Mining", Verb: "Mine", LevelRequirement: 5, Exp: 50, Input: [], Output: { Item: ironOre(), Quantity: 1 } }
    return mine;
}
export function mineTinOre() {
    var mine = { Name: "Mine Tin Ore", Skill: "Mining", Verb: "Mine", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: tinOre(), Quantity: 1 } }
    return mine;
}
//woodcutting
export function woodcuttingRecipes() {
    var wood = [cutWood()]
    return wood;
}
export function cutWood() {
    var cut = { Name: "Cut Wood", Skill: "Woodcutting", Verb: "Chop", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: woodLogs(), Quantity: 1 } }
    return cut;
}