import { NoCondition, PoisonCondition, SleepCondition, WebCondition } from "./ConditionsDB";
import { Cleave, PierceArmor, Rage } from "./AbilitiesDB";
import { BareBack, BareFinger, BareNeck, Bite, EmptyOffHand, Shoes, Trousers, Tunic, WoodenShield, BareFist, BareHead, BareTorso, BareLegs, BareHands, BareFeet, WoodenClub, LoinCloth, BronzeSword, Slam, IronWarHammer, IronShield, IronHelmet, IronLegs, IronGauntlets, IronBoots, PoisonedBite, LeatherCowl, LeatherLegs, LeatherGloves, LeatherBoots, IronDagger, IronDaggerOffHand, OakShortBow, IronAxe2H, BronzeShield, BronzeMace, BronzeHelmet, ClawSlash, Peck, IronAxe, OakStaff, GhostTouch, NoAmmo, BronzeTorso } from "./ItemsDB";
import { DaleTown } from "./LocationsDB";
import { Cleric, Freelancer, Pet } from "./JobsDB";
import { BasicHeal, CurePoison, FireBall, MagicMissile, PoisonSpray, SleepSpell, SummonRat } from "./SpellsDB"
import { BasicAttacker, BasicHealer, Rager, spiderSummoner } from "./TacticsDB";
import { allSkills, BarterSkill, BlockSkill, HeavyWeaponSkill, HeavyArmorSkill, MiningSkill, RestorationSkill, SmithingSkill } from "./SkillsDB";
import { NoTitle } from "./TitlesDB";
import { BludgeoningDamage, FireDamage, PiercingDamage, PoisonDamage, SlashingDamage } from "./DamageTypesDB";
import { startingAdjacentLocations } from "./MapsDB";
import { FindSkillInSkillBook } from "../Scripts/SkillScripts";
import { BanditDrops, BatDrops, BearDrops, BeastDrops, ChickenDrops, CowDrops, Drops, GhostDrops, GiantDrops, GoblinDrops, GnollDrops, HumanoidDrops, LowLevelSkeletonDrops, RatDrops, SpiderDrops, WolfDrops } from "./DropsDB";

