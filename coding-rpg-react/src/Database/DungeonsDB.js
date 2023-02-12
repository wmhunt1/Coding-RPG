import { bossGoblinEncounter, giantRatEncounter, goblinEncounter, goblinWithWorgEncounter, ratEncounter, testEncounter, testEncounterDlg } from "./EncountersDB";
import { ale, cheese, pickAxe } from "./ItemsDB"

export function goblinMine(hero) {
    var goblinMine = { Name: "Dwarven Mine", Encounters: [goblinWithWorgEncounter(), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), GoldReward: 0, ItemReward: pickAxe() }
    return goblinMine;
}
export function ratCellar(hero) {
    var ratCellar = { Name: "Cellar", Encounters: [ratEncounter(), ratEncounter(), ratEncounter()], Boss: giantRatEncounter(), GoldReward: 0, ItemReward: ale() }
    return ratCellar;
}
//tests
export function testDungeon(hero) {
    var testDungeon = { Name: "Test Dungeon", Encounters: [testEncounter(),testEncounterDlg(hero), testEncounter()], Boss: testEncounter(), GoldReward: 10, ItemReward: cheese() }
    return testDungeon
}