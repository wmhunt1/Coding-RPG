import { banditAndBanditArcherEncounter, banditAndBanditBersekerEncounter, banditArcherEncounter, banditBerserkerEncounter, banditEncounter, banditTrioEncounter, bossGoblinEncounter, enterGoblinMineEncounter, foremanGeorgeEncounter, giantEncounter, giantRatEncounter, giantSpiderEncounter, gnollEncounter, gnollLeaderEncounter, gnollShamanEncounter, goblinEncounter, goblinWithWorgEncounter, koboldSlavesEncounter, ratEncounter, saveMinersEncounter, saveTenguEncounter, spiderEncounter } from "./EncountersDB";
import { ale, banditSpoils, bronzeBar, cowLeather, spiderSilkCloth } from "./ItemsDB"
import { CheckForQuest } from "../Scripts/QuestScripts";
import { scareCrowQuest3 } from "./QuestsDB";

export function banditHideoutDungeon(hero) {
    var hideout = { Name: "Bandit Hideout", Encounters: [banditArcherEncounter(), banditEncounter(), banditAndBanditArcherEncounter(), banditEncounter(), banditAndBanditBersekerEncounter(), banditEncounter(), banditBerserkerEncounter()], Boss: banditTrioEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: banditSpoils() }
    return hideout
}
export function giantCaveDungeon(hero) {
    var cave = { Name: "Giant Cave", Encounters: [], Boss: giantEncounter(), AfterBoss: foremanGeorgeEncounter(hero), GoldReward: 10, ItemReward: null }
    return cave
}
export function giantCaveDungeonBeforeAndAfterQuest(hero) {
    var cave = { Name: "Giant Cave", Encounters: [], Boss: giantEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    return cave
}
export function gnollDenDungeon() {
    var cave = { Name: "Gnoll Den", Encounters: [gnollEncounter(), gnollShamanEncounter(), gnollEncounter()], Boss: gnollLeaderEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: cowLeather() }
    return cave
}
//had to split these up for some reason
export function goblinMine(hero) {
    var goblinMine = { Name: "Dwarven Mine", Encounters: [enterGoblinMineEncounter(hero), goblinWithWorgEncounter(), koboldSlavesEncounter(hero), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), AfterBoss: saveMinersEncounter(hero), GoldReward: 0, ItemReward: bronzeBar() }
    return goblinMine;
}
export function goblinMineAfterQuest(hero) {
    var goblinMine = { Name: "Dwarven Mine", Encounters: [goblinWithWorgEncounter(), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: null }
    return goblinMine;
}
export function puzzleCubeDungeon(hero) {
    var dungeon = { Name: "Puzzle Cube", Encounters: [], Boss: null, AfterBoss: null, GoldReward: 0, ItemReward: null }
    return dungeon;
}
export function ratCellar(hero) {
    var ratCellar = { Name: "Cellar", Encounters: [ratEncounter(), ratEncounter(), ratEncounter()], Boss: giantRatEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: ale() }
    return ratCellar;
}
export function spiderCaveDungeon(hero) {
    var spiderCave;
    var questIndex = CheckForQuest(hero, scareCrowQuest3())
    if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        spiderCave = { Name: "Spider Cave", Encounters: [spiderEncounter(), spiderEncounter(), spiderEncounter()], Boss: giantSpiderEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: spiderSilkCloth() }
    }
    else {
        spiderCave = { Name: "Spider Cave", Encounters: [spiderEncounter(), spiderEncounter(), spiderEncounter()], Boss: spiderEncounter(), AfterBoss: saveTenguEncounter(hero), GoldReward: 0, ItemReward: spiderSilkCloth() }
    }
    return spiderCave
}