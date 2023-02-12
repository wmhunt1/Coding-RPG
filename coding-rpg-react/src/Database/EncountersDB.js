import { cow, giantRat, goblin, goblinBoss, rat, worg } from "./CharactersDB";
import { testDungeonDialogue } from "./DialoguesDB";

//combat encounters
//beasts
export function cowEncounter() {
    var cowEncounter = {Name: "Cow", Type: "Combat", Content: [cow()] }
    return cowEncounter;
}
//rat
export function giantRatEncounter() {
    var ratEncounter = {Name: "Giant Rat", Type: "Combat", Content: [giantRat(), rat(), rat(), rat()] }
    return ratEncounter
}
export function ratEncounter() {
    var ratEncounter = {Name: "Rats", Type: "Combat", Content: [rat(), rat(), rat()] }
    return ratEncounter
}
//humanoids
//goblins
export function bossGoblinEncounter() {
    var bossGoblinEncounter = {Name: "Boss Goblin", Type: "Combat", Content: [goblinBoss(), goblin(), goblin(), goblin()] }
    return bossGoblinEncounter;
}
export function goblinEncounter() {
    var goblinEncounter = {Name: "Goblins", Type: "Combat", Content: [goblin(), goblin(), goblin()] }
    return goblinEncounter
}
export function goblinWithWorgEncounter() {
    var goblinWithWorgEncounter = {Name: "Goblin and Worg", Type: "Combat", Content: [goblin(), worg()] }
    return goblinWithWorgEncounter
}
//dialogue encounters
//tests
//test combat encounters
export function testEncounterDlg(hero) {
    var testEncounter = {Name: "Talk to Test", Type: "Dialogue", Content: [testDungeonDialogue(hero)] }
    return testEncounter;
}
//test dialogue encounters
export function testEncounter() {
    var testEncounter = {Name: "Test Rat", Type: "Combat", Content: [rat()] }
    return testEncounter;
}