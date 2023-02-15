import { giantRat, scareCrow } from "./CharactersDB"
import { giantCaveDungeon, goblinMine, spiderCaveDungeon } from "./DungeonsDB"
import { lessonsFromFaldan, silverRingLR } from "./ItemsDB"

export function dwarvenMineGoblinQuest(hero) {
    var dwarvenMineGoblinQuest = { Name: "Goblin Slayer", Status: "In Progress", Type: "Dungeon", Description: "Clear out the goblins in the Dwarven Mine to rescue the miners", Target: goblinMine(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: lessonsFromFaldan(), Quantity: 1 }] } }
    return dwarvenMineGoblinQuest
}
export function giantQuest(hero) {
    var giant = { Name: "Of Mice and Minotaurs", Status: "In Progress", Type: "Dungeon", Description: "Save Foreman George from the Giant", Target: giantCaveDungeon(hero), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return giant;
}
export function scareCrowQuest1(hero) {
    var crow = { Name: "Scarecrow Part 1", Status: "In Progress", Type: "Kill", Description: "Kill the possessed scarecrow", Target: scareCrow(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return crow;
}
export function scareCrowQuest2(hero) {
    var crow = { Name: "Scarecrow Part 2", Status: "In Progress", Type: "Kill", Description: "Find the crows", Target: null, Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return crow;
}
export function scareCrowQuest3(hero) {
    var crow = { Name: "Scarecrow Part 3", Status: "In Progress", Type: "Dungeon", Description: "Save the Tengu from the Spider Cave", Target: spiderCaveDungeon(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: silverRingLR(), Quantity: 1 }] } }
    return crow;
}
export function scareCrowQuest4(hero) {
    var crow = { Name: "Scarecrow Part 4", Status: "In Progress", Type: "Hidden", Description: "Return ring to Farmer Littleroot", Target: null, Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return crow;
}
export function ratCellarQuest(hero) {
    var ratCellarQuest = { Name: "Rats in The Cellar", Status: "In Progress", Type: "Kill", Description: "Kill the Giant Rat in the cellar", Target: giantRat(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return ratCellarQuest
}