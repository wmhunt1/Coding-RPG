import { testDialogue } from "./DialoguesDB"
import { goblinMine} from "./DungeonsDB"
import { cowEncounter, testEncounter } from "./EncountersDB"
import { dreamingWorkerInn, forgeHeartSmithy, generalShop, innShop, testShop, witchHutShop } from "./ShopsDB"
import { alchemyNode, cookNode, farmNode, fireNode, fishNode, fletchNode, huntNode, mineNode, woodNode } from "./SkillNodesDB"

//locations
//mine
export function dwarvenMine(hero, x, y) {
    var dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterDwarvenMine(hero), enterMineNode(hero)] }
    return dwarvenMine;
}
//shop
export function witchHut(hero, x, y) {
    var witchHut = { LocationName: "Witch's Hut", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterWitchHut(hero)] }
    return witchHut;
}
//towns
export function daleTown(hero) {
    var daleTown = { LocationName: "Dale Town", XCoord: 0, YCoord: 0, CanTravel: true, SubLocations: [enterDreamingWorkerInn(hero), enterForgeHeartSmithy(hero), enterGeneralStore(hero)] }
    return daleTown;
}
//reusable locations
export function bridgeOverRiver(hero, x, y) {
    var river = { LocationName: "Bridge Over River", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterFishNode(hero)] }
    return river;
}
export function farm(hero, x, y) {
    var farm = { LocationName: "Farm", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterCowEncounter(hero), enterFarmNode(hero)] }
    return farm;
}
export function forest(hero, x, y) {
    var forest = { LocationName: "Forest", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterCookNodeCampFire(hero), enterHuntNode(hero), enterWoodNode(hero)] }
    return forest;
}
export function river(hero, x, y) {
    var river = { LocationName: "River", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterFishNode(hero)] }
    return river;
}
export function road(hero, x, y) {
    var road = { LocationName: "Road", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [] }
    return road;
}
//sublocations
//enter dungeons
export function enterDwarvenMine(hero) {
    var enterDwarvenMine = { Name: "Dwarven Mine (Goblins)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: goblinMine(hero), shop: null, skill: null }; return content } }
    return enterDwarvenMine
}
//enter encounters
export function enterCowEncounter(hero) {
    var enterCowEncounter = { Name: "Kill Cows", enterLocation(hero) { var content = { active: "Combat", combat: cowEncounter(hero), dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return enterCowEncounter
}
//enter shops
//general store
export function enterGeneralStore(hero) {
    var generalStore = { Name: "General Store", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: generalShop(hero), skill: null }; return content } }
    return generalStore
}
//inns
export function enterDreamingWorkerInn(hero) {
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
//hybrid
//alchemt and magic
export function enterWitchHut(hero) {
    var shop = { Name: "Witch's Hut", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: witchHutShop(hero), skill: null }; return content } }
    return shop;
}
//enter skillnode
export function enterAlchemyNode(hero) {
    var alchemy = { Name: "Alchemy Station", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: alchemyNode(hero) }; return content } }
    return alchemy
}
export function enterCookNode(hero) {
    var cook = { Name: "Stove", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: cookNode(hero) }; return content } }
    return cook
}
export function enterCookNodeCampFire(hero) {
    var cook = { Name: "Camp Fire (Cook)", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: cookNode(hero) }; return content } }
    return cook
}
export function enterFarmNode(hero) {
    var farm = { Name: "Farm", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: farmNode(hero) }; return content } }
    return farm
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
export function enterHuntNode(hero) {
    var hunt = { Name: "Hunting Ground", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: huntNode(hero) }; return content } }
    return hunt;
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
    var testLocation2 = { LocationName: "Location 2", XCoord: 1, YCoord: 0, SubLocations: [testCombatEnter(), testDialogueEnter(), testShopEnter()] }
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
export function testShopEnter() {
    var test = { Name: "TestShop", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: testShop(hero), skill: null }; return content } }
    return test
}
export function testSkillHub() {
    var test = { Name: "TestShop", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: testShop(hero), skill: null }; return content } }
    return test
}