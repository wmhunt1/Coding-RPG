import { NoCondition, PoisonCondition, SleepCondition, WebCondition } from "./ConditionsDB";
import { Cleave, PierceArmor, Rage } from "./AbilitiesDB";
import {Cloak,  BareBack, BareFinger, BareNeck, Bite, Bones, EmptyOffHand, RatTail, RawRatMeat, Shoes, Trousers, Tunic, WoodenShield, BareFist, BareHead, BareTorso, BareLegs, BareHands, BareFeet, WoodenClub, LoinCloth, BronzeSword, Slam, RawBeef, CowLeather, IronWarHammer, IronShield, IronHelmet, IronTorso, IronLegs, IronGauntlets, IronBoots, PoisonedBite, SpiderSilkCloth, LeatherCowl, LeatherTorso, LeatherLegs, LeatherGloves, LeatherBoots, IronDagger, IronDaggerOffHand, OakShortBow, IronAxe2H, Skull, BronzeShield, BronzeMace, BronzeHelmet, WolfFur, ClawSlash, BearFur, RawChicken, Feather, Peck, BatGuano, IronAxe, OakStaff, GhostTouch, Ectoplasm,BronzeBoots, RingOfStr, WoolBoots } from "./ItemsDB";
import { daleTown } from "./LocationsDB";
import { Cleric, Freelancer, Pet } from "./JobsDB";
import { basicHeal, curePoison, fireBall, magicMissile, poisonSpray, sleepSpell, summonRat } from "./SpellsDB"
import { BasicAttacker, BasicHealer, Rager, spiderSummoner } from "./TacticsDB";
import { allSkills, BarterSkill, BlockSkill, HeavyWeaponSkill, HeavyArmorSkill, MiningSkill, RestorationSkill, SmithingSkill } from "./SkillsDB";
import { NoTitle } from "./TitlesDB";
import { BludgeoningDamage, FireDamage, LightningDamage, PiercingDamage, PoisonDamage, SlashingDamage } from "./DamageTypesDB";
import { startingAdjacentLocations } from "./MapsDB";
import { FindSkillInSkillBook } from "../Scripts/SkillScripts";

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
        Back: new BareBack(), Feet: new BareFeet(), Hands: new BareHands(), Head: new BareHead(), Legs: new BareLegs(), Neck: new BareNeck(), OffHand: new EmptyOffHand(), Ring: new BareFinger(), Torso: new BareTorso(), Weapon: new BareFist()
    };
    Inventory = []; Gold = 0; Bank = []; BankGold = 0;
    Companions = []; Journal = []; Abilities = []; SpellBook = []; SkillBook = allSkills(); Reputation = []; Relationships = [];
    Buffs = []; DeBuffs = []; Condition = new NoCondition();
    Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicAttacker(char, allies, enemies, combatLog, round) } };
    ItemDrops = []; CurrentLocation = daleTown(this, 0, 0); Map = [daleTown(this, 0, 0)]; AdjacentLocations = startingAdjacentLocations(); Time = { Day: 0, Hour: 9, TimeOfDay: "Morning" };
    constructor(name) {
        this.Name = name;
    }
}
//beasts
export class Beast extends Character {
    constructor(name) {
        super(name)
        this.Equipment.Weapon = new Bite();
    }
}
export class Bat extends Beast {
    constructor(name = "Bat") {
        super(name = "Bat")
        this.CurrentXP = 5; this.BaseStats.HP.Current = 5; this.BaseStats.HP.Max = 5; this.ItemDrops = [new BatGuano()]
    }
}
export class Bear extends Beast {
    constructor(name = "Bear") {
        super(name = "Bear")
        this.BaseStats.HP.Current = 20; this.BaseStats.HP.Max = 20;
        this.Attributes.Strength.Value = 14; this.Attributes.Constitution.Value = 14;
        this.Equipment.Weapon = new ClawSlash(); this.ItemDrops = [new BearFur()]
    }
}
export class Chicken extends Beast {
    constructor(name = "Chicken") {
        super(name = "Chicken")
        this.CurrentXP = 5; this.BaseStats.HP.Current = 5; this.BaseStats.HP.Max = 5; this.Attributes.Strength = 5;
        this.ItemDrops = [new RawChicken(), new Feather()]; this.Equipment.Weapon = new Peck();
    }
}
export class Cow extends Beast {
    constructor(name = "Cow") {
        super(name = "Cow")
        this.Equipment.Weapon = new Slam(); this.ItemDrops = [new CowLeather(), new RawBeef()]
    }
}
export class Dog extends Beast {
    constructor(name = "Dog") {
        super(name = "Dog")
        this.Job = new Pet();
    }
}
export class Rat extends Beast {
    constructor(name = "Rat") {
        super(name = "Rat")
        this.CurrentXP = 5; this.BaseStats.HP.Current = 5; this.BaseStats.HP.Max = 5;
        this.ItemDrops = [new RawRatMeat(), new RatTail()]
    }
}
export class GiantRat extends Rat {
    constructor(name = "Giant Rat") {
        super(name = "Giant Rat")
        this.CurrentXP = 10; this.BaseStats.HP.Current = 10; this.BaseStats.HP.Max = 10; this.Attributes.Strength.Value = 12;
    }
}
export class Hyena extends Beast {

}
export class Spider extends Beast {
    constructor(name = "Spider") {
        super(name = "Spider")
        this.Attributes.Dexterity.Value = 12; this.Attributes.Speed.Value = 12;
        this.Equipment.Weapon = new PoisonedBite();
        this.ConditionModifiers.Immunities = [new WebCondition(0, 0), new PoisonCondition(0, 0)];
        this.DamageModifiers.Immunities = [new PoisonDamage()]; this.ItemDrops = [new SpiderSilkCloth()]
    }
}
export class GiantSpider extends Spider {
    constructor(name = "Spider") {
        super(name = "Spider")
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
        super(name = "Wolf")
        this.Attributes.Dexterity.Value = 12;
        this.Attributes.Speed.Value = 12;
        this.ItemDrops = [new WolfFur()]
    }
}
export class Worg extends Beast {
    constructor(name = "Worg") {
        super(name = "Worg")
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
        super(name = "Scarecrow")
        this.CurrentXP = 25;
        this.DamageModifiers.Weaknesses = [new FireDamage(this)]
    }
}
//humanoids
export class Humanoid extends Character {
    constructor(name = "Humanoid") {
        super(name = "Humanoid")
    }
}
//bandits
export class Bandit extends Humanoid {
    constructor(name = "Bandit") {
        super(name = "Bandit")
        this.Equipment.Head = new LeatherCowl(); this.Equipment.Torso = new LeatherTorso(); this.Equipment.Legs = new LeatherLegs();
        this.Equipment.Hands = new LeatherGloves(); this.Equipment.Feet = new LeatherBoots(); this.Equipment.Weapon = new IronDagger(); this.Equipment.OffHand = new IronDaggerOffHand();
        this.ItemDrops = [new LeatherBoots(), new LeatherCowl(), new LeatherGloves(), new LeatherLegs(), new LeatherTorso(), new IronDagger(), new IronDaggerOffHand(), new OakShortBow(), new IronAxe2H()]
    }
}
export class BanditArcher extends Bandit {
    constructor(name = "Bandit Archer") {
        super(name = "Bandit Archer")
        this.Equipment.Weapon = new OakShortBow()
    }
}
export class BanditBerserker extends Bandit {
    constructor(name = "Bandit Berserker") {
        super(name = "Bandit Berserker")
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
        this.SpellBook = [basicHeal(), curePoison(), fireBall(), magicMissile(), poisonSpray(), sleepSpell(), summonRat()];
        this.DamageModifiers.Weaknesses = [new FireDamage(this)]; this.DamageModifiers.Weaknesses[0].Source = this.Equipment.Torso;
        this.Inventory = [new BronzeBoots(), new Cloak(),new RingOfStr(), new LeatherBoots(), new WoolBoots()]
    }
}
export class FerraForgeHeart extends Humanoid {
    constructor(name) {
        super(name = "Ferra Forgeheart")
        this.Job = new Cleric(); this.CurrentXP = 0;
        this.Equipment.Weapon = new IronWarHammer(); this.Equipment.OffHand = new IronShield(); this.Equipment.Head = new IronHelmet();
        this.Equipment.Torso = new IronTorso(); this.Equipment.Legs = new IronLegs(); this.Equipment.Hands = new IronGauntlets();
        this.Equipment.Feet = new IronBoots();
        this.BaseStats.SpellBook = [basicHeal(), curePoison()];
        this.DamageModifiers.Weaknesses = [new LightningDamage(this.Equipment.Torso)];
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
        super(name = "Giant")
        this.Equipment.Weapon = new WoodenClub(); this.CurrentXP = 100;
        this.BaseStats.HP.Current = 30; this.BaseStats.HP.Max = 30; this.Attributes.Strength.Value = 20;
    }
}
//gnolls
export class Gnoll extends Humanoid {
    constructor(name = "Gnoll") {
        super(name = "Gnoll")
        this.BaseStats.HP.Current = 15; this.BaseStats.HP.Max = 15;
        this.Attributes.Strength.Value = 12; this.Attributes.Dexterity.Value = 12;
        this.CurrentXP = 20;
        this.Equipment.Weapon = new IronAxe(); this.Equipment.OffHand = new IronShield(); this.Equipment.Legs = new LoinCloth();
        this.ItemDrops = [new IronAxe(), new IronShield()]
    }
}
export class GnollLeader extends Gnoll {
    constructor(name = "Gnoll Leader") {
        super(name = "Gnoll Leader")
        this.Abilities = [new Rage()]
        this.BaseStats.HP.Current = 30; this.BaseStats.HP.Max = 30;
        this.Attributes.Strength.Value = 14; this.Attributes.Dexterity.Value = 12;
        this.CurrentXP = 50;
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { Rager(char, allies, enemies, combatLog, round) } }
    }
}
export class GnollShaman extends Gnoll {
    constructor(name = "Gnoll Shaman") {
        super(name = "Gnoll Shaman")
        this.Attributes.Wisdom.Value = 12; this.SpellBook = [basicHeal()]
        this.CurrentXP = 20; this.Equipment.Weapon = new OakStaff();
        this.ItemDrops = [new OakStaff()]
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicHealer(char, allies, enemies, combatLog, round) } }
    }
}
//goblins
export class Goblin extends Humanoid {
    constructor(name = "Goblin") {
        super(name = "Goblin")
        this.Equipment.Weapon = new WoodenClub(); this.Equipment.OffHand = new WoodenShield();
        this.Equipment.Legs = new LoinCloth(); this.ItemDrops = [new WoodenClub(), new WoodenShield()]
    }
}
export class GoblinBoss extends Goblin {
    constructor(name = "Goblin Boss") {
        super(name = "Goblin Boss")
        this.BaseStats.HP.Current = 15;
        this.BaseStats.HP.Max = 15;
        this.CurrentXP = 20;
    }
}
//undead
export class Undead extends Character {
    constructor(name) {
        super(name)
        this.ConditionModifiers.Immunities.push(new PoisonCondition(0, 0));
        this.ConditionModifiers.Immunities.push(new SleepCondition(0, 0))
    }
}
export class Ghost extends Undead {
    constructor(name = "Ghost") {
        super(name = "Ghost")
        this.Attributes.Intelligence = 12; this.Equipment.Weapon = new GhostTouch();
        this.ItemDrops = [new Ectoplasm()]; this.DamageModifiers.Immunities = [new BludgeoningDamage(this), new PiercingDamage(this), new SlashingDamage(this)];
    }
}
export class Skeleton extends Undead {
    constructor(name = "Skeleton") {
        super(name = "Skeleton")
        this.DamageModifiers.Resistances = [new PiercingDamage(this), new SlashingDamage(this)]; this.DamageModifiers.Weaknesses = [new BludgeoningDamage(this)];
        this.ItemDrops = [new Bones(), new BronzeHelmet(), new BronzeMace(), new BronzeShield(), new Skull()]
        this.Equipment.Weapon = new BronzeMace(); this.Equipment.OffHand = new BronzeShield(); this.Equipment.Head = new BronzeHelmet()
    }
}