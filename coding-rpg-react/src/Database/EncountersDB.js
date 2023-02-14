import { cow,giant, giantRat, goblin, goblinBoss, rat,scareCrow,spider, worg } from "./CharactersDB";
import { enslavedKoboldsDialogue, enterGoblinMineDialogue, saveMinersDialogue } from "./DialoguesDB";

//combat encounters
//beasts
export function cowEncounter() {
    var cowEncounter = { Name: "Cow", Type: "Combat", Content: [cow()] }
    return cowEncounter;
}
//rat
export function giantRatEncounter() {
    var ratEncounter = { Name: "Giant Rat", Type: "Combat", Content: [giantRat(), rat(), rat(), rat()] }
    return ratEncounter
}
export function ratEncounter() {
    var ratEncounter = { Name: "Rats", Type: "Combat", Content: [rat(), rat(), rat()] }
    return ratEncounter
}
export function spiderEncounter()
{
    var spiderEncounter = { Name: "Spiders", Type: "Combat", Content: [spider()] }
    return spiderEncounter;
}
//constructs
export function scareCrowEncounter()
{
    var encounter = { Name: "Scarecrow", Type: "Combat", Content: [scareCrow()] }
    return encounter;
}
//humanoids
export function giantEncounter()
{
    var encounter = { Name: "Scarecrow", Type: "Combat", Content: [giant()] }
    return encounter;
}
//goblins
export function bossGoblinEncounter() {
    var bossGoblinEncounter = { Name: "Boss Goblin", Type: "Combat", Content: [goblinBoss(), goblin(), goblin(), goblin()] }
    return bossGoblinEncounter;
}
export function goblinEncounter() {
    var goblinEncounter = { Name: "Goblins", Type: "Combat", Content: [goblin(), goblin(), goblin()] }
    return goblinEncounter
}
export function goblinWithWorgEncounter() {
    var goblinWithWorgEncounter = { Name: "Goblin and Worg", Type: "Combat", Content: [goblin(), worg()] }
    return goblinWithWorgEncounter
}
//dialogue encounters
export function enterGoblinMineEncounter(hero) {
    var encounter = { Name: "Speak with Ferra", Type: "Dialogue", Content: enterGoblinMineDialogue(hero) }
    return encounter;
}
export function koboldSlavesEncounter(hero) {
    var encounter = { Name: "Speak with Kobolds", Type: "Dialogue", Content: enslavedKoboldsDialogue(hero) }
    return encounter;
}
export function saveMinersEncounter(hero) {
    var encounter = { Name: "Speak with Mine Foreman", Type: "Dialogue", Content: saveMinersDialogue(hero) }
    return encounter;
}