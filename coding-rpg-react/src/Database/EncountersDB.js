import { Bandit, BanditArcher, BanditBerserker, Cow, Giant, GiantRat, GiantSpider, Gnoll, GnollLeader, GnollShaman, Goblin, GoblinBoss, Hyena, Rat, ScareCrow, Skeleton, Spider, Worg } from "./CharactersDB";
import { enslavedKoboldsDialogue, enterGoblinMineDialogue, giantCaveDialogue, saveMinersDialogue, spiderCaveDialogue } from "./DialoguesDB";

export class Encounter {
    Hero; Name; Type; Content;
    constructor(hero, name, content) {
        this.Hero = hero; this.Name = name; this.Content = content;
    }
}
//combat encounters
export class CombatEncounter extends Encounter {
    constructor(hero, name, content) {
        super(hero, name, content)
        this.Type = "Combat"
    }
}
//beasts
export class CowEncounter extends CombatEncounter {
    constructor(hero, name = "Cow", content = [new Cow()]) {
        super(hero, name, content)
    }
}
//rats
export class GiantRatEncounter extends CombatEncounter {
    constructor(hero, name = "Giant Rat", content = [new GiantRat(), new Rat(), new Rat(), new Rat()]) {
        super(hero, name, content)
    }
}
export class RatEncounter extends CombatEncounter {
    constructor(hero, name = "Rats", content = [new Rat(), new Rat(), new Rat()]) {
        super(hero, name, content)
    }
}
//spiders
export class GiantSpiderEncounter extends CombatEncounter {
    constructor(hero, name = "Giant Spider", content = [new GiantSpider()]) {
        super(hero, name, content)
    }
}
export class SpiderEncounter extends CombatEncounter {
    constructor(hero, name = "Spiders", content = [new Spider(), new Spider(), new Spider()]) {
        super(hero, name, content)
    }
}
//constructs
export class ScareCrowEncounter extends CombatEncounter {
    constructor(hero, name = "Scarecrow", content = [new ScareCrow()]) {
        super(hero, name, content)
    }
}
//humanoids
export class BanditEncounter extends CombatEncounter {
    constructor(hero, name = "Bandits", content = [new Bandit(), new Bandit()]) {
        super(hero, name, content)
    }
}
export class BanditAndBanditArcherEncounter extends CombatEncounter {
    constructor(hero, name = "Bandits", content = [new Bandit(), new BanditArcher()]) {
        super(hero, name, content)
    }
}
export class BanditAndBanditBerserkerEncounter extends CombatEncounter {
    constructor(hero, name = "Bandits", content = [new Bandit(), new BanditBerserker()]) {
        super(hero, name, content)
    }
}
export class BanditArcherEncounter extends CombatEncounter {
    constructor(hero, name = "Bandits", content = [new BanditArcher(), new BanditArcher()]) {
        super(hero, name, content)
    }
}
export class BanditArcherAndBanditBerserkerEncounter extends CombatEncounter {
    constructor(hero, name = "Bandits", content = [new BanditArcher(), new BanditBerserker()]) {
        super(hero, name, content)
    }
}
export class BanditBerserkerEncounter extends CombatEncounter {
    constructor(hero, name = "Bandits", content = [new BanditBerserker(), new BanditBerserker()]) {
        super(hero, name, content)
    }
}
export class BanditTrioEncounter extends CombatEncounter {
    constructor(hero, name = "Bandits", content = [new Bandit(), new BanditArcher(), new BanditBerserker()]) {
        super(hero, name, content)
    }
}
export class GiantEncounter extends CombatEncounter {
    constructor(hero, name = "Giant", content = [new Giant()]) {
        super(hero, name, content)
    }
}
//gnolls
export class GnollEncounter extends CombatEncounter {
    constructor(hero, name = "Gnolls", content = [new Gnoll(), new Gnoll(), new Gnoll()]) {
        super(hero, name, content)
    }
}
export class GnollLeaderEncounter extends CombatEncounter {
    constructor(hero, name = "Gnolls", content = [new GnollLeader(), new Gnoll(), new Hyena()]) {
        super(hero, name, content)
    }
}
export class GnollShamanEncounter extends CombatEncounter {
    constructor(hero, name = "Gnolls", content = [new GnollShaman(), new Hyena(), new Hyena()]) {
        super(hero, name, content)
    }
}
//goblins
export class GoblinBossEncounter extends CombatEncounter {
    constructor(hero, name = "Goblins", content = [new GoblinBoss(), new Goblin(), new Goblin(), new Goblin()]) {
        super(hero, name, content)
    }
}
export class GoblinEncounter extends CombatEncounter {
    constructor(hero, name = "Goblins", content = [new Goblin(), new Goblin(), new Goblin()]) {
        super(hero, name, content)
    }
}
export class GoblinWithWorgEncounter extends CombatEncounter {
    constructor(hero, name = "Goblin and Worg", content = [new Goblin(), new Worg()]) {
        super(hero, name, content)
    }
}
//undead
export class SkeletonEncounter extends CombatEncounter {
    constructor(hero, name = "Skeletons", content = [new Skeleton(), new Skeleton(), new Skeleton()]) {
        super(hero, name, content)
    }
}
//undead
//dialogue encounters
export class DialogueEncounter extends Encounter {
    constructor(hero, name, content) {
        super(hero, name, content)
        this.Type = "Dialogue";
    }
}
export class EnterGoblinMineEncounter extends DialogueEncounter {
    constructor(hero, name = "Speak with Ferra", content = enterGoblinMineDialogue(hero)) {
        super(hero, name, content, hero)
    }
}
export class ForemanGeorgeEncounter extends DialogueEncounter {
    constructor(hero, name = "Speak Foreman George", content = giantCaveDialogue(hero)) {
        super(hero, name, content, hero)
    }
}
export class KoboldSlavesEncounter extends DialogueEncounter {
    constructor(hero, name = "Speak with Kobolds", content = enslavedKoboldsDialogue(hero)) {
        super(hero, name, content, hero)
    }
}
export class SaveMinersEncounter extends DialogueEncounter {
    constructor(hero, name = "Speak with Mine Foreman", content = saveMinersDialogue(hero)) {
        super(hero, name, content, hero)
    }
}
export class SaveTenguEncounter extends DialogueEncounter {
    constructor(hero, name = "Speak with Tengu", content = spiderCaveDialogue(hero)) {
        super(hero, name, content, hero)
    }
}