import { CheckForQuest } from "../Scripts/QuestScripts"
import { Bandit, Bat, Bear, Chicken, Cow, Ghost, Giant, Gnoll, Goblin, ScareCrow, Skeleton, Spider, Wolf } from './CharactersDB'
import { daleTownRumors, littleRootFarmDialogue, lumbermillDialogue, tenguCampDialogue } from "./DialoguesDB"
import { BanditHideoutDungeon, GiantCaveDungeon, GiantCaveDungeonBeforeAndAfterQuest, GnollDenDungeon, GoblinMine, GoblinMineAfterQuest, SpiderCaveDungeon, SpiderCaveDungeonDuringQuest } from "./DungeonsDB"
import { DwarvenMineGoblinQuest, GiantQuest, ScareCrowQuest3 } from "./QuestsDB"
import { DaleChapelShop, DreamingWorkerInn, ForgeHeartSmithy, GeneralShop, InnShop, JoeTheTradersTradingPost, WitchHutShop, WizardTowerShop } from "./ShopsDB"
import { AlchemyNode, BlackFeatherNode, CookNode, EnchantNode, FarmNode, FireNode, FishNode, FletchNode, ForestHuntNode, HerbNode, HuntNode, MillNode, MineNode, SaltPeterNode, SheepNode, WaterNode, WellNode, WoodNode } from "./SkillNodesDB"

