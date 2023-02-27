import { CheckForQuest } from "../Scripts/QuestScripts"
import { Bandit, Bat, Bear, Chicken, Cow, Ghost, Giant, Gnoll, Goblin, ScareCrow, Skeleton, Spider, Wolf } from './CharactersDB'
import { daleTownRumors, littleRootFarmDialogue, lumbermillDialogue, tenguCampDialogue } from "./DialoguesDB"
import { BanditHideoutDungeon, GiantCaveDungeon, GiantCaveDungeonBeforeAndAfterQuest, GnollDenDungeon, GoblinMine, GoblinMineAfterQuest, SpiderCaveDungeon, SpiderCaveDungeonDuringQuest } from "./DungeonsDB"
import { DwarvenMineGoblinQuest, GiantQuest, ScareCrowQuest3 } from "./QuestsDB"
import { DaleChapelShop, DreamingWorkerInn, ForgeHeartSmithy, GeneralShop, InnShop, JoeTheTradersTradingPost, WitchHutShop, WizardTowerShop } from "./ShopsDB"
import { AlchemyNode, BlackFeatherNode, CookNode, EnchantNode, FarmNode, FireNode, FishNode, FletchNode, ForestHuntNode, HerbNode, HuntNode, MillNode, MineNode, SaltPeterNode, SheepNode, WaterNode, WellNode, WoodNode } from "./SkillNodesDB"

//locations
export class Location {
    Hero; XCoord; YCoord; Name; CanTravel; Color; SubLocations;
    constructor(hero, x, y, name, subLoc) {
        this.Hero = hero; this.XCoord = x; this.YCoord = y; this.Name = name; this.SubLocations = subLoc; this.CanTravel = "False"
    }
}
export class OutOfBounds extends Location {
    constructor(hero, x, y, name = "Out Of Bounds", subLoc = []) {
        super(hero, x, y, name, subLoc)
        this.Color = "Orange"
    }
}
//dungeons
export class Dungeon extends Location {
    constructor(hero, x, y, name, subLoc) {
        super(hero, x, y, name, subLoc)
        this.Color = "Red"; this.CanTravel = true;
    }
}
export class BanditHideout extends Dungeon {
    constructor(hero, x, y, name = "Bandit Hideout", subLoc = [enterBanditEncounter(hero), enterBanditHideout(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class BatCave extends Dungeon {
    constructor(hero, x, y, name = "Bat Cave", subLoc = [enterBatEncounter(hero), enterSaltPeterNode(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class BearCave extends Dungeon {
    constructor(hero, x, y, name = "Bear Cave", subLoc = [enterBearEncounter(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class DwarvenMine extends Dungeon {
    constructor(hero, x, y, name = "Dwarven Mine", subLoc = [enterDwarvenMine(hero), enterGoblinEncounter(hero), enterMineNode(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class FortDale extends Dungeon {
    constructor(hero, x, y, name = "Fort Dale", subLoc = []) {
        super(hero, x, y, name, subLoc)
    }
}
export class GiantCave extends Dungeon {
    constructor(hero, x, y, name = "Giant Cave", subLoc = [enterGiantCaveDungeon(hero), enterGiantEncounter(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class GnollDen extends Dungeon {
    constructor(hero, x, y, name = "Gnoll Den", subLoc = [enterGnollDenDungeon(hero), enterGnollEncounter(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class Graveyard extends Dungeon {
    constructor(hero, x, y, name = "Graveyard", subLoc = [enterSkeletonEncounter(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class HauntedManor extends Dungeon {
    constructor(hero, x, y, name = "Haunted Manor", subLoc = [enterGhostEncounter(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class SpiderCave extends Dungeon {
    constructor(hero, x, y, name = "Spider Cave", subLoc = [enterSpiderCaveDungeon(hero), enterSpiderEncounter(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class WolfDen extends Dungeon {
    constructor(hero, x, y, name = "Wolf Den", subLoc = [enterWolfEncounter(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
//Settlements
export class Settlement extends Location {
    constructor(hero, x, y, name, subLoc) {
        super(hero, x, y, name, subLoc)
        this.Color = "Purple"; this.CanTravel = true;
    }
}
export class DaleLumbermill extends Settlement {
    constructor(hero, x, y, name = "Dale Lumbermill", subLoc = [enterLumbermillDialogue(hero), enterWoodNode(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class DaleTown extends Settlement {
    constructor(hero, x, y, name = "Dale Town", subLoc = [enterDaleTownRumors(hero), enterDaleChapelShop(hero), enterDreamingWorkerInn(hero), enterForgeHeartSmithy(hero), enterTradingPost(hero), enterWellNode(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class DaleWizardTower extends Settlement {
    constructor(hero, x, y, name = "Ambrosius's Tower", subLoc = [enterWizardTowerMagicShop(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class LittleRootFarm extends Settlement {
    constructor(hero, x, y, name = "Littleroot Farm", subLoc = [enterChickenEncounter(hero), enterCowEncounter(hero), enterFarmNode(hero), enterLittleRootFarmDialogue(hero), enterScareCrowEncounter(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class OrcVillage extends Settlement {
    constructor(hero, x, y, name = "Orc Village", subLoc = []) {
        super(hero, x, y, name, subLoc)
    }
}
export class TenguCamp extends Settlement {
    constructor(hero, x, y, name = "Strange Camp", subLoc = [enterBlackFeatherNode(hero), enterTenguCampDialogue(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class WhiteScalesLair extends Settlement {
    constructor(hero, x, y, name = "Whitescale's Lair", subLoc = [enterSheepNode(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
export class WitchHut extends Settlement {
    constructor(hero, x, y, name = "Witch's Hut", subLoc = [enterWitchHut(hero)]) {
        super(hero, x, y, name, subLoc)
    }
}
//Terrain
export class Terrain extends Location {
    constructor(hero, x, y, name, subLoc) {
        super(hero, x, y, name, subLoc)
        this.Color = "Black"
    }
}
export class Farm extends Terrain {
    constructor(hero, x, y, name = "Farm", subLoc = [enterChickenEncounter(hero), enterCowEncounter(hero), enterFarmNode(hero)]) {
        super(hero, x, y, name, subLoc)
        this.Color = "GoldenRod"
    }
}
export class Mill extends Farm
{
    constructor(hero, x, y, name = "Mill", subLoc = [enterMillNode(hero)]) {
        super(hero, x, y, name, subLoc)

    }
}
export class MountainTerrain extends Terrain {
    constructor(hero, x, y, name = "Mountains", subLoc = []) {
        super(hero, x, y, name, subLoc)
        this.Color = "Gray"
    }
}
export class ForestTerrain extends Terrain {
    constructor(hero, x, y, name = "Forest", subLoc = [enterCookNodeCampFire(hero), enterHerbNode(hero), enterHuntForestNode(hero), enterWoodNode(hero)]) {
        super(hero, x, y, name, subLoc)
        this.Color = "ForestGreen"
    }
}
export class RoadTerrain extends Terrain {
    constructor(hero, x, y, name = "Road", subLoc = []) {
        super(hero, x, y, name, subLoc)
    }
}
export class WaterTerrain extends Terrain {
    constructor(hero, x, y, name, subLoc = [enterFishNode(hero), enterWaterNode(hero)]) {
        super(hero, x, y, name, subLoc)
        this.Color = "Blue"
    }
}
export class Bridge extends WaterTerrain {
    constructor(hero, x, y, name = "Bridge", subLoc = [enterFishNode(hero), enterWaterNode(hero)]) {
        super(hero, x, y, name, subLoc)
        this.Color = "Black"
    }
}
export class LakeTerrain extends WaterTerrain {
    constructor(hero, x, y, name = "Lake", subLoc = [enterFishNode(hero), enterWaterNode(hero)]) {
        super(hero, x, y, name, subLoc)
        this.Color = "Blue"
    }
}
export class RiverTerrain extends WaterTerrain {
    constructor(hero, x, y, name = "River", subLoc = [enterFishNode(hero), enterWaterNode(hero)]) {
        super(hero, x, y, name, subLoc)
        this.Color = "LightBlue"
    }
}
//sublocations
//enter dungeons
export function enterBanditHideout(hero) {
    var enter = { Name: "Bandit Hideout (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new BanditHideoutDungeon(hero), shop: null, skill: null }; return content } }
    return enter;
}
export function enterDwarvenMine(hero) {
    var questIndex = CheckForQuest(hero, new DwarvenMineGoblinQuest(hero))
    var dwarvenMine;
    if (CheckForQuest(hero, new DwarvenMineGoblinQuest(hero)) === null) {
        dwarvenMine = { Name: "Dwarven Mine (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GoblinMineAfterQuest(hero), shop: null, skill: null }; return content } }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        dwarvenMine = { Name: "Dwarven Mine (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GoblinMineAfterQuest(hero), shop: null, skill: null }; return content } }
    }
    else {
        dwarvenMine = { Name: "Dwarven Mine (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GoblinMine(hero), shop: null, skill: null }; return content } }
    }
    return dwarvenMine;
}
export function enterGiantCaveDungeon(hero) {
    var giant;
    if (CheckForQuest(hero, new GiantQuest(hero)) === null) {
        giant = { Name: "Giant Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GiantCaveDungeonBeforeAndAfterQuest(hero), shop: null, skill: null }; return content } }
    }
    else if (hero.Journal[CheckForQuest(hero, new GiantQuest(hero))].Status === "Completed") {
        giant = { Name: "Giant Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GiantCaveDungeon(hero), shop: null, skill: null }; return content } }
    }
    else {
        giant = { Name: "Giant Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GiantCaveDungeonBeforeAndAfterQuest(hero), shop: null, skill: null }; return content } }
    }
    return giant;
}
export function enterGnollDenDungeon(hero) {
    var enter = { Name: "Gnoll Den (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new GnollDenDungeon(hero), shop: null, skill: null }; return content } }
    return enter;
}
export function enterSpiderCaveDungeon(hero) {
    var questIndex = CheckForQuest(hero, new ScareCrowQuest3(hero))
    var enter;
    if (questIndex === null) {
        enter = { Name: "Spider Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new SpiderCaveDungeon(hero), shop: null, skill: null }; return content } }
    }
    else if (hero.Journal[questIndex].ObjectiveProgress >= hero.Journal[questIndex].Objective && hero.Journal[questIndex].Status === "Completed") {
        enter = { Name: "Spider Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new SpiderCaveDungeon(hero), shop: null, skill: null }; return content } }
    }
    else {
        enter = { Name: "Spider Cave (Dungeon)", enterLocation(hero) { var content = { active: "Dungeon", combat: null, dialogue: null, dungeon: new SpiderCaveDungeonDuringQuest(hero), shop: null, skill: null }; return content } }
    }
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