class Character {
    Name;
    Job = new Freelancer(); Title = new NoTitle(); TitleList = [new NoTitle()]; Log = [];
    Level = 1; CurrentXP = 10; MaxXP = 50;
    BaseStats = {
        Attack: { Bonus: 0, Penalty: 0 }, Defense: { Bonus: 0, Penalty: 0 },
        HP: { Current: 10, Max: 10, Bonus: 0, Penalty: 0, Regen: 0, RegenBonus: 0, RegenPenalty: 0, Temp: 0 },
        MP: { Current: 10, Max: 10, Bonus: 0, Penalty: 0, Regen: 0, RegenBonus: 0, RegenPenalty: 0 },
        SP: { Current: 10, Max: 10, Bonus: 0, Penalty: 0, Regen: 0, RegenBonus: 0, RegenPenalty: 0 }
    };
    Attributes = {
        Beauty: { Value: 10, Bonus: 0, Penalty: 0 }, Charisma: { Value: 10, Bonus: 0, Penalty: 0 }, Constitution: { Value: 10, Bonus: 0, Penalty: 0 },
        Dexterity: { Value: 10, Bonus: 0, Penalty: 0 }, Intelligence: { Value: 10, Bonus: 0, Penalty: 0 }, Luck: { Value: 10, Bonus: 0, Penalty: 0 },
        Perception: { Value: 10, Bonus: 0, Penalty: 0 }, Speed: { Value: 10, Bonus: 0, Penalty: 0 }, Strength: { Value: 10, Bonus: 0, Penalty: 0 },
        WillPower: { Value: 10, Bonus: 0, Penalty: 0 }, Wisdom: { Value: 10, Bonus: 0, Penalty: 0 }
    };
    ConditionModifiers = { Immunities: [], Resistances: [], Weaknesses: [] };
    DamageModifiers = { Immunities: [], Resistances: [], Weaknesses: [] };
    Equipment = {
        Ammo: new NoAmmo(), Back: new BareBack(), Feet: new BareFeet(), Hands: new BareHands(), Head: new BareHead(), Legs: new BareLegs(), Neck: new BareNeck(), OffHand: new EmptyOffHand(), Ring: new BareFinger(), Torso: new BareTorso(), Weapon: new BareFist()
    };
    Inventory = []; Gold = 0; Bank = []; BankGold = 0;
    Companions = []; Journal = []; Abilities = []; SpellBook = []; SkillBook = allSkills(); Reputation = []; Relationships = [];
    Buffs = []; DeBuffs = []; Condition = new NoCondition();
    Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicAttacker(char, allies, enemies, combatLog, round) } };
    ItemDrops = new Drops(); CurrentLocation = new DaleTown(this, 0, 0); Map = [new DaleTown(this, 0, 0)]; AdjacentLocations = startingAdjacentLocations(); Time = { Day: 0, Hour: 9, TimeOfDay: "Morning" };
    constructor(name) {
        this.Name = name;
        this.Job.ApplyJob(this)
    }
}
//beasts
export class Beast extends Character {
    constructor(name) {
        super(name)
        this.Equipment.Weapon = new Bite(); this.ItemDrops = new BeastDrops()
    }
}
export class Bat extends Beast {
    constructor(name = "Bat") {
        super(name)
        this.CurrentXP = 5; this.BaseStats.HP.Current = 5; this.BaseStats.HP.Max = 5; this.ItemDrops = new BatDrops()
    }
}
export class Bear extends Beast {
    constructor(name = "Bear") {
        super(name)
        this.BaseStats.HP.Current = 20; this.BaseStats.HP.Max = 20;
        this.Attributes.Strength.Value = 14; this.Attributes.Constitution.Value = 14;
        this.Equipment.Weapon = new ClawSlash(); this.ItemDrops = new BearDrops()
    }
}
export class Chicken extends Beast {
    constructor(name = "Chicken") {
        super(name)
        this.CurrentXP = 5; this.BaseStats.HP.Current = 5; this.BaseStats.HP.Max = 5; this.Attributes.Strength = 5;
        this.ItemDrops = new ChickenDrops(); this.Equipment.Weapon = new Peck();
    }
}
export class Cow extends Beast {
    constructor(name = "Cow") {
        super(name)
        this.Equipment.Weapon = new Slam(); this.ItemDrops = new CowDrops()
    }
}
export class Dog extends Beast {
    constructor(name = "Dog") {
        super(name)
        this.Job = new Pet();
    }
}
export class Rat extends Beast {
    constructor(name = "Rat") {
        super(name)
        this.CurrentXP = 5; this.BaseStats.HP.Current = 5; this.BaseStats.HP.Max = 5;
        this.ItemDrops = new RatDrops()
    }
}
export class GiantRat extends Rat {
    constructor(name = "Giant Rat") {
        super(name)
        this.CurrentXP = 10; this.BaseStats.HP.Current = 10; this.BaseStats.HP.Max = 10; this.Attributes.Strength.Value = 12;
    }
}
export class Hyena extends Beast {

}
export class Spider extends Beast {
    constructor(name = "Spider") {
        super(name)
        this.Attributes.Dexterity.Value = 12; this.Attributes.Speed.Value = 12;
        this.Equipment.Weapon = new PoisonedBite();
        this.ConditionModifiers.Immunities = [new WebCondition(0, 0), new PoisonCondition(0, 0)];
        this.DamageModifiers.Immunities = [new PoisonDamage()]; this.ItemDrops = new SpiderDrops()
    }
}
export class GiantSpider extends Spider {
    constructor(name = "Giant Spider") {
        super(name)
        this.BaseStats.MP.Current = 20;
        this.BaseStats.MP.Max = 20;
        this.BaseStats.HP.Current = 20;
        this.BaseStats.HP.Max = 10;
        this.CurrentXP = 50;
        this.Attributes.Strength.Value = 12;
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { spiderSummoner(char, allies, enemies, combatLog, round) } }
    }

}
export class Wolf extends Beast {
    constructor(name = "Wolf") {
        super(name)
        this.Attributes.Dexterity.Value = 12;
        this.Attributes.Speed.Value = 12;
        this.ItemDrops = new WolfDrops()
    }
}
export class Worg extends Beast {
    constructor(name = "Worg") {
        super(name)
        this.CurrentXP = 10;
        this.Attributes.Strength.Value = 14;
        this.BaseStats.HP.Current = 20;
        this.BaseStats.HP.Max = 20;
    }
}
//constructs
export class Construct extends Character {
    constructor(name) {
        super(name)
        this.ConditionModifiers.Immunities = [new PoisonCondition(0, 0), new SleepCondition(0, 0)]
    }
}
export class ScareCrow extends Construct {
    constructor(name = "Scarecrow") {
        super(name)
        this.CurrentXP = 25;
        this.DamageModifiers.Weaknesses = [new FireDamage(this)]
    }
}
//humanoids
export class Humanoid extends Character {
    constructor(name = "Humanoid") {
        super(name)
        this.ItemDrops = new HumanoidDrops()
    }
}
//bandits
export class Bandit extends Humanoid {
    constructor(name = "Bandit") {
        super(name)
        this.Equipment.Head = new LeatherCowl(); this.Equipment.Legs = new LeatherLegs();
        this.Equipment.Hands = new LeatherGloves(); this.Equipment.Feet = new LeatherBoots(); this.Equipment.Weapon = new IronDagger(); this.Equipment.OffHand = new IronDaggerOffHand();
        this.ItemDrops = new BanditDrops()
    }
}
export class BanditArcher extends Bandit {
    constructor(name = "Bandit Archer") {
        super(name)
        this.Equipment.Weapon = new OakShortBow()
    }
}
export class BanditBerserker extends Bandit {
    constructor(name = "Bandit Berserker") {
        super(name)
        this.Equipment.Weapon = new IronAxe2H(); this.Abilities = [new Rage()];
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { Rager(char, allies, enemies, combatLog, round) } }
    }
}
//hero and companions
export class Hero extends Humanoid {
    constructor(name) {
        super(name)
        this.CurrentXP = 0;
        this.Log = ["Game: Starting Game"];
        this.Equipment.Weapon = new BronzeSword(); this.Equipment.Torso = new Tunic();
        this.Equipment.Legs = new Trousers(); this.Equipment.Feet = new Shoes();
        this.Gold = 5;
        this.Companions = [new Dog("Dog")];
        this.Abilities = [new Cleave(), new PierceArmor(), new Rage()];
        this.SpellBook = [new BasicHeal(), new CurePoison(), new FireBall(), new MagicMissile(), new PoisonSpray(), new SleepSpell(), new SummonRat()];
        this.Inventory = [new BronzeTorso(), new BronzeTorso()]
    }
}
export class FerraForgeHeart extends Humanoid {
    constructor(name = "Ferra Forgeheart") {
        super(name)
        this.Job = new Cleric(); this.CurrentXP = 0;
        this.Equipment.Weapon = new IronWarHammer(); this.Equipment.OffHand = new IronShield(); this.Equipment.Head = new IronHelmet();
        this.Equipment.Legs = new IronLegs(); this.Equipment.Hands = new IronGauntlets();
        this.Equipment.Feet = new IronBoots();
        this.BaseStats.SpellBook = [new BasicHeal(), new CurePoison()];
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicHealer(char, allies, enemies, combatLog, round) } }
        FindSkillInSkillBook(this, new BarterSkill()).Level = 10; FindSkillInSkillBook(this, new BarterSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, new BarterSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, new BlockSkill()).Level = 10; FindSkillInSkillBook(this, new BlockSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, new BlockSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, new HeavyWeaponSkill()).Level = 10; FindSkillInSkillBook(this, new HeavyWeaponSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, new HeavyWeaponSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, new HeavyArmorSkill()).Level = 10; FindSkillInSkillBook(this, new HeavyArmorSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, new HeavyArmorSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, new MiningSkill()).Level = 10; FindSkillInSkillBook(this, new MiningSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, new MiningSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, new RestorationSkill()).Level = 10; FindSkillInSkillBook(this, new RestorationSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, new RestorationSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, new SmithingSkill()).Level = 10; FindSkillInSkillBook(this, new SmithingSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, new SmithingSkill()).MaxXP = 9000;
    }
}
export class Giant extends Humanoid {
    constructor(name = "Giant") {
        super(name)
        this.Equipment.Weapon = new WoodenClub(); this.CurrentXP = 100; this.Legs = new LoinCloth();
        this.BaseStats.HP.Current = 30; this.BaseStats.HP.Max = 30; this.Attributes.Strength.Value = 20;
        this.ItemDrops = new GiantDrops()
    }
}
//gnolls
export class Gnoll extends Humanoid {
    constructor(name = "Gnoll") {
        super(name)
        this.BaseStats.HP.Current = 15; this.BaseStats.HP.Max = 15;
        this.Attributes.Strength.Value = 12; this.Attributes.Dexterity.Value = 12;
        this.CurrentXP = 20;
        this.Equipment.Weapon = new IronAxe(); this.Equipment.OffHand = new IronShield(); this.Equipment.Legs = new LoinCloth();
        this.ItemDrops = new GnollDrops()
    }
}
export class GnollLeader extends Gnoll {
    constructor(name = "Gnoll Leader") {
        super(name)
        this.Abilities = [new Rage()]
        this.BaseStats.HP.Current = 30; this.BaseStats.HP.Max = 30;
        this.Attributes.Strength.Value = 14; this.Attributes.Dexterity.Value = 12;
        this.CurrentXP = 50;
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { Rager(char, allies, enemies, combatLog, round) } }
    }
}
export class GnollShaman extends Gnoll {
    constructor(name = "Gnoll Shaman") {
        super(name)
        this.Attributes.Wisdom.Value = 12; this.SpellBook = [new BasicHeal()]
        this.CurrentXP = 20; this.Equipment.Weapon = new OakStaff();
        this.ItemDrops = [new OakStaff()]
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicHealer(char, allies, enemies, combatLog, round) } }
    }
}
//goblins
export class Goblin extends Humanoid {
    constructor(name = "Goblin") {
        super(name)
        this.Equipment.Weapon = new WoodenClub(); this.Equipment.OffHand = new WoodenShield();
        this.Equipment.Legs = new LoinCloth(); this.ItemDrops = new GoblinDrops()
    }
}
export class GoblinBoss extends Goblin {
    constructor(name = "Goblin Boss") {
        super(name)
        this.BaseStats.HP.Current = 15;
        this.BaseStats.HP.Max = 15;
        this.CurrentXP = 20;
    }
}
//undead
export class Undead extends Character {
    constructor(name) {
        super(name)
        this.ConditionModifiers.Immunities = [new PoisonCondition(0, 0), new SleepCondition(0, 0)]
    }
}
export class Ghost extends Undead {
    constructor(name = "Ghost") {
        super(name)
        this.Attributes.Intelligence = 12; this.Equipment.Weapon = new GhostTouch();
        this.ItemDrops = new GhostDrops(); this.DamageModifiers.Immunities = [new BludgeoningDamage(this), new PiercingDamage(this), new SlashingDamage(this)];
    }
}
export class Skeleton extends Undead {
    constructor(name = "Skeleton") {
        super(name)
        this.DamageModifiers.Resistances = [new PiercingDamage(this), new SlashingDamage(this)]; this.DamageModifiers.Weaknesses = [new BludgeoningDamage(this)];
        this.ItemDrops = new LowLevelSkeletonDrops()
        this.Equipment.Weapon = new BronzeMace(); this.Equipment.OffHand = new BronzeShield(); this.Equipment.Head = new BronzeHelmet()
    }
}