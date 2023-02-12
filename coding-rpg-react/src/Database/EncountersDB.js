import { giantRat, goblin, goblinBoss, rat, worg } from "./CharactersDB";

//goblins
export function bossGoblinEncounter() {
    var bossGoblinEncounter = [goblinBoss(), goblin(), goblin(), goblin()]
    return bossGoblinEncounter;
}
export function goblinEncounter() {
    var goblinEncounter = [goblin(), goblin(), goblin()]
    return goblinEncounter
}
export function goblinWithWorgEncounter()
{
    var goblinWithWorgEncounter = [goblin(), worg()]
    return goblinWithWorgEncounter
}
//rats
export function giantRatEncounter() {
    var ratEncounter = [giantRat(), rat(), rat(), rat()]
    return ratEncounter
}
export function ratEncounter() {
    var ratEncounter = [rat(), rat(), rat()]
    return ratEncounter
}
//tests
export function testEncounter() {
    var testEncounter = [rat(), rat(), rat()]
    return testEncounter;
}