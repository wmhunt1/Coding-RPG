import { cow, giant, giantRat, goblin, goblinBoss, rat, scareCrow, skeleton, spider, worg } from "./CharactersDB";
import { enslavedKoboldsDialogue, enterGoblinMineDialogue, giantCaveDialogue, saveMinersDialogue, spiderCaveDialogue } from "./DialoguesDB";

//combat encounters
//beasts
export function cowEncounter(hero) {
    var cowEncounter = { Name: "Cow", Type: "Combat", Content: [cow()] }
    return cowEncounter;
}
//rat
export function giantRatEncounter(hero) {
    var ratEncounter = { Name: "Giant Rat", Type: "Combat", Content: [giantRat(), rat(), rat(), rat()] }
    return ratEncounter
}
export function ratEncounter(hero) {
    var ratEncounter = { Name: "Rats", Type: "Combat", Content: [rat(), rat(), rat()] }
    return ratEncounter
}
export function spiderEncounter(hero) {
    var spiderEncounter = { Name: "Spiders", Type: "Combat", Content: [spider()] }
    return spiderEncounter;
}
//constructs
export function scareCrowEncounter(hero) {
    var encounter = { Name: "Scarecrow", Type: "Combat", Content: [scareCrow()] }
    return encounter;
}
//humanoids
export function giantEncounter(hero) {
    var encounter = { Name: "Scarecrow", Type: "Combat", Content: [giant()] }
    return encounter;
}
//goblins
export function bossGoblinEncounter(hero) {
    var bossGoblinEncounter = { Name: "Boss Goblin", Type: "Combat", Content: [goblinBoss(), goblin(), goblin(), goblin()] }
    return bossGoblinEncounter;
}
export function goblinEncounter(hero) {
    var goblinEncounter = { Name: "Goblins", Type: "Combat", Content: [goblin(), goblin(), goblin()] }
    return goblinEncounter
}
export function goblinWithWorgEncounter(hero) {
    var goblinWithWorgEncounter = { Name: "Goblin and Worg", Type: "Combat", Content: [goblin(), worg()] }
    return goblinWithWorgEncounter
}
//undead
export function skeletonEncounter(hero) {
    var encounter = { Name: "Fight Encounter", Type: "Combat", Content: [skeleton(), skeleton(), skeleton()] }
    return encounter;
}
//dialogue encounters
export function enterGoblinMineEncounter(hero) {
    var encounter = { Name: "Speak with Ferra", Type: "Dialogue", Content: enterGoblinMineDialogue(hero) }
    return encounter;
}
export function foremanGeorgeEncounter(hero) {
    var encounter = { Name: "Speak with Foreman George", Type: "Dialogue", Content: giantCaveDialogue(hero) }
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
export function saveTenguEncounter(hero) {
    var encounter = { Name: "Speak with Tengu", Type: "Dialogue", Content: spiderCaveDialogue(hero) }
    return encounter;
}