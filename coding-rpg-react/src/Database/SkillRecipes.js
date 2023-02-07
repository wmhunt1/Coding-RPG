import { cookedFish, cookedRatMeat, noInput, rawFish, rawRatMeat, } from "./Items"
//cooking
export function cookRawFish() {
    var cookRaw = { Name: "Cook Raw Fish", Skill: "Cooking", Verb: "Cook", LevelRequirement: 1, Exp: 10, Input: {Item: rawFish(), Quantity : 1}, Output: {Item: cookedFish(), Quantity:1} }
    return cookRaw
}
export function cookRawRatMeat() {
    var cookRaw = { Name: "Cook Raw Rat Meat", Skill: "Cooking", Verb: "Cook", LevelRequirement: 1, Exp: 10, Input: {Item: rawRatMeat(), Quantity : 1}, Output: {Item: cookedRatMeat(), Quantity:1} }
    return cookRaw
}
//fishing
export function fishFish() {
    var cookRaw = { Name: "Fish Fish", Skill: "Fishing", Verb: "Fish", LevelRequirement: 1, Exp: 10, Input: {Item: noInput(), Quantity : 0}, Output: {Item: rawFish(), Quantity:1} }
    return cookRaw
}