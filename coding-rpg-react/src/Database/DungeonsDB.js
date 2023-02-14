import { bossGoblinEncounter, enterGoblinMineEncounter, foremanGeorgeEncounter, giantEncounter, giantRatEncounter, goblinEncounter, goblinWithWorgEncounter, koboldSlavesEncounter, ratEncounter, saveMinersEncounter, saveTenguEncounter, spiderEncounter } from "./EncountersDB";
import { ale, pickAxe } from "./ItemsDB"
import { CheckForQuest } from "../Scripts/QuestScripts";
import { giantQuest, scareCrowQuest3 } from "./QuestsDB";

export function giantCaveDungeon(hero) {
    var cave;
    var questIndex = CheckForQuest(hero.Journal, giantQuest())
    if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        cave = { Name: "Giant Cave", Encounters: [], Boss: giantEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    }
    else {
        cave = { Name: "Giant Cave", Encounters: [], Boss: giantEncounter(), AfterBoss: foremanGeorgeEncounter(hero), GoldReward: 0, ItemReward: null }
    }
    return cave
}
//had to split these up for some reasons
export function goblinMine(hero) {
    var goblinMine = { Name: "Dwarven Mine", Encounters: [enterGoblinMineEncounter(hero), goblinWithWorgEncounter(), koboldSlavesEncounter(hero), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), AfterBoss: saveMinersEncounter(hero), GoldReward: 0, ItemReward: pickAxe() }
    return goblinMine;
}
export function goblinMineAfterQuest(hero) {
    var goblinMine = { Name: "Dwarven Mine", Encounters: [goblinWithWorgEncounter(), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: pickAxe() }
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
        spiderCave = { Name: "Spider Cave", Encounters: [spiderEncounter()], Boss: spiderEncounter(), AfterBoss: saveTenguEncounter(hero), GoldReward: 0, ItemReward: null }
    }
    return spiderCave
}