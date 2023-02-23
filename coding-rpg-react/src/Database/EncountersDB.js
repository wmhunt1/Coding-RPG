import { Bandit, BanditArcher, BanditBerserker, Cow, Giant, GiantRat, GiantSpider,Gnoll, GnollLeader, GnollShaman, Goblin, GoblinBoss, Hyena, Rat, ScareCrow, Skeleton, Spider, Worg } from "./CharactersDB";
import { enslavedKoboldsDialogue, enterGoblinMineDialogue, giantCaveDialogue, saveMinersDialogue, spiderCaveDialogue } from "./DialoguesDB";

//combat encounters
//beasts
export function cowEncounter() {
    var cowEncounter = { Name: "Cow", Type: "Combat", Content: [new Cow()] }
    return cowEncounter;
}
//rat
export function giantRatEncounter() {
    var ratEncounter = { Name: "Giant Rat", Type: "Combat", Content: [new GiantRat(), new Rat(), new Rat(), new Rat()] }
    return ratEncounter
}
export function ratEncounter() {
    var ratEncounter = { Name: "Rats", Type: "Combat", Content: [new Rat(), new Rat(), new Rat()] }
    return ratEncounter
}
//spiders
export function giantSpiderEncounter() {
    var spiderEncounter = { Name: "Spiders", Type: "Combat", Content: [new GiantSpider()] }
    return spiderEncounter;
}
export function spiderEncounter() {
    var spiderEncounter = { Name: "Spiders", Type: "Combat", Content: [new Spider(), new Spider(), new Spider()] }
    return spiderEncounter;
}
//constructs
export function scareCrowEncounter() {
    var encounter = { Name: "Scarecrow", Type: "Combat", Content: [new ScareCrow()] }
    return encounter;
}
//humanoids
export function banditEncounter() {
    var encounter = { Name: "Bandits", Type: "Combat", Content: [new Bandit(), new Bandit()] }
    return encounter;
}
export function banditAndBanditArcherEncounter() {
    var encounter = { Name: "Bandits", Type: "Combat", Content: [new Bandit(), new BanditArcher()] }
    return encounter;
}
export function banditAndBanditBersekerEncounter() {
    var encounter = { Name: "Bandits", Type: "Combat", Content: [new Bandit(), new BanditBerserker()] }
    return encounter;
}
export function banditArcherEncounter() {
    var encounter = { Name: "Bandit Archers", Type: "Combat", Content: [new BanditArcher(), new BanditArcher()] }
    return encounter;
}
export function banditArcherAndBanditBersekerEncounter() {
    var encounter = { Name: "Bandits", Type: "Combat", Content: [new BanditArcher(), new BanditBerserker()] }
    return encounter;
}
export function banditBerserkerEncounter() {
    var encounter = { Name: "Bandit Berserkers", Type: "Combat", Content: [new BanditBerserker(), new BanditBerserker()] }
    return encounter;
}
export function banditTrioEncounter() {
    var encounter = { Name: "Bandit Trio", Type: "Combat", Content: [new Bandit(), new BanditArcher(), new BanditBerserker()] }
    return encounter;
}
export function giantEncounter() {
    var encounter = { Name: "Scarecrow", Type: "Combat", Content: [new Giant()] }
    return encounter;
}
//gnolls
export function gnollEncounter(){
    var encounter = { Name: "Gnolls", Type: "Combat", Content: [new Gnoll(), new Gnoll(), new Gnoll()] }
    return encounter;
}
export function gnollShamanEncounter(){
    var encounter = { Name: "Gnoll Shaman", Type: "Combat", Content: [new GnollShaman(), new Hyena(), new Hyena()] }
    return encounter;
}
export function gnollLeaderEncounter(){
    var encounter = { Name: "Gnoll Leader", Type: "Combat", Content: [new GnollLeader(), new Gnoll(), new Hyena()] }
    return encounter;
}
//goblins
export function bossGoblinEncounter() {
    var bossGoblinEncounter = { Name: "Boss Goblin", Type: "Combat", Content: [new GoblinBoss(), new Goblin(), new Goblin(), new Goblin()] }
    return bossGoblinEncounter;
}
export function goblinEncounter() {
    var goblinEncounter = { Name: "Goblins", Type: "Combat", Content: [new Goblin(), new Goblin(), new Goblin()] }
    return goblinEncounter
}
export function goblinWithWorgEncounter() {
    var goblinWithWorgEncounter = { Name: "Goblin and Worg", Type: "Combat", Content: [new Goblin(), new Worg()] }
    return goblinWithWorgEncounter
}
//undead
export function skeletonEncounter() {
    var encounter = { Name: "Fight Encounter", Type: "Combat", Content: [new Skeleton(), new Skeleton(), new Skeleton()] }
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