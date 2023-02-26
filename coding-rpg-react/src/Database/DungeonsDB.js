import { BanditAndBanditArcherEncounter, BanditAndBanditBerserkerEncounter, BanditArcherEncounter, BanditBerserkerEncounter, BanditEncounter, BanditTrioEncounter, GoblinBossEncounter, EnterGoblinMineEncounter, ForemanGeorgeEncounter, GiantEncounter, GiantRatEncounter,GiantSpiderEncounter, GnollEncounter, GnollLeaderEncounter, GnollShamanEncounter, GoblinEncounter, GoblinWithWorgEncounter, KoboldSlavesEncounter, RatEncounter, SaveMinersEncounter, SaveTenguEncounter, SpiderEncounter } from "./EncountersDB";
import { Ale, BanditSpoils, BronzeBar, CowLeather, SpiderSilkCloth } from "./ItemsDB"

export class Dungeon {
    Hero; Name; Encounters; Boss; AfterBoss; GoldReward; ItemReward;
    constructor(hero, name, encounters, boss, after, gold, item) {
        this.Hero = hero; this.Name = name; this.Encounters = encounters; this.Boss = boss; this.AfterBoss = after; this.GoldReward = gold; this.ItemReward = item;
    }
}
export class BanditHideoutDungeon extends Dungeon {
    constructor(hero, name = "Bandit Hideout", encounters = [new BanditArcherEncounter(), new BanditEncounter(), new BanditAndBanditArcherEncounter(), new BanditEncounter(), new BanditAndBanditBerserkerEncounter(), new BanditEncounter(), new BanditBerserkerEncounter()], boss = new BanditTrioEncounter(), after = null, gold = 0, item = new BanditSpoils()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GiantCaveDungeon extends Dungeon {
    constructor(hero, name = "Giant Cave", encounters = [], boss = new GiantEncounter(), after = new ForemanGeorgeEncounter(hero), gold = 10, item = null) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GiantCaveDungeonBeforeAndAfterQuest extends Dungeon {
    constructor(hero, name = "Giant Cave", encounters = [], boss = new GiantEncounter(), after = null, gold = 10, item = null) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GnollDenDungeon extends Dungeon {
    constructor(hero, name = "Gnoll Den", encounters = [new GnollEncounter(), new GnollShamanEncounter(), new GnollEncounter()], boss = new GnollLeaderEncounter(), after = null, gold = 10, item = new CowLeather()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GoblinMine extends Dungeon {
    constructor(hero, name = "Goblin Mine", encounters = [new EnterGoblinMineEncounter(hero), new GoblinWithWorgEncounter(), new KoboldSlavesEncounter(hero), new GoblinEncounter(), new GoblinWithWorgEncounter(), new GoblinEncounter()], boss = new GoblinBossEncounter(), after = new SaveMinersEncounter(hero), gold = 10, item = new BronzeBar()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GoblinMineAfterQuest extends Dungeon {
    constructor(hero, name = "Goblin Mine", encounters = [new GoblinWithWorgEncounter(), new GoblinEncounter(), new GoblinWithWorgEncounter(), new GoblinEncounter()], boss = new GoblinBossEncounter(), after = null, gold = 10, item = new BronzeBar()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class PuzzleCubeDungeon extends Dungeon {
    constructor(hero, name = "Puzzle Cube", encounters = [], boss = null, after = null, gold = 0, item = null) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class RatCellar extends Dungeon {
    constructor(hero, name = "Cellar", encounters = [new RatEncounter(), new RatEncounter(), new RatEncounter()], boss = new GiantRatEncounter(), after = null, gold = 0, item = new Ale()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class SpiderCaveDungeon extends Dungeon {
    constructor(hero, name = "Spider Cave", encounters = [new SpiderEncounter(), new SpiderEncounter(), new SpiderEncounter()], boss = new GiantSpiderEncounter(), after = null, gold = 0, item = new SpiderSilkCloth()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class SpiderCaveDungeonDuringQuest extends Dungeon {
    constructor(hero, name = "Spider Cave", encounters = [new SpiderEncounter(), new SpiderEncounter(), new SpiderEncounter()], boss = new GiantSpiderEncounter(), after = new SaveTenguEncounter(hero), gold = 0, item = new SpiderSilkCloth()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}