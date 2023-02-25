import { GiantRat, ScareCrow, Skeleton } from "./CharactersDB"
import { BanditHideoutDungeon, GiantCaveDungeon, GnollDenDungeon, GoblinMine, PuzzleCubeDungeon, SpiderCaveDungeon } from "./DungeonsDB"
import { BasicHealScroll, BlackFeather, SilverRingLR, SkillLamp, Wheat } from "./ItemsDB"
import { BarterSkill, FarmingSkill, SmithingSkill, WoodcuttingSkill } from "./SkillsDB";

export function banditQuest1(hero) {
    var bandit = { Name: "Stop the Bandits", Status: "In Progress", Type: "Dungeon", Description: "Clear out the bandit hideout.", Target: new BanditHideoutDungeon(hero), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: new SkillLamp("Barter Lamp", 500, new BarterSkill()), Quantity: 1 }] } }
    return bandit;
}
export function dwarvenMineGoblinQuest(hero) {
    var dwarvenMineGoblinQuest = { Name: "Goblin Slayer", Status: "In Progress", Type: "Dungeon", Description: "Clear out the goblins in the Dwarven Mine to rescue the miners", Target: new GoblinMine(hero), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: new SkillLamp("Smithing Lamp", 500, new SmithingSkill()), Quantity: 1 }] } }
    return dwarvenMineGoblinQuest
}
export function giantQuest(hero) {
    var giant = { Name: "Of Mice and Minotaurs", Status: "In Progress", Type: "Dungeon", Description: "Save Foreman George from the Giant", Target: new GiantCaveDungeon(hero), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: new SkillLamp("Woodcutting Lamp", 500, new WoodcuttingSkill()) }] } }
    return giant;
}
export function gnollQuest1(hero) {
    var gnoll = { Name: "Flock of Gnolls", Status: "In Progress", Type: "Dungeon", Description: "Clear out the Gnoll Den to protect Whitescale's Flock", Target: new GnollDenDungeon(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return gnoll;
}
export function metSweetheart(hero) {
    var sw = { Name: "Met Sweetheart", Status: "In Progress", Type: "Hidden", Description: "Checks if met Sweetheart", Target: null, Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return sw;
}
export function metWitch(hero) {
    var witch = { Name: "Met Witch and Wyle", Status: "In Progress", Type: "Hidden", Description: "Checks if met Witch And Wyle", Target: null, Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return witch;
}
export function ratCellarQuest(hero) {
    var ratCellarQuest = { Name: "Rats in The Cellar", Status: "In Progress", Type: "Kill", Description: "Kill the Giant Rat in the cellar", Target: new GiantRat(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [] } }
    return ratCellarQuest
}
export function scareCrowQuest1(hero) {
    var crow = { Name: "Scarecrow Part 1", Status: "In Progress", Type: "Kill", Description: "Kill the possessed scarecrow", Target: new ScareCrow(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 10, Items: [{ Item: new Wheat(), Quantity: 5 }] } }
    return crow;
}
export function scareCrowQuest2(hero) {
    var crow = { Name: "Scarecrow Part 2", Status: "In Progress", Type: "Kill", Description: "Find the crows", Target: null, Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: new BlackFeather(), Quantity: 1 }] } }
    return crow;
}
export function scareCrowQuest3(hero) {
    var crow = { Name: "Scarecrow Part 3", Status: "In Progress", Type: "Dungeon", Description: "Save the Tengu from the Spider Cave", Target: new SpiderCaveDungeon(), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: new SilverRingLR(), Quantity: 1 }] } }
    return crow;
}
export function scareCrowQuest4(hero) {
    var crow = { Name: "Scarecrow Part 4", Status: "In Progress", Type: "Hidden", Description: "Return ring to Farmer Littleroot", Target: null, Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: new SkillLamp("Farming Lamp", 500, new FarmingSkill()) }] } }
    return crow;
}
export function skeletonQuest(hero) {
    var quest = { Name: "Putting them to Rest", Status: "In Progress", Type: "Kill", Description: "Kill Skeletons", Target: new Skeleton(), Objective: 9, ObjectiveProgress: 0, Reward: { Gold: 0, Items: [{ Item: new BasicHealScroll(), Quantity: 1 }] } }
    return quest;
}
export function wizardTowerQuest1(hero) {
    var quest = { Name: "The Archmage's Apprentice", Status: "In Progress", Type: "Dungeon", Description: "Rescue Ambrosius' Apprentice from the Puzzle Cube", Target: new PuzzleCubeDungeon(hero), Objective: 1, ObjectiveProgress: 0, Reward: { Gold: 0, Items: null } }
    return quest;
}