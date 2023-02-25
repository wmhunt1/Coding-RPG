import { banditAndBanditArcherEncounter, banditAndBanditBersekerEncounter, banditArcherEncounter, banditBerserkerEncounter, banditEncounter, banditTrioEncounter, bossGoblinEncounter, enterGoblinMineEncounter, foremanGeorgeEncounter, giantEncounter, giantRatEncounter, giantSpiderEncounter, gnollEncounter, gnollLeaderEncounter, gnollShamanEncounter, goblinEncounter, goblinWithWorgEncounter, koboldSlavesEncounter, ratEncounter, saveMinersEncounter, saveTenguEncounter, spiderEncounter } from "./EncountersDB";
import { Ale, BanditSpoils, BronzeBar, CowLeather, SpiderSilkCloth } from "./ItemsDB"

export class Dungeon {
    Hero; Name; Encounters; Boss; AfterBoss; GoldReward; ItemReward;
    constructor(hero, name, encounters, boss, after, gold, item) {
        this.Hero = hero; this.Name = name; this.Encounters = encounters; this.Boss = boss; this.AfterBoss = after; this.GoldReward = gold; this.ItemReward = item;
    }
}
export class BanditHideoutDungeon extends Dungeon {
    constructor(hero, name = "Bandit Hideout", encounters = [banditArcherEncounter(), banditEncounter(), banditAndBanditArcherEncounter(), banditEncounter(), banditAndBanditBersekerEncounter(), banditEncounter(), banditBerserkerEncounter()], boss = banditTrioEncounter(), after = null, gold = 0, item = new BanditSpoils()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GiantCaveDungeon extends Dungeon {
    constructor(hero, name = "Giant Cave", encounters = [], boss = giantEncounter(), after = foremanGeorgeEncounter(hero), gold = 10, item = null) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GiantCaveDungeonBeforeAndAfterQuest extends Dungeon {
    constructor(hero, name = "Giant Cave", encounters = [], boss = giantEncounter(), after = null, gold = 10, item = null) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GnollDenDungeon extends Dungeon {
    constructor(hero, name = "Gnoll Den", encounters = [gnollEncounter(), gnollShamanEncounter(), gnollEncounter()], boss = gnollLeaderEncounter(), after = null, gold = 10, item = new CowLeather()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GoblinMine extends Dungeon {
    constructor(hero, name = "Goblin Mine", encounters = [enterGoblinMineEncounter(hero), goblinWithWorgEncounter(), koboldSlavesEncounter(hero), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], boss = bossGoblinEncounter(), after = saveMinersEncounter(hero), gold = 10, item = new BronzeBar()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class GoblinMineAfterQuest extends Dungeon {
    constructor(hero, name = "Goblin Mine", encounters = [goblinWithWorgEncounter(), goblinEncounter(), goblinWithWorgEncounter(), goblinEncounter()], boss = bossGoblinEncounter(), after = null, gold = 10, item = new BronzeBar()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class PuzzleCubeDungeon extends Dungeon {
    constructor(hero, name = "Puzzle Cube", encounters = [], boss = null, after = null, gold = 0, item = null) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class RatCellar extends Dungeon {
    constructor(hero, name = "Cellar", encounters = [ratEncounter(), ratEncounter(), ratEncounter()], boss = giantRatEncounter(), after = null, gold = 0, item = new Ale()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class SpiderCaveDungeon extends Dungeon {
    constructor(hero, name = "Spider Cave", encounters = [spiderEncounter(), spiderEncounter(), spiderEncounter()], boss = giantSpiderEncounter(), after = null, gold = 0, item = new SpiderSilkCloth()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}
export class SpiderCaveDungeonDuringQuest extends Dungeon {
    constructor(hero, name = "Spider Cave", encounters = [spiderEncounter(), spiderEncounter(), spiderEncounter()], boss = giantSpiderEncounter(), after = saveTenguEncounter(hero), gold = 0, item = new SpiderSilkCloth()) {
        super(hero, name, encounters, boss, after, gold, item)
    }
}