//locations
export function batCave(hero, x, y) {
    var cave = { LocationName: "Bat Cave", XCoord: x, YCoord: y, CanTravel: false, Color: "Red", SubLocations: [enterBatEncounter(hero), enterSaltPeterNode(hero)] }
    return cave;
}
export function bearCave(hero, x, y) {
    var cave = { LocationName: "Bear Cave", XCoord: x, YCoord: y, CanTravel: false, Color: "Red", SubLocations: [enterBearEncounter(hero)] }
    return cave;
}
export function lumbermill(hero, x, y) {
    var lumber = { LocationName: "Lumbermill", XCoord: x, YCoord: y, CanTravel: true, Color: "ForestGreen", SubLocations: [enterLumbermillDialogue(hero), enterWoodNode(hero)] }
    return lumber;
}
export function littleRootFarm(hero, x, y) {
    var farm = { LocationName: "Little Root Farm", XCoord: x, YCoord: y, CanTravel: true, Color: "GoldenRod", SubLocations: [enterChickenEncounter(hero), enterCowEncounter(hero), enterFarmNode(hero), enterLittleRootFarmDialogue(hero), enterScareCrowEncounter(hero)] }
    return farm;
}
export function tenguCamp(hero, x, y) {
    var camp = { LocationName: "Strange Camp", XCoord: x, YCoord: y, CanTravel: true, Color: "Purple", SubLocations: [enterBlackFeatherNode(hero), enterTenguCampDialogue(hero)] }
    return camp;
}
export function wolfDen(hero, x, y) {
    var cave = { LocationName: "Wolf Den", XCoord: x, YCoord: y, CanTravel: false, Color: "Red", SubLocations: [enterWolfEncounter(hero)] }
    return cave;
}
//dungeon
export function banditHideout(hero, x, y) {
    var bandit = { LocationName: "Bandit Hideout", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterBanditEncounter(hero), enterBanditHideout(hero)] }
    return bandit;
}
export function dwarvenMine(hero, x, y) {
    var dwarvenMine;
    var questIndex = CheckForQuest(hero, new DwarvenMineGoblinQuest(hero))
    if (CheckForQuest(hero, new DwarvenMineGoblinQuest(hero)) === null) {
        dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterMineNode(hero)] }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterDwarvenMine(hero), enterGoblinEncounter(hero), enterMineNode(hero)] }
    }
    else {
        dwarvenMine = { LocationName: "Dwarven Mine", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterDwarvenMine(hero), enterGoblinEncounter(hero), enterMineNode(hero)] }
    }
    return dwarvenMine;
}
export function fortDale(hero, x, y) {
    var fort = { LocationName: "Fort Dale", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [] }
    return fort;
}
export function giantCave(hero, x, y) {
    var giant;
    if (CheckForQuest(hero, new GiantQuest(hero)) === null) {
        giant = { LocationName: "Giant Cave", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterGiantCaveDungeonBeforeAndAfterQuest(hero), enterGiantEncounter(hero)] }
    }
    else if (hero.Journal[CheckForQuest(hero, new GiantQuest(hero))].Status === "Completed") {
        giant = { LocationName: "Giant Cave", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterGiantCaveDungeonBeforeAndAfterQuest(hero), enterGiantEncounter(hero)] }
    }
    else {
        giant = { LocationName: "Giant Cave", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterGiantCaveDungeon(hero), enterGiantEncounter(hero)] }
    }
    return giant;
}
export function gnollDen(hero, x, y) {
    var den = { LocationName: "Gnoll Den", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterGnolDenDungeon(hero), enterGnollEncounter(hero)] }
    return den;
}
export function hauntedManor(hero, x, y) {
    var manor = { LocationName: "Haunted Manor", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterGhostEncounter(hero)] }
    return manor;
}
export function spiderCave(hero, x, y) {
    var spider;
    var questIndex = CheckForQuest(hero, new ScareCrowQuest3(hero))
    if (questIndex === null) {
        spider = { LocationName: "Spider Cave", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterSpiderCaveDungeon(hero), enterSpiderEncounter(hero)] }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        spider = { LocationName: "Spider Cave", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterSpiderCaveDungeon(hero), enterSpiderEncounter(hero)] }
    }
    else {
        spider = { LocationName: "Spider Cave", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [enterSpiderCaveDungeonDuringQuest(hero), enterSpiderEncounter(hero)] }
    }
    return spider;
}
//shop
export function witchHut(hero, x, y) {
    var witchHut = { LocationName: "Witch's Hut", XCoord: x, YCoord: y, CanTravel: true, Color: "Purple", SubLocations: [enterWitchHut(hero)] }
    return witchHut;
}
//towns
export function daleWizardTower(hero, x, y) {
    var tower = { LocationName: "Dale Town", XCoord: x, YCoord: y, CanTravel: true, Color: "Purple", SubLocations: [enterWizardTowerMagicShop(hero)] }
    return tower;
}
export function daleTown(hero, x, y) {
    var daleTown = { LocationName: "Dale Town", XCoord: x, YCoord: y, CanTravel: true, Color: "Purple", SubLocations: [enterDaleTownRumors(hero), enterDaleChapelShop(hero), enterDreamingWorkerInn(hero), enterForgeHeartSmithy(hero), enterTradingPost(hero), enterWellNode(hero)] }
    return daleTown;
}
export function orcVillage(hero, x, y) {
    var orc = { LocationName: "Orc Village", XCoord: x, YCoord: y, CanTravel: true, Color: "Red", SubLocations: [] }
    return orc;
}
export function whiteScalesLair(hero, x, y) {
    var lair = { LocationName: "Whitescale's Lair", XCoord: x, YCoord: y, CanTravel: true, Color: "Purple", SubLocations: [enterSheepNode(hero)] }
    return lair;
}
//reusable locations
export function OutOfBounds(hero, x, y) {
    var oob = { LocationName: "OOB", XCoord: x, YCoord: y, CanTravel: false, Color: "Orange", SubLocations: [enterFishNode(hero)] }
    return oob;
}
export function bridge(hero, x, y) {
    var river = { LocationName: "Bridge", XCoord: x, YCoord: y, CanTravel: false, Color: "Black", SubLocations: [enterFishNode(hero)] }
    return river;
}
export function brokenBridge(hero, x, y) {
    var river = { LocationName: "Broken Bridge", XCoord: x, YCoord: y, CanTravel: false, Color: "Black", SubLocations: [enterFishNode(hero)] }
    return river;
}
export function farm(hero, x, y) {
    var farm = { LocationName: "Farm", XCoord: x, YCoord: y, CanTravel: false, Color: "GoldenRod", SubLocations: [enterChickenEncounter(hero), enterCowEncounter(hero), enterFarmNode(hero)] }
    return farm;
}
export function forest(hero, x, y) {
    var forest = { LocationName: "Forest", XCoord: x, YCoord: y, CanTravel: false, Color: "ForestGreen", SubLocations: [enterCookNodeCampFire(hero), enterHerbNode(hero), enterHuntForestNode(hero), enterWoodNode(hero)] }
    return forest;
}
export function graveyard(hero, x, y) {
    var grave = { LocationName: "Graveyard", XCoord: x, YCoord: y, CanTravel: false, Color: "Red", SubLocations: [enterSkeletonEncounter(hero)] }
    return grave;
}
export function lake(hero, x, y) {
    var lake = { LocationName: "Lake", XCoord: x, YCoord: y, CanTravel: false, Color: "Blue", SubLocations: [enterFishNode(hero), enterWaterNode(hero)] }
    return lake;
}
export function mill(hero, x, y) {
    var mill = { LocationName: "Mill", XCoord: x, YCoord: y, CanTravel: false, Color: "GoldenRod", SubLocations: [enterMillNode(hero)] }
    return mill;
}
export function mountains(hero, x, y) {
    var mountains = { LocationName: "Mountains", XCoord: x, YCoord: y, CanTravel: false, Color: "Gray", SubLocations: [] }
    return mountains;
}
export function river(hero, x, y) {
    var river = { LocationName: "River", XCoord: x, YCoord: y, CanTravel: false, Color: "LightBlue", SubLocations: [enterFishNode(hero), enterWaterNode(hero)] }
    return river;
}
export function road(hero, x, y) {
    var road = { LocationName: "Road", XCoord: x, YCoord: y, CanTravel: false, Color: "Black", SubLocations: [] }
    return road;
}
//sublocations
//enter dungeons
export function enterBanditHideout(hero) {
    var enter = { Name: "Bandit Hideout (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new BanditHideoutDungeon(hero), shop: null, skill: null }; return content } }
    return enter;
}
export function enterDwarvenMine(hero) {
    var enterDwarvenMine = { Name: "Dwarven Mine (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GoblinMine(hero), shop: null, skill: null }; return content } }
    return enterDwarvenMine
}
export function enterDwarvenMineAfterQuest(hero) {
    var enterDwarvenMine = { Name: "Dwarven Mine (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GoblinMineAfterQuest(hero), shop: null, skill: null }; return content } }
    return enterDwarvenMine
}
export function enterGiantCaveDungeon(hero) {
    var enter = { Name: "Giant Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GiantCaveDungeon(hero), shop: null, skill: null }; return content } }
    return enter;
}
export function enterGiantCaveDungeonBeforeAndAfterQuest(hero) {
    var enter = { Name: "Giant Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GiantCaveDungeonBeforeAndAfterQuest(hero), shop: null, skill: null }; return content } }
    return enter;
}
export function enterGnolDenDungeon(hero) {
    var enter = { Name: "Gnoll Den (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GnollDenDungeon(hero), shop: null, skill: null }; return content } }
    return enter;
}
export function enterSpiderCaveDungeon(hero) {
    var enter = { Name: "Spider Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new SpiderCaveDungeon(hero), shop: null, skill: null }; return content } }
    return enter;
}
export function enterSpiderCaveDungeonDuringQuest(hero) {
    var enter = { Name: "Spider Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new SpiderCaveDungeonDuringQuest(hero), shop: null, skill: null }; return content } }
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
export function enterTenguCampDialogue(hero) {
    var enter = { Name: "Inspect Camp", enterLocation(hero) { var content = { active: "Dialogue", combat: null, dialogue: tenguCampDialogue(hero), dungeon: null, shop: null, skill: null }; return content } }
    return enter
}
//enter encounters
export function enterBatEncounter(hero) {
    var encounter = { Name: "Kill Bats", enterLocation(hero) { var content = { active: "Combat", combat: [new Bat(), new Bat(), new Bat()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterBanditEncounter(hero) {
    var encounter = { Name: "Kill Bandits", enterLocation(hero) { var content = { active: "Combat", combat: [new Bandit(), new Bandit(), new Bandit()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterBearEncounter(hero) {
    var encounter = { Name: "Kill Bear", enterLocation(hero) { var content = { active: "Combat", combat: [new Bear()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterChickenEncounter(hero) {
    var encounter = { Name: "Kill Chickens", enterLocation(hero) { var content = { active: "Combat", combat: [new Chicken(), new Chicken(), new Chicken()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter
}
export function enterCowEncounter(hero) {
    var enterCowEncounter = { Name: "Kill Cows", enterLocation(hero) { var content = { active: "Combat", combat: [new Cow()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return enterCowEncounter
}
export function enterGhostEncounter(hero) {
    var encounter = { Name: "Kill Ghosts", enterLocation(hero) { var content = { active: "Combat", combat: [new Ghost()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterGiantEncounter(hero) {
    var encounter = { Name: "Kill Giants", enterLocation(hero) { var content = { active: "Combat", combat: [new Giant()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterGnollEncounter(hero) {
    var encounter = { Name: "Kill Gnolls", enterLocation(hero) { var content = { active: "Combat", combat: [new Gnoll(), new Gnoll(), new Gnoll()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterGoblinEncounter(hero) {
    var encounter = { Name: "Kill Goblins", enterLocation(hero) { var content = { active: "Combat", combat: [new Goblin(), new Goblin(), new Goblin()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterScareCrowEncounter(hero) {
    var encounter = { Name: "Kill Scarecrows", enterLocation(hero) { var content = { active: "Combat", combat: [new ScareCrow()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterSkeletonEncounter(hero) {
    var encounter = { Name: "Kill Skeletons", enterLocation(hero) { var content = { active: "Combat", combat: [new Skeleton(), new Skeleton(), new Skeleton()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterSpiderEncounter(hero) {
    var encounter = { Name: "Kill Spiders", enterLocation(hero) { var content = { active: "Combat", combat: [new Spider(), new Spider(), new Spider()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
export function enterWolfEncounter(hero) {
    var encounter = { Name: "Kill Wolves", enterLocation(hero) { var content = { active: "Combat", combat: [new Wolf(), new Wolf(), new Wolf()], dialogue: null, dungeon: null, shop: null, skill: null }; return content } }
    return encounter;
}
//enter shops
//alchemist
export function enterWitchHut(hero) {
    var shop = { Name: "Witch's Hut", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: new WitchHutShop(hero), skill: null }; return content } }
    return shop;
}
//general store
export function enterGeneralStore(hero) {
    var generalStore = { Name: "General Store", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: new GeneralShop(hero), skill: null }; return content } }
    return generalStore
}
export function enterTradingPost(hero) {
    var generalStore = { Name: "Joe the Trader's", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: new JoeTheTradersTradingPost(hero), skill: null }; return content } }
    return generalStore
}
//inns
export function enterDreamingWorkerInn(hero) {
    var inn = { Name: "Dreaming Worker Inn", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: new DreamingWorkerInn(hero), skill: null }; return content } }
    return inn
}
export function enterInn(hero) {
    var inn = { Name: "Inn", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: new InnShop(hero), skill: null }; return content } }
    return inn
}
//magic
export function enterDaleChapelShop(hero) {
    var shop = { Name: "Dale Chapel", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: new DaleChapelShop(hero), skill: null }; return content } }
    return shop
}
export function enterWizardTowerMagicShop(hero) {
    var shop = { Name: "Wizard Tower Shop", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: new WizardTowerShop(shop), skill: null }; return content } }
    return shop
}
//smiths
export function enterForgeHeartSmithy(hero) {
    var forge = { Name: "Forgeheart Smithy", enterLocation(hero) { var content = { active: "Shop", combat: null, dialogue: null, dungeon: null, shop: new ForgeHeartSmithy(hero), skill: null }; return content } }
    return forge
}
//enter skillnode
export function enterAlchemyNode(hero) {
    var alchemy = { Name: "Alchemy Station", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new AlchemyNode(hero) }; return content } }
    return alchemy
}
export function enterEnchantNode(hero) {
    var enchant = { Name: "Enchanter", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new EnchantNode(hero) }; return content } }
    return enchant
}
//cooking
export function enterCookNode(hero) {
    var cook = { Name: "Stove", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new CookNode(hero) }; return content } }
    return cook
}
export function enterCookNodeCampFire(hero) {
    var cook = { Name: "Camp Fire (Cook)", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new CookNode(hero) }; return content } }
    return cook
}
export function enterMillNode(hero) {
    var cook = { Name: "Mill", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new MillNode(hero) }; return content } }
    return cook
}
export function enterWaterNode(hero) {
    var cook = { Name: "Water Source", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new WaterNode(hero) }; return content } }
    return cook
}
export function enterWellNode(hero) {
    var cook = { Name: "Well (Draw Water)", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new WellNode(hero) }; return content } }
    return cook
}
//farming
export function enterFarmNode(hero) {
    var farm = { Name: "Farm (Skill)", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new FarmNode(hero) }; return content } }
    return farm
}
export function enterSheepNode(hero) {
    var farm = { Name: "Flock of Sheep", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new SheepNode(hero) }; return content } }
    return farm
}
export function enterFireNode(hero) {
    var fire = { Name: "Fire Pit", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new FireNode(hero) }; return content } }
    return fire
}
export function enterFishNode(hero) {
    var fish = { Name: "Fishing Spot", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new FishNode(hero) }; return content } }
    return fish
}
export function enterFletchNode(hero) {
    var fletch = { Name: "Fletcher", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new FletchNode(hero) }; return content } }
    return fletch
}
export function enterHerbNode(hero) {
    var herb = { Name: "Gather Herbs", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new HerbNode(hero) }; return content } }
    return herb;
}
//hunting
export function enterBlackFeatherNode(hero) {
    var hunt = { Name: "Scattered Black Feathers", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new BlackFeatherNode(hero) }; return content } }
    return hunt;
}
export function enterHuntNode(hero) {
    var hunt = { Name: "Hunting Ground", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new HuntNode(hero) }; return content } }
    return hunt;
}
export function enterHuntForestNode(hero) {
    var hunt = { Name: "Hunting Ground", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new ForestHuntNode(hero) }; return content } }
    return hunt;
}
//mining
export function enterMineNode(hero) {
    var mine = { Name: "Mine (skill)", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new MineNode(hero) }; return content } }
    return mine
}
export function enterSaltPeterNode(hero) {
    var mine = { Name: "Mine Saltpeter", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new SaltPeterNode(hero) }; return content } }
    return mine
}
export function enterWoodNode(hero) {
    var wood = { Name: "Trees", enterLocation(hero) { var content = { active: "Skill", combat: null, dialogue: null, dungeon: null, shop: null, skill: new WoodNode(hero) }; return content } }
    return wood
}