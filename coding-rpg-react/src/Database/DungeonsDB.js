import { rat } from "./CharactersDB"
import { testDungeonDialogue } from "./DialoguesDB"
import { bossGoblinEncounter, giantRatEncounter, goblinEncounter, goblinWithWorgEncounter, ratEncounter } from "./EncountersDB";
import { ale, cheese, pickAxe } from "./ItemsDB"

export function goblinMine(hero) {
    var goblinMine = { Name: "Dwarven Mine", Dialogue: null, Encounters: [goblinWithWorgEncounter(), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), GoldReward: 0, ItemReward: pickAxe() }
    return goblinMine;
}
export function ratCellar(hero) {
    var ratCellar = { Name: "Cellar", Dialogue: null, Encounters: [ratEncounter(), ratEncounter(), ratEncounter()], Boss: giantRatEncounter(), GoldReward: 0, ItemReward: ale() }
    return ratCellar;
}
//tests
export function testDungeon(hero) {
    var testDungeon = { Name: "Test Dungeon", Dialogue: testDungeonDialogue(hero, 0, 0, 0), haveDungeonDialogue(hero, encounters, defeated, boss) { this.Dialogue = testDungeonDialogue(hero, encounters, defeated, boss) }, Encounters: [[rat()]], Boss: [rat()], GoldReward: 10, ItemReward: cheese() }
    return testDungeon
}
export function testDungeon2(hero) {
    var testDungeon = { Name: "Test Dungeon2", Dialogue: null, haveDungeonDialogue() { }, Encounters: [[rat()]], Boss: [rat()], GoldReward: 10, ItemReward: cheese() }
    return testDungeon
}