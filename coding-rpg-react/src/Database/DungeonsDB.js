import { bossGoblinEncounter, enterGoblinMineEncounter, giantRatEncounter, goblinEncounter, goblinWithWorgEncounter, koboldSlavesEncounter, ratEncounter, saveMinersEncounter } from "./EncountersDB";
import { ale, pickAxe } from "./ItemsDB"

export function goblinMine(hero) {
    var goblinMine = { Name: "Dwarven Mine", Encounters: [enterGoblinMineEncounter(hero), goblinWithWorgEncounter(), koboldSlavesEncounter(hero), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], Boss: bossGoblinEncounter(), AfterBoss: saveMinersEncounter(hero), GoldReward: 0, ItemReward: pickAxe() }
    return goblinMine;
}
export function ratCellar(hero) {
    var ratCellar = { Name: "Cellar", Encounters: [ratEncounter(), ratEncounter(), ratEncounter()], Boss: giantRatEncounter(), AfterBoss: null, GoldReward: 0, ItemReward: ale() }
    return ratCellar;
}