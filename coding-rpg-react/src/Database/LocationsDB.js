import { CheckForQuest } from "../Scripts/QuestScripts"
import { daleTownRumors } from "./DialoguesDB"
import { giantCaveDungeon, goblinMine, goblinMineAfterQuest, spiderCaveDungeon } from "./DungeonsDB"
import { cowEncounter, giantEncounter, goblinEncounter, scareCrowEncounter, spiderEncounter } from "./EncountersDB"
import { dwarvenMineGoblinQuest } from "./QuestsDB"
import { dreamingWorkerInn, forgeHeartSmithy, generalShop, innShop, witchHutShop } from "./ShopsDB"
import { alchemyNode, cookNode, enchantNode, farmNode, fireNode, fishNode, fletchNode, herbNode, huntNode, mineNode, woodNode } from "./SkillNodesDB"

//locations
export function lumbermill(hero, x, y) {
    var lumber = { LocationName: "Lumbermill", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterWoodNode(hero)] }
    return lumber;
}
export function littleRootFarm(hero, x, y) {
    var farm = { LocationName: "Little Root Farm", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterCowEncounter(hero), enterFarmNode(hero), enterScareCrowEncounter(hero)] }
    return farm;
}
export function tenguCamp(hero, x, y) {
    var camp = { LocationName: "Strange Camp", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [] }
    return camp;
}
//dungeon
export function dwarvenMine(hero, x, y) {
    var dwarvenMine;
    var questIndex = CheckForQuest(hero.Journal, dwarvenMineGoblinQuest())
    if (CheckForQuest(hero.Journal, dwarvenMineGoblinQuest()) === null) {
        dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterMineNode(hero)] }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterDwarvenMine(hero), enterGoblinEncounter(), enterMineNode(hero)] }
    }
    else {
        dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterDwarvenMine(hero), enterGoblinEncounter(), enterMineNode(hero)] }
    }
    return dwarvenMine;
}
export function giantCave(hero, x, y) {
    var giant = { LocationName: "Giant Cave", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterGiantCaveDungeon(hero), enterGiantEncounter(hero)] }
    return giant;
}
export function spiderCave(hero, x, y) {
    var spider = { LocationName: "Spider Cave", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterSpiderCaveDungeon(hero), enterSpiderEncounter(hero)] }
    return spider;
}
//shop
export function witchHut(hero, x, y) {
    var witchHut = { LocationName: "Witch's Hut", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterWitchHut(hero)] }
    return witchHut;
}
//towns
export function daleTown(hero, x, y) {
    var daleTown = { LocationName: "Dale Town", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterDaleTownRumors(hero), enterDreamingWorkerInn(hero), enterForgeHeartSmithy(hero), enterGeneralStore(hero)] }
    return daleTown;
}
//reusable locations
export function bridgeOverRiver(hero, x, y) {
    var river = { LocationName: "Bridge", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterFishNode(hero)] }
    return river;
}
export function farm(hero, x, y) {
    var farm = { LocationName: "Farm", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterCowEncounter(hero), enterFarmNode(hero)] }
    return farm;
}
export function forest(hero, x, y) {
    var forest = { LocationName: "Forest", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterCookNodeCampFire(hero), enterHerbNode(hero), enterHuntNode(hero), enterWoodNode(hero)] }
    return forest;
}
export function lake(hero, x, y) {
    var lake = { LocationName: "Lake", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterFishNode(hero)] }
    return lake;
}
export function mountains(hero, x, y) {
    var mountains = { LocationName: "Mountains", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [] }
    return mountains;
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
    var enterDwarvenMine = { Name: "Dwarven Mine (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: goblinMine(hero), shop: null, skill: null }; return content } }
    return enterDwarvenMine
}
export function enterDwarvenMineAfterQuest(hero) {
    var enterDwarvenMine = { Name: "Dwarven Mine (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: goblinMineAfterQuest(hero), shop: null, skill: null }; return content } }
    return enterDwarvenMine
}
export function enterGiantCaveDungeon(hero) {
    var enter = { Name: "Giant Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: giantCaveDungeon(hero), shop: null, skill: null }; return content } }
    return enter;
}
export function enterSpiderCaveDungeon(hero) {
    var enter = { Name: "Spider Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: spiderCaveDungeon(hero), shop: null, skill: null }; return content } }
    return enter;
}
//enter dialogues
export function enterDaleTownRumors(hero) {
    var enterDaleTownRumors = { Name: "Listen to rumors", enterLocation(hero) { var content = { active: "Dialogue", combat: null, dialogue: daleTownRumors(hero), dungeon: null, shop: null, skill: null }; return content } }
    return enterDaleTownRumors
}
//enter encounters
export function enterCowEncounter(hero) {
    var enterCowEncounter = { Name: "Kill Cows", enterLocation(hero) { var content = { active: "Combat", combat: cowEncounter(), dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return enterCowEncounter
}
export function enterGiantEncounter(hero) {
    var encounter = { Name: "Kill Giants", enterLocation(hero) { var content = { active: "Combat", combat: giantEncounter(), dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterGoblinEncounter(hero) {
    var encounter = { Name: "Kill Goblins", enterLocation(hero) { var content = { active: "Combat", combat: goblinEncounter(), dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterScareCrowEncounter(hero) {
    var encounter = { Name: "Kill Scarecrows", enterLocation(hero) { var content = { active: "Combat", combat: scareCrowEncounter(), dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterSpiderEncounter(hero) {
    var encounter = { Name: "Kill Spiders", enterLocation(hero) { var content = { active: "Combat", combat: spiderEncounter(), dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
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
export function enterEnchantNode(hero) {
    var enchant = { Name: "Enchanter", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: enchantNode(hero) }; return content } }
    return enchant
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
export function enterHerbNode(hero) {
    var herb = { Name: "Gather Herbs", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: herbNode(hero) }; return content } }
    return herb;
}
export function enterHuntNode(hero) {
    var hunt = { Name: "Hunting Ground", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: huntNode(hero) }; return content } }
    return hunt;
}
export function enterMineNode(hero) {
    var mine = { Name: "Mine (skill)", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: mineNode(hero) }; return content } }
    return mine
}
export function enterWoodNode(hero) {
    var wood = { Name: "Trees", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: woodNode(hero) }; return content } }
    return wood
}