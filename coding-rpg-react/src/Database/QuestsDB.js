import { giantRat, scareCrow, skeleton } from "./CharactersDB"
import { banditHideoutDungeon, giantCaveDungeon, goblinMine, spiderCaveDungeon } from "./DungeonsDB"
import { basicHealScroll, lessonsFromFaldan, silverRingLR, tipsTraderJoe } from "./ItemsDB"

// export function banditQuest1(hero) {
//     var bandit = { Name: "Stop  the Bandits Part 1", Status: "In Progress", Type: "Dungeon", Description: "Find where the bandits' hideout.", Target: null, Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
//     return bandit;
// }
export function banditQuest1(hero) {
    var bandit = { Name: "Stop the Bandits", Status: "In Progress", Type: "Dungeon", Description: "Clear out the bandit hideout.", Target: banditHideoutDungeon(hero), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: tipsTraderJoe(), Quantity: 1 }] } }
    return bandit;
}
export function dwarvenMineGoblinQuest(hero) {
    var dwarvenMineGoblinQuest = { Name: "Goblin Slayer", Status: "In Progress", Type: "Dungeon", Description: "Clear out the goblins in the Dwarven Mine to rescue the miners", Target: goblinMine(hero), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: lessonsFromFaldan(), Quantity: 1 }] } }
    return dwarvenMineGoblinQuest
}
export function giantQuest(hero) {
    var giant = { Name: "Of Mice and Minotaurs", Status: "In Progress", Type: "Dungeon", Description: "Save Foreman George from the Giant", Target: giantCaveDungeon(hero), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return giant;
}
export function metSweetheart(hero)
{
    var sw = { Name: "Met Sweetheart", Status: "In Progress", Type: "Hidden", Description: "Checks if met Sweetheart", Target: null, Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return sw;
}
export function ratCellarQuest(hero) {
    var ratCellarQuest = { Name: "Rats in The Cellar", Status: "In Progress", Type: "Kill", Description: "Kill the Giant Rat in the cellar", Target: giantRat(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return ratCellarQuest
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
export function skeletonQuest(hero) {
    var quest = { Name: "Putting them to Rest", Status: "In Progress", Type: "Kill", Description: "Kill Skeletons", Target: skeleton(), Objective: 9, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: basicHealScroll(), Quantity: 1 }] } }
    return quest;
}