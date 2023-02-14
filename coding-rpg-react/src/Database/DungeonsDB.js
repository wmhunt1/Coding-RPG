import { bossGoblinEncounter, enterGoblinMineEncounter, giantRatEncounter, goblinEncounter, goblinWithWorgEncounter, koboldSlavesEncounter, ratEncounter, saveMinersEncounter, spiderEncounter } from "./EncountersDB";
import { ale, pickAxe } from "./ItemsDB"
import { CheckForQuest } from "../Scripts/QuestScripts";
import { dwarvenMineGoblinQuest, scareCrowQuest3 } from "./QuestsDB";
import { giant } from "./CharactersDB";

export function giantCaveDungeon(hero) {
    var cave;
    var questIndex = CheckForQuest(hero.Journal, scareCrowQuest3())
    if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        cave = { Name: "Giant Cave", Encounters: [], Boss: giant(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    }
    else {
    cave = { Name: "Giant Cave", Encounters: [], Boss: giant(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    }
    return cave
}
export function goblinMine(hero) {
    var questIndex = CheckForQuest(hero.Journal, dwarvenMineGoblinQuest())
    var goblinMine;
    if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        goblinMine = { Name: "Dwarven Mine", Encounters: [goblinWithWorgEncounter(), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: pickAxe() }
    }
    else {
        goblinMine = { Name: "Dwarven Mine", Encounters: [enterGoblinMineEncounter(hero), goblinWithWorgEncounter(), koboldSlavesEncounter(hero), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), AfterBoss: saveMinersEncounter(hero), GoldReward: 0, ItemReward: pickAxe() }
    }
    return goblinMine;
}
export function ratCellar(hero) {
    var ratCellar = { Name: "Cellar", Encounters: [ratEncounter(), ratEncounter(), ratEncounter()], Boss: giantRatEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: ale() }
    return ratCellar;
}
export function spiderCaveDungeon(hero) {
    var spiderCave;
    var questIndex = CheckForQuest(hero.Journal, scareCrowQuest3())
    if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        spiderCave = { Name: "Spider Cave", Encounters: [spiderEncounter()], Boss: spiderEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    }
    else {
        spiderCave = { Name: "Spider Cave", Encounters: [spiderEncounter()], Boss: spiderEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    }
    return spiderCave
}