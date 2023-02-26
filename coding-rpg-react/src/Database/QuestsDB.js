import { GiantRat, ScareCrow, Skeleton } from "./CharactersDB"
import { BanditHideoutDungeon, GiantCaveDungeon, GnollDenDungeon, GoblinMine, PuzzleCubeDungeon, SpiderCaveDungeon } from "./DungeonsDB"
import { BasicHealScroll, BlackFeather, SilverRingLR, SkillLamp, Wheat } from "./ItemsDB"
import { BarterSkill, FarmingSkill, SmithingSkill, WoodcuttingSkill } from "./SkillsDB";

export class Quest {
    Hero; Name; Status = "In Progress"; Type; Description; Target; Objective; ObjectiveProgress = 0; Gold; Item;
    constructor(hero, name, desc, target, obj, gold, item) {
        this.Hero = hero; this.Name = name; this.Description = desc; this.Target = target; this.Objective = obj; this.Gold = gold; this.Item = item;
    }
}
export class DungeonQuest extends Quest {
    constructor(hero, name, desc, target, obj, gold, item) {
        super(hero, name, desc, target, obj, gold, item)
        this.Type = "Dungeon";
    }
}
export class BanditQuest1 extends DungeonQuest {
    constructor(hero, name = "Stop the Bandits", desc = "Clear out the bandit hideout.", target = new BanditHideoutDungeon(hero), obj = 1, gold = 0, item = new SkillLamp("Barter Lamp", 500, new BarterSkill())) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class DwarvenMineGoblinQuest extends DungeonQuest {
    constructor(hero, name = "Goblin Slayer", desc = "Clear out the goblins in the Dwarven Mine to rescue the miners.", target = new GoblinMine(hero), obj = 1, gold = 0, item = new SkillLamp("Smithing Lamp", 500, new SmithingSkill())) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class GiantQuest extends DungeonQuest {
    constructor(hero, name = "Of Mice and Minotaurs", desc = "Save Foreman George from the Giant", target = new GiantCaveDungeon(hero), obj = 1, gold = 0, item = new SkillLamp("Woodcutting Lamp", 500, new WoodcuttingSkill())) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class GnollQuest1 extends DungeonQuest {
    constructor(hero, name = "Flock of GNolls", desc = "Clear out the Gnoll Den to protect Whitescale's Flock", target = new GnollDenDungeon(hero), obj = 1, gold = 0, item = null) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class ScareCrowQuest3 extends DungeonQuest {
    constructor(hero, name = "Scarecrow Part 3", desc = "Save the Crows from the Spider Cave", target = new SpiderCaveDungeon(hero), obj = 1, gold = 0, item = new SilverRingLR()) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class WizardTowerQuest1 extends DungeonQuest {
    constructor(hero, name = "The Archmage's Apprentice", desc = "Rescue Ambrosius' Apprentice from the Puzzle Cube", target = new PuzzleCubeDungeon(hero), obj = 1, gold = 0, item = null) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class HiddenQuest extends Quest {
    constructor(hero, name, desc, target, obj, gold, item) {
        super(hero, name, desc, target, obj, gold, item)
        this.Type = "Hidden";
    }
}
export class MetSweetheart extends HiddenQuest
{
    constructor(hero, name = "Met Sweetheart", desc = "Checks if Met Sweetheart", target=null, obj=0, gold=0, item=null) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class MetWitch extends HiddenQuest
{
    constructor(hero, name = "Met Witch", desc = "Checks if Met Witch", target=null, obj=0, gold=0, item=null) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class ScareCrowQuest4 extends HiddenQuest
{
    constructor(hero, name = "Scarecrow Quest 4", desc = "Return Ring", target=null, obj=0, gold=0, item=new SkillLamp("Farming Lamp", 500, new FarmingSkill())) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class KillQuest extends Quest {
    constructor(hero, name, desc, target, obj, gold, item) {
        super(hero, name, desc, target, obj, gold, item)
        this.Type = "Kill";
    }
}
export class RatCellarQuest extends KillQuest
{
    constructor(hero, name = "Rats in the Cellar", desc = "Kill Giant Rat in Cellar", target = new GiantRat(), obj=1, gold=0, item=null) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class ScareCrowQuest1 extends KillQuest
{
    constructor(hero, name = "Scarecrow Part 1", desc = "Kill the Scarecrow", target = new ScareCrow(), obj=1, gold=10, item=new Wheat()) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class ScareCrowQuest2 extends KillQuest
{
    constructor(hero, name="Scarecrow Part 2", desc="Find the crows", target=null, obj=0, gold=0, item=new BlackFeather()) {
        super(hero, name, desc, target, obj, gold, item)
    }
}
export class SkeletonQuest extends KillQuest
{
    constructor(hero, name="Putting them to Rest", desc="Kill Skeletons", target=new Skeleton(), obj=9, gold=0, item=new BasicHealScroll()) {
        super(hero, name, desc, target, obj, gold, item)
    }
}