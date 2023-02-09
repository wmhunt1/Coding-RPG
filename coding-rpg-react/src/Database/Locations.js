import { testDialogue } from "./Dialogues"
import { testDungeon2 } from "./Dungeons"
import { testEncounter } from "./Encounters"
import { dreamingWorkerInn, forgeHeartSmithy, innShop, testShop } from "./Shops"
import { cookNode, fireNode, fishNode, fletchNode, mineNode, woodNode } from "./SkillNodes"


//locations
export function daleTown(hero) {
    var daleTown = { LocationName: "Dale Town", XCoord: 0, YCoord: 0, SubLocations: [enterDreamingWorkerInn(hero), enterForgeHeartSmithy(hero)] }
    return daleTown;
}
//sublocations
//enter shops
//inns
export function enterDreamingWorkerInn(hero)
{
    var inn = { Name: "Dreaming Worker Inn", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: dreamingWorkerInn(hero), skill: null }; return content } }
    return inn
}
export function enterInn(hero) {
    var inn = { Name: "Inn", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: innShop(hero), skill: null }; return content } }
    return inn
}
//smiths
export function enterForgeHeartSmithy(hero) {
    var forge = { Name: "Forgeheart Smithy", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: forgeHeartSmithy(hero), skill: null }; return content } }
    return forge
}
//enter skillnode
export function enterCookNode(hero) {
    var cook = { Name: "Stove", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: cookNode(hero) }; return content } }
    return cook
}
export function enterFireNode(hero) {
    var fire = { Name: "Fire Pit", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: fireNode(hero) }; return content } }
    return fire
}
export function enterFishNode(hero) {
    var fish = { Name: "Fishing Spot", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: fishNode(hero) }; return content } }
    return fish
}
export function enterFletchNode(hero) {
    var fletch = { Name: "Fletcher", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: fletchNode(hero) }; return content } }
    return fletch
}
export function enterMineNode(hero) {
    var mine = { Name: "Mine", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: mineNode(hero) }; return content } }
    return mine
}
export function enterWoodNode(hero) {
    var wood = { Name: "Trees", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: woodNode(hero) }; return content } }
    return wood
}
//test locations
export function startingLocation(hero) {
    var startingLocation = { LocationName: "Starting Location", XCoord: 0, YCoord: 0, SubLocations: [] }
    return startingLocation
}
export function testLocation2(hero) {
    var testLocation2 = { LocationName: "Location 2", XCoord: 1, YCoord: 0, SubLocations: [testCombatEnter(), testDialogueEnter(), testDungeonEnter(hero), testShopEnter()] }
    return testLocation2
}
//test sublocations
export function testCombatEnter() {
    var test = { Name: "TestCombat", enterLocation(hero) { var content = { active: "Combat", combat: testEncounter(), dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return test
}
export function testDialogueEnter() {
    var test = { Name: "TestDialogue", enterLocation(hero) { var content = { active: "Dialogue", combat: null, dialogue: testDialogue(hero), dungeon: null, shop: null, skill: null }; return content } }
    return test
}
export function testDungeonEnter(hero) {
    var test = { Name: "TestDungeon", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: testDungeon2(hero), shop: null, skill: null }; return content } }
    return test
}
export function testShopEnter() {
    var test = { Name: "TestShop", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: testShop(hero), skill: null }; return content } }
    return test
}
export function testSkillHub() {
    var test = { Name: "TestShop", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: testShop(hero), skill: null }; return content } }
    return test
}