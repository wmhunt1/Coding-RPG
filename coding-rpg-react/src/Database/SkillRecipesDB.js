import { ashes, bronzeBar, bronzeDagger, bronzeDaggerOffHand, bronzeSword, bronzeTorso, coalOre, cookedFish, cookedRabbitMeat, cookedRatMeat, copperOre, fishingRod, hatchet, ironBar, ironDagger, ironDaggerOffHand, ironOre, ironSword, knife, milk, pickAxe, rawFish, rawRabbitMeat, rawRatMeat, steelBar, steelDagger, steelDaggerOffHand, steelSword, tinderBox, tinOre, woodBow, woodLogs, } from "./ItemsDB"
export function skillRecipes() {
    var skillRecipes = [burnWoodLogs(), cookRawFish(), cookRawRatMeat(), cutWood(), fishFish(), fletchWoodBow(), mineCopperOre(), mineIronOre(), mineTinOre(), smeltBronzeBar(), smeltIronBar(), smithBronzeArmor(), smithBronzeDagger()]
    return skillRecipes;
}
//crafting
//alchemy
export function alchemyRecipes() {
    var alchemyRecipes = []
    return alchemyRecipes
}
//cooking
export function cookingRecipes() {
    var cookingRecipes = [cookRawFish(), cookRawRabbitMeat(), cookRawRatMeat()]
    return cookingRecipes;
}
export function cookRawFish() {
    var cook = { Name: "Cook Raw Fish", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25, Input: [{ Item: rawFish(), Quantity: 1 }], Output: { Item: cookedFish(), Quantity: 1 } }
    return cook
}
export function cookRawRabbitMeat() {
    var cook = { Name: "Cook Raw Rabbit Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25, Input: [{ Item: rawRabbitMeat(), Quantity: 1 }], Output: { Item: cookedRabbitMeat(), Quantity: 1 } }
    return cook
}
export function cookRawRatMeat() {
    var cook = { Name: "Cook Raw Rat Meat", Skill: "Cooking", Tool: null, Verb: "Cook", LevelRequirement: 1, Exp: 25, Input: [{ Item: rawRatMeat(), Quantity: 1 }], Output: { Item: cookedRatMeat(), Quantity: 1 } }
    return cook
}
//firemaking
export function firemakingRecipes() {
    var firemakingRecipes = [burnWoodLogs()]
    return firemakingRecipes
}
export function burnWoodLogs() {
    var burn = { Name: "Burn Wood Logs", Skill: "Firemaking", Tool: tinderBox(), Verb: "Burn", LevelRequirement: 1, Exp: 25, Input: [{ Item: woodLogs(), Quantity: 1 }], Output: { Item: ashes(), Quantity: 1 } }
    return burn;
}
//fletching
export function fletchingRecipes() {
    var fletchingRecipes = [fletchWoodBow()]
    return fletchingRecipes
}
export function fletchWoodBow() {
    var fletch = { Name: "Fletch Wood Bow", Skill: "Fletching", Tool: knife(), Verb: "Fletched", LevelRequirement: 1, Exp: 25, Input: [{ Item: woodLogs(), Quantity: 1 }], Output: { Item: woodBow(), Quantity: 1 } }
    return fletch;
}
//smith
export function smithingRecipes() {
    var smithingRecipes = [smeltBronzeBar(), smeltIronBar(), smeltSteelBar(),
    smithBronzeArmor(), smithBronzeDagger(), smithBronzeDaggerOffHand(), smithBronzeSword(),
    smithIronDagger(), smithIronDaggerOffHand(), smithIronSword(),
    smithSteelDagger(), smithSteelDaggerOffHand(), smithSteelSword()]
    return smithingRecipes
}
//smelting
export function smeltBronzeBar() {
    var smelt = { Name: "Smelt Bronze Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 1, Exp: 25, Input: [{ Item: copperOre(), Quantity: 1 }, { Item: tinOre(), Quantity: 1 }], Output: { Item: bronzeBar(), Quantity: 1 } }
    return smelt;
}
export function smeltIronBar() {
    var smelt = { Name: "Smelt Iron Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 5, Exp: 50, Input: [{ Item: ironOre(), Quantity: 2 }], Output: { Item: ironBar(), Quantity: 1 } }
    return smelt;
}
export function smeltSteelBar() {
    var smelt = { Name: "Smelt Steel Bar", Skill: "Smithing", Tool: null, Verb: "Smelt", LevelRequirement: 10, Exp: 100, Input: [{ Item: ironOre(), Quantity: 1 }, { Item: coalOre(), Quantity: 2 }], Output: { Item: steelBar(), Quantity: 1 } }
    return smelt;
}
//smithing
export function smithBronzeArmor() {
    var smith = { Name: "Smith Bronze Armor", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 5, Exp: 125, Input: [{ Item: bronzeBar(), Quantity: 5 }], Output: { Item: bronzeTorso(), Quantity: 1 } }
    return smith;
}
export function smithBronzeDagger() {
    var smith = { Name: "Smith Bronze Dagger", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 1, Exp: 25, Input: [{ Item: bronzeBar(), Quantity: 1 }], Output: { Item: bronzeDagger(), Quantity: 1 } }
    return smith;
}
export function smithBronzeDaggerOffHand() {
    var smith = { Name: "Smith Bronze Dagger (OffHand)", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 1, Exp: 25, Input: [{ Item: bronzeBar(), Quantity: 1 }], Output: { Item: bronzeDaggerOffHand(), Quantity: 1 } }
    return smith;
}
export function smithBronzeSword() {
    var smith = { Name: "Smith Bronze Sword", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 2, Exp: 50, Input: [{ Item: bronzeBar(), Quantity: 2 }], Output: { Item: bronzeSword(), Quantity: 1 } }
    return smith;
}
export function smithIronDagger() {
    var smith = { Name: "Smith Iron Dagger", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 5, Exp: 50, Input: [{ Item: ironBar(), Quantity: 1 }], Output: { Item: ironDagger(), Quantity: 1 } }
    return smith;
}
export function smithIronDaggerOffHand() {
    var smith = { Name: "Smith Iron Dagger (OffHand)", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 5, Exp: 50, Input: [{ Item: ironBar(), Quantity: 1 }], Output: { Item: ironDaggerOffHand(), Quantity: 1 } }
    return smith;
}
export function smithIronSword() {
    var smith = { Name: "Smith Iron Sword", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 6, Exp: 50, Input: [{ Item: ironBar(), Quantity: 2 }], Output: { Item: ironSword(), Quantity: 1 } }
    return smith;
}
export function smithSteelDagger() {
    var smith = { Name: "Smith Steel Dagger", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 10, Exp: 100, Input: [{ Item: steelBar(), Quantity: 1 }], Output: { Item: steelDagger(), Quantity: 1 } }
    return smith;
}
export function smithSteelDaggerOffHand() {
    var smith = { Name: "Smith Steel Dagger (OffHand)", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 10, Exp: 100, Input: [{ Item: steelBar(), Quantity: 1 }], Output: { Item: steelDaggerOffHand(), Quantity: 1 } }
    return smith;
}
export function smithSteelSword() {
    var smith = { Name: "Smith Steel Sword", Skill: "Smithing", Tool: null, Verb: "Smith", LevelRequirement: 11, Exp: 100, Input: [{ Item: steelBar(), Quantity: 2 }], Output: { Item: steelSword(), Quantity: 1 } }
    return smith;
}
//gathering
//farming
export function farmingRecipes() {
    var farm = [milkCow()]
    return farm;
}
export function milkCow() {
    var milkCow = { Name: "Milk Cow", Skill: "Farming", Tool: null, Verb: "Milk", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: milk(), Quantity: 1 } }
    return milkCow
}
//fishing
export function fishingRecipes() {
    var fish = [fishFish()]
    return fish;
}
export function fishFish() {
    var fish = { Name: "Fish Fish", Skill: "Fishing", Tool: fishingRod(), Verb: "Fish", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: rawFish(), Quantity: 1 } }
    return fish
}
//hunting
export function huntingRecipes() {
    var hunt = [huntRabbit()]
    return hunt;
}
export function huntRabbit() {
    var hunt = { Name: "Hunt Rabbit", Skill: "Hunting", Tool: null, Verb: "Rabbit", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: rawRabbitMeat(), Quantity: 1 } }
    return hunt
}
//mining
export function miningRecipes() {
    var mine = [mineCoalOre(), mineCopperOre(), mineTinOre(), mineIronOre()]
    return mine;
}
export function mineCoalOre() {
    var mine = { Name: "Mine Coal", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 10, Exp: 100, Input: [], Output: { Item: coalOre(), Quantity: 1 } }
    return mine;
}
export function mineCopperOre() {
    var mine = { Name: "Mine Copper Ore", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: copperOre(), Quantity: 1 } }
    return mine;
}
export function mineIronOre() {
    var mine = { Name: "Mine Iron Ore", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 5, Exp: 50, Input: [], Output: { Item: ironOre(), Quantity: 1 } }
    return mine;
}
export function mineTinOre() {
    var mine = { Name: "Mine Tin Ore", Skill: "Mining", Tool: pickAxe(), Verb: "Mine", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: tinOre(), Quantity: 1 } }
    return mine;
}
//woodcutting
export function woodcuttingRecipes() {
    var wood = [cutWood()]
    return wood;
}
export function cutWood() {
    var cut = { Name: "Cut Wood", Skill: "Woodcutting", Tool: hatchet(), Verb: "Chop", LevelRequirement: 1, Exp: 25, Input: [], Output: { Item: woodLogs(), Quantity: 1 } }
    return cut;
}