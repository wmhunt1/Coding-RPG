import { bandit, banditArcher, banditBerseker, cow, giant, giantRat, giantSpider, goblin, goblinBoss, rat, scareCrow, skeleton, spider, worg } from "./CharactersDB";
import { enslavedKoboldsDialogue, enterGoblinMineDialogue, giantCaveDialogue, saveMinersDialogue, spiderCaveDialogue } from "./DialoguesDB";

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
//spiders
export function giantSpiderEncounter() {
    var spiderEncounter = { Name: "Spiders", Type: "Combat", Content: [giantSpider()] }
    return spiderEncounter;
}
export function spiderEncounter() {
    var spiderEncounter = { Name: "Spiders", Type: "Combat", Content: [spider(), spider(), spider()] }
    return spiderEncounter;
}
//constructs
export function scareCrowEncounter() {
    var encounter = { Name: "Scarecrow", Type: "Combat", Content: [scareCrow()] }
    return encounter;
}
//humanoids
export function banditEncounter() {
    var encounter = { Name: "Bandits", Type: "Combat", Content: [bandit(), bandit()] }
    return encounter;
}
export function banditAndBanditArcherEncounter() {
    var encounter = { Name: "Bandits", Type: "Combat", Content: [bandit(), banditArcher()] }
    return encounter;
}
export function banditAndBanditBersekerEncounter() {
    var encounter = { Name: "Bandits", Type: "Combat", Content: [bandit(), banditBerseker()] }
    return encounter;
}
export function banditArcherEncounter() {
    var encounter = { Name: "Bandit Archers", Type: "Combat", Content: [banditArcher(), banditArcher()] }
    return encounter;
}
export function banditArcherAndBanditBersekerEncounter() {
    var encounter = { Name: "Bandits", Type: "Combat", Content: [banditArcher(), banditBerseker()] }
    return encounter;
}
export function banditBerserkerEncounter() {
    var encounter = { Name: "Bandit Berserkers", Type: "Combat", Content: [banditBerseker(), banditBerseker()] }
    return encounter;
}
export function banditTrioEncounter() {
    var encounter = { Name: "Bandit Trio", Type: "Combat", Content: [bandit(), banditArcher(), banditBerseker()] }
    return encounter;
}
export function giantEncounter() {
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
//undead
export function skeletonEncounter() {
    var encounter = { Name: "Fight Encounter", Type: "Combat", Content: [skeleton(), skeleton(), skeleton()] }
    return encounter;
}
//dialogue encounters
// export function banditHideoutDialogueEncounter(hero) {
//     var encounter = { Name: "Inspect Hideout", Type: "Dialogue", Content: banditHideoutDialogue(hero) }
//     return encounter;
// }
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