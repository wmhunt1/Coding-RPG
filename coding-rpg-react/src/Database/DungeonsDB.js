import { banditAndBanditArcherEncounter, banditAndBanditBersekerEncounter, banditArcherEncounter, banditBerserkerEncounter, banditEncounter, banditTrioEncounter, bossGoblinEncounter, enterGoblinMineEncounter, foremanGeorgeEncounter, giantEncounter, giantRatEncounter, giantSpiderEncounter, goblinEncounter, goblinWithWorgEncounter, koboldSlavesEncounter, ratEncounter, saveMinersEncounter, saveTenguEncounter, spiderEncounter } from "./EncountersDB";
import { ale, banditSpoils, pickAxe } from "./ItemsDB"
import { CheckForQuest } from "../Scripts/QuestScripts";
import { scareCrowQuest3 } from "./QuestsDB";


//had to split these up for some reasons
export function banditHideoutDungeon(hero) {
    var hideout = { Name: "Bandit Hideout", Encounters: [
        //banditHideoutDialogueEncounter(hero), 
        banditArcherEncounter(), banditEncounter(), banditAndBanditArcherEncounter(), banditEncounter(), banditAndBanditBersekerEncounter(), banditEncounter(), banditBerserkerEncounter()], Boss: banditTrioEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: banditSpoils() }
    return hideout
}
export function giantCaveDungeon(hero) {
    var cave = { Name: "Giant Cave", Encounters: [], Boss: giantEncounter(), AfterBoss: foremanGeorgeEncounter(hero), GoldReward: 0, ItemReward: null }
    return cave
}
export function giantCaveDungeonBeforeAndAfterQuest(hero) {
    var cave = { Name: "Giant Cave", Encounters: [], Boss: giantEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    return cave
}
//had to split these up for some reason
export function goblinMine(hero) {
    var goblinMine = { Name: "Dwarven Mine", Encounters: [enterGoblinMineEncounter(hero), goblinWithWorgEncounter(), koboldSlavesEncounter(hero), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), AfterBoss: saveMinersEncounter(hero), GoldReward: 0, ItemReward: null }
    return goblinMine;
}
export function goblinMineAfterQuest(hero) {
    var goblinMine = { Name: "Dwarven Mine", Encounters: [goblinWithWorgEncounter(), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    return goblinMine;
}
export function ratCellar(hero) {
    var ratCellar = { Name: "Cellar", Encounters: [ratEncounter(), ratEncounter(), ratEncounter()], Boss: giantRatEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: ale() }
    return ratCellar;
}
export function spiderCaveDungeon(hero) {
    var spiderCave;
    var questIndex = CheckForQuest(hero, scareCrowQuest3())
    if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        spiderCave = { Name: "Spider Cave", Encounters: [spiderEncounter(), spiderEncounter(), spiderEncounter()], Boss: giantSpiderEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    }
    else {
        spiderCave = { Name: "Spider Cave", Encounters: [spiderEncounter(), spiderEncounter(), spiderEncounter()], Boss: spiderEncounter(), AfterBoss: saveTenguEncounter(hero), GoldReward: 0, ItemReward: null }
    }
    return spiderCave
}