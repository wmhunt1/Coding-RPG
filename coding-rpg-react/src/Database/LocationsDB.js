import { CheckForQuest } from "../Scripts/QuestScripts"
import { bandit, bear, cow, giant, goblin, scareCrow, skeleton, spider, wolf } from './CharactersDB'
import { daleTownRumors, littleRootFarmDialogue, lumbermillDialogue, priestDialogue, tenguCampDialogue } from "./DialoguesDB"
import { banditHideoutDungeon, giantCaveDungeon, giantCaveDungeonBeforeAndAfterQuest, goblinMine, goblinMineAfterQuest, spiderCaveDungeon } from "./DungeonsDB"
import { dwarvenMineGoblinQuest, giantQuest } from "./QuestsDB"
import { dreamingWorkerInn, forgeHeartSmithy, generalShop, innShop, joeTheTradersTradingPost, witchHutShop } from "./ShopsDB"
import { alchemyNode, blackFeatherNode, cookNode, enchantNode, farmNode, fireNode, fishNode, fletchNode, herbNode, huntNode, millNode, mineNode, sheepNode, waterNode, wellNode, woodNode } from "./SkillNodesDB"

//locations
export function bearCave(hero, x, y) {
    var cave = { LocationName: "Bear Cave", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterBearEncounter(hero)] }
    return cave;
}
export function lumbermill(hero, x, y) {
    var lumber = { LocationName: "Lumbermill", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterLumbermillDialogue(hero), enterWoodNode(hero)] }
    return lumber;
}
export function littleRootFarm(hero, x, y) {
    var farm = { LocationName: "Little Root Farm", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterCowEncounter(hero), enterFarmNode(hero), enterLittleRootFarmDialogue(hero), enterScareCrowEncounter(hero)] }
    return farm;
}
export function tenguCamp(hero, x, y) {
    var camp = { LocationName: "Strange Camp", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterBlackFeatherNode(hero), enterTenguCampDialogue(hero)] }
    return camp;
}
export function wolfDen(hero, x, y)
{
    var cave = { LocationName: "Wolf Den", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterWolfEncounter(hero)] }
    return cave;
}
//dungeon
export function banditHideout(hero, x, y) {
    var bandit = { LocationName: "Bandit Hideout", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterBanditEncounter(hero), enterBanditHideout(hero)] }
    return bandit;
}
export function dwarvenMine(hero, x, y) {
    var dwarvenMine;
    var questIndex = CheckForQuest(hero, dwarvenMineGoblinQuest())
    if (CheckForQuest(hero, dwarvenMineGoblinQuest()) === null) {
        dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterMineNode(hero)] }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterDwarvenMine(hero), enterGoblinEncounter(hero), enterMineNode(hero)] }
    }
    else {
        dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterDwarvenMine(hero), enterGoblinEncounter(hero), enterMineNode(hero)] }
    }
    return dwarvenMine;
}
export function fortDale(hero, x, y) {
    var fort = { LocationName: "Fort Dale", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [] }
    return fort;
}
export function giantCave(hero, x, y) {
    var giant;
    if (CheckForQuest(hero, giantQuest()) === null) {
        giant = { LocationName: "Giant Cave", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterGiantCaveDungeonBeforeAndAfterQuest(hero), enterGiantEncounter(hero)] }
    }
    else if (hero.Journal[CheckForQuest(hero, giantQuest())].Status === "Completed") {
        giant = { LocationName: "Giant Cave", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterGiantCaveDungeonBeforeAndAfterQuest(hero), enterGiantEncounter(hero)] }
    }
    else {
        giant = { LocationName: "Giant Cave", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterGiantCaveDungeon(hero), enterGiantEncounter(hero)] }
    }
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
    var daleTown = { LocationName: "Dale Town", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterDaleTownRumors(hero), enterDreamingWorkerInn(hero), enterForgeHeartSmithy(hero), enterPriestDialogue(hero), enterTradingPost(hero), enterWellNode(hero)] }
    return daleTown;
}
export function orcVillage(hero, x, y) {
    var orc = { LocationName: "Orc Village", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [] }
    return orc;
}
export function whiteScalesLair(hero, x, y) {
    var lair = { LocationName: "Whitescale's Lair", XCoord: x, YCoord: y, CanTravel: true, SubLocations: [enterSheepNode(hero)] }
    return lair;
}
//reusable locations
export function bridge(hero, x, y) {
    var river = { LocationName: "Bridge", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterFishNode(hero)] }
    return river;
}
export function brokenBridge(hero, x, y) {
    var river = { LocationName: "Broken Bridge", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterFishNode(hero)] }
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
export function graveyard(hero, x, y) {
    var grave = { LocationName: "Graveyard", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterSkeletonEncounter(hero)] }
    return grave;
}
export function lake(hero, x, y) {
    var lake = { LocationName: "Lake", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterFishNode(hero), enterWaterNode(hero)] }
    return lake;
}
export function mill(hero, x, y) {
    var mill = { LocationName: "Mill", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterMillNode(hero)] }
    return mill;
}
export function mountains(hero, x, y) {
    var mountains = { LocationName: "Mountains", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [] }
    return mountains;
}
export function river(hero, x, y) {
    var river = { LocationName: "River", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [enterFishNode(hero), enterWaterNode(hero)] }
    return river;
}
export function road(hero, x, y) {
    var road = { LocationName: "Road", XCoord: x, YCoord: y, CanTravel: false, SubLocations: [] }
    return road;
}
//sublocations
//enter dungeons
export function enterBanditHideout(hero) {
    var enter = { Name: "Bandit Hideout (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: banditHideoutDungeon(hero), shop: null, skill: null }; return content } }
    return enter;
}
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
export function enterGiantCaveDungeonBeforeAndAfterQuest(hero) {
    var enter = { Name: "Giant Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: giantCaveDungeonBeforeAndAfterQuest(hero), shop: null, skill: null }; return content } }
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
export function enterLittleRootFarmDialogue(hero) {
    var enter = { Name: "Speak with Farmer Littleroot", enterLocation(hero) { var content = { active: "Dialogue", combat: null, dialogue: littleRootFarmDialogue(hero), dungeon: null, shop: null, skill: null }; return content } }
    return enter
}
export function enterLumbermillDialogue(hero) {
    var enter = { Name: "Speak with woodcutters", enterLocation(hero) { var content = { active: "Dialogue", combat: null, dialogue: lumbermillDialogue(hero), dungeon: null, shop: null, skill: null }; return content } }
    return enter
}
export function enterPriestDialogue(hero) {
    var enter = { Name: "Talk to Priest", enterLocation(hero) { var content = { active: "Dialogue", combat: null, dialogue: priestDialogue(hero), dungeon: null, shop: null, skill: null }; return content } }
    return enter
}
export function enterTenguCampDialogue(hero) {
    var enter = { Name: "Inspect Camp", enterLocation(hero) { var content = { active: "Dialogue", combat: null, dialogue: tenguCampDialogue(hero), dungeon: null, shop: null, skill: null }; return content } }
    return enter
}
//enter encounters
export function enterBanditEncounter(hero) {
    var encounter = { Name: "Kill Bandits", enterLocation(hero) { var content = { active: "Combat", combat: [bandit(), bandit(), bandit()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterBearEncounter(hero) {
    var encounter = { Name: "Kill Bear", enterLocation(hero) { var content = { active: "Combat", combat: [bear()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterCowEncounter(hero) {
    var enterCowEncounter = { Name: "Kill Cows", enterLocation(hero) { var content = { active: "Combat", combat: [cow()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return enterCowEncounter
}
export function enterGiantEncounter(hero) {
    var encounter = { Name: "Kill Giants", enterLocation(hero) { var content = { active: "Combat", combat: [giant()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterGoblinEncounter(hero) {
    var encounter = { Name: "Kill Goblins", enterLocation(hero) { var content = { active: "Combat", combat: [goblin(), goblin(), goblin()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterScareCrowEncounter(hero) {
    var encounter = { Name: "Kill Scarecrows", enterLocation(hero) { var content = { active: "Combat", combat: [scareCrow()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterSkeletonEncounter(hero) {
    var encounter = { Name: "Kill Skeletons", enterLocation(hero) { var content = { active: "Combat", combat: [skeleton(), skeleton(), skeleton()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterSpiderEncounter(hero) {
    var encounter = { Name: "Kill Spiders", enterLocation(hero) { var content = { active: "Combat", combat: [spider(), spider(), spider()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterWolfEncounter(hero) {
    var encounter = { Name: "Kill Wolves", enterLocation(hero) { var content = { active: "Combat", combat: [wolf(), wolf(), wolf()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
//enter shops
//general store
export function enterGeneralStore(hero) {
    var generalStore = { Name: "General Store", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: generalShop(hero), skill: null }; return content } }
    return generalStore
}
export function enterTradingPost(hero) {
    var generalStore = { Name: "Joe the Trader's Trading Post", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: joeTheTradersTradingPost(hero), skill: null }; return content } }
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
//cooking
export function enterCookNode(hero) {
    var cook = { Name: "Stove", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: cookNode(hero) }; return content } }
    return cook
}
export function enterCookNodeCampFire(hero) {
    var cook = { Name: "Camp Fire (Cook)", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: cookNode(hero) }; return content } }
    return cook
}
export function enterMillNode(hero) {
    var cook = { Name: "Mill", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: millNode(hero) }; return content } }
    return cook
}
export function enterWaterNode(hero) {
    var cook = { Name: "Water Source", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: waterNode(hero) }; return content } }
    return cook
}
export function enterWellNode(hero) {
    var cook = { Name: "Well", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: wellNode(hero) }; return content } }
    return cook
}
//farming
export function enterFarmNode(hero) {
    var farm = { Name: "Farm", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: farmNode(hero) }; return content } }
    return farm
}
export function enterSheepNode(hero) {
    var farm = { Name: "Flock of Sheep", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: sheepNode(hero) }; return content } }
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
//hunting
export function enterBlackFeatherNode(hero) {
    var hunt = { Name: "Scattered Black Feathers", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: blackFeatherNode(hero) }; return content } }
    return hunt;
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