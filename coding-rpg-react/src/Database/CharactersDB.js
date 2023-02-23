import { noCondition, poisonCondition, sleepCondition, webCondition } from "./ConditionsDB";
import { cleave, pierceArmor, rage } from "./AbilitiesDB";
import { bareBack, bareFinger, bareNeck, bite, bones, emptyOffHand, hat, gloves, ratTail, rawRatMeat, shoes, trousers, tunic, woodenShield, bareFist, bareHead, bareTorso, bareLegs, bareHands, bareFeet, woodenclub, loinCloth, bronzeSword, slam, rawBeef, cowLeather, ironWarHammer, ironShield, ironHelmet, ironTorso, ironLegs, ironGauntlets, ironBoots, poisonedBite, spiderSilkCloth, leatherCowl, leatherTorso, leatherLegs, leatherGloves, leatherBoots, ironDagger, ironDaggerOffHand, oakShortBow, ironAxe2H, skull, bronzeShield, bronzeMace, bronzeHelmet, wolfFur, clawSlash, bearFur, rawChicken, feather, peck, batGuano, ironAxe, oakStaff, ghostTouch, ectoplasm } from "./ItemsDB";
import { daleTown } from "./LocationsDB";
import { cleric, freelancer, pet } from "./JobsDB";
import { basicHeal, curePoison, fireBall, magicMissile, poisonSpray, sleepSpell, summonRat } from "./SpellsDB"
import { BasicAttacker, BasicHealer, Rager, spiderSummoner } from "./TacticsDB";
import { allSkills, barterSkill, blockSkill, heavyWeaponSkill, heavyArmorSkill, miningSkill, restorationSkill, smithingSkill } from "./SkillsDB";
import { noTitle } from "./TitlesDB";
import { bludeoningDamage, fireDamage, lightningDamage, piercingDamage, poisonDamage, slashingDamage } from "./DamageTypesDB";
import { startingAdjacentLocations } from "./MapsDB";
import { FindSkillInSkillBook } from "../Scripts/SkillScripts";

class Character {
    Name;
    Job = freelancer(); Title = noTitle(); TitleList = [noTitle()]; Log = [];
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
        Back: bareBack(), Feet: bareFeet(), Hands: bareHands(), Head: bareHead(), Legs: bareLegs(), Neck: bareNeck(), OffHand: emptyOffHand(), Ring: bareFinger(), Torso: bareTorso(), Weapon: bareFist()
    };
    Inventory = []; Gold = 0; Bank = []; BankGold = 0;
    Companions = []; Journal = []; Abilities = []; SpellBook = []; SkillBook = allSkills(); Reputation = []; Relationships = [];
    Buffs = []; DeBuffs = []; Condition = noCondition();
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
        this.Equipment.Weapon = bite();
    }
}
export class Bat extends Beast {
    constructor(name = "Bat") {
        super(name = "Bat")
        this.CurrentXP = 5; this.BaseStats.HP.Current = 5; this.BaseStats.HP.Max = 5; this.ItemDrops = [batGuano()]
    }
}
export class Bear extends Beast {
    constructor(name = "Bear") {
        super(name = "Bear")
        this.BaseStats.HP.Current = 20; this.BaseStats.HP.Max = 20;
        this.Attributes.Strength.Value = 14; this.Attributes.Constitution.Value = 14;
        this.Equipment.Weapon = clawSlash(); this.ItemDrops = [bearFur()]
    }
}
export class Chicken extends Beast {
    constructor(name = "Chicken") {
        super(name = "Chicken")
        this.CurrentXP = 5; this.BaseStats.HP.Current = 5; this.BaseStats.HP.Max = 5; this.Attributes.Strength = 5;
        this.ItemDrops = [rawChicken(), feather()]; this.Equipment.Weapon = peck();
    }
}
export class Cow extends Beast {
    constructor(name = "Cow") {
        super(name = "Cow")
        this.Equipment.Weapon = slam(); this.ItemDrops = [cowLeather(), rawBeef()]
    }
}
export class Dog extends Beast {
    constructor(name = "Dog") {
        super(name = "Dog")
        this.Job = pet();
    }
}
export class Rat extends Beast {
    constructor(name = "Rat") {
        super(name = "Rat")
        this.CurrentXP = 5; this.BaseStats.HP.Current = 5; this.BaseStats.HP.Max = 5;
        this.ItemDrops = [rawRatMeat(), ratTail()]
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
        this.Equipment.Weapon = poisonedBite();
        this.ConditionModifiers.Immunities = [webCondition(), poisonCondition()];
        this.Immunities(poisonDamage()); this.ItemDrops = [spiderSilkCloth()]
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
        this.ItemDrops = [wolfFur()]
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
        this.ConditionModifiers.Immunities = [poisonCondition(), sleepCondition()]
    }
}
export class ScareCrow extends Construct {
    constructor(name = "Scarecrow") {
        super(name = "Scarecrow")
        this.CurrentXP = 25;
        this.DamageModifiers.Weaknesses = [fireDamage()]
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
        this.Equipment.Head = leatherCowl(); this.Equipment.Torso = leatherTorso(); this.Equipment.Legs = leatherLegs();
        this.Equipment.Hands = leatherGloves(); this.Equipment.Feet = leatherBoots(); this.Equipment.Weapon = ironDagger(); this.Equipment.OffHand = ironDaggerOffHand();
        this.ItemDrops = [leatherBoots(), leatherCowl(), leatherGloves(), leatherLegs(), leatherTorso(), ironDagger(), ironDaggerOffHand(), oakShortBow(), ironAxe2H()]
    }
}
export class BanditArcher extends Bandit {
    constructor(name = "Bandit Archer") {
        super(name = "Bandit Archer")
        this.Equipment.Weapon = oakShortBow()
    }
}
export class BanditBerserker extends Bandit {
    constructor(name = "Bandit Berserker") {
        super(name = "Bandit Berserker")
        this.Equipment.Weapon = ironAxe2H()
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { Rager(char, allies, enemies, combatLog, round) } }
    }
}
//hero and companions
export class Hero extends Humanoid {
    constructor(name) {
        super(name)
        this.CurrentXP = 0;
        this.Log = ["Game: Starting Game"];
        this.Equipment.Weapon = bronzeSword(); this.Equipment.Head = hat(); this.Equipment.Torso = tunic();
        this.Equipment.Legs = trousers(); this.Equipment.Hands = gloves(); this.Equipment.Feet = shoes();
        this.Gold = 5;
        this.Companions = [new Dog("Dog")];
        this.Abilities = [cleave(), pierceArmor(), rage()];
        this.SpellBook = [basicHeal(), curePoison(), fireBall(), magicMissile(), poisonSpray(), sleepSpell(), summonRat()];
        this.DamageModifiers.Weaknesses = [fireDamage()]; this.DamageModifiers.Weaknesses[0].Source = this.Equipment.Torso;
    }
}
export class FerraForgeHeart extends Humanoid {
    constructor(name) {
        super(name = "Ferra Forgeheart")
        this.Job = cleric(); this.CurrentXP = 0;
        this.Equipment.Weapon = ironWarHammer(); this.Equipment.OffHand = ironShield(); this.Equipment.Head = ironHelmet();
        this.Equipment.Torso = ironTorso(); this.Equipment.Legs = ironLegs(); this.Equipment.Hands = ironGauntlets();
        this.Equipment.Feet = ironBoots();
        this.BaseStats.SpellBook = [basicHeal(), curePoison()];
        this.DamageModifiers.Weaknesses = [lightningDamage()];
        this.DamageModifiers.Weaknesses[0].Source = this.Equipment.Torso;
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicHealer(char, allies, enemies, combatLog, round) } }
        FindSkillInSkillBook(this, barterSkill()).Level = 10; FindSkillInSkillBook(this, barterSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, barterSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, blockSkill()).Level = 10; FindSkillInSkillBook(this, blockSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, blockSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, heavyWeaponSkill()).Level = 10; FindSkillInSkillBook(this, heavyWeaponSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, heavyWeaponSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, heavyArmorSkill()).Level = 10; FindSkillInSkillBook(this, heavyArmorSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, heavyArmorSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, miningSkill()).Level = 10; FindSkillInSkillBook(this, miningSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, miningSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, restorationSkill()).Level = 10; FindSkillInSkillBook(this, restorationSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, restorationSkill()).MaxXP = 9000;
        FindSkillInSkillBook(this, smithingSkill()).Level = 10; FindSkillInSkillBook(this, smithingSkill()).CurrentXP = 7200; FindSkillInSkillBook(this, smithingSkill()).MaxXP = 9000;
    }
}
export class Giant extends Humanoid {
    constructor(name = "Giant") {
        super(name = "Giant")
        this.Equipment.Weapon = woodenclub(); this.CurrentXP = 100;
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
        this.Equipment.Weapon = ironAxe(); this.Equipment.OffHand = ironShield(); this.Equipment.Legs = loinCloth();
        this.ItemDrops = [ironAxe(), ironShield()]
    }
}
export class GnollLeader extends Gnoll {
    constructor(name = "Gnoll Leader") {
        super(name = "Gnoll Leader")
        this.Abilities = [rage()]
        this.BaseStats.HP.Current = 30; this.BaseStats.HP.Max = 30;
        this.Attributes.Strength.Value = 14; this.Attributes.Dexterity.Value = 12;
        this.CurrentXP = 50;
        this.Equipment.Weapon = ironAxe(); this.Equipment.OffHand = ironShield();
        this.Equipment.Legs = loinCloth();
        this.ItemDrops = [ironAxe(), ironShield(), loinCloth()]
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { Rager(char, allies, enemies, combatLog, round) } }
    }
}
export class GnollShaman extends Gnoll {
    constructor(name = "Gnoll Shaman") {
        super(name = "Gnoll Shaman")
        this.Attributes.Wisdom.Value = 12; this.SpellBook = [basicHeal()]
        this.CurrentXP = 20; this.Equipment.Weapon = oakStaff(); this.Equipment.Legs = loinCloth();
        this.ItemDrops = [oakStaff().loinCloth()]
        this.Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicHealer(char, allies, enemies, combatLog, round) } }
    }
}
//goblins
export class Goblin extends Humanoid {
    constructor(name = "Goblin") {
        super(name = "Goblin")
        this.Equipment.Weapon = woodenclub(); this.Equipment.OffHand = woodenShield();
        this.Equipment.Legs = loinCloth(); this.ItemDrops = [woodenclub(), woodenShield()]
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
        this.ConditionModifiers.Immunities.push(poisonCondition());
        this.ConditionModifiers.Immunities.push(sleepCondition())
    }
}
export class Ghost extends Undead {
    constructor(name  = "Ghost") {
        super(name = "Ghost")
        this.Attributes.Intelligence = 12;this.Equipment.Weapon = ghostTouch();
        this.ItemDrops = [ectoplasm()];this.DamageModifiers.Immunities = [bludeoningDamage(), piercingDamage(), slashingDamage()];
    }
}
export class Skeleton extends Undead {
    constructor(name  = "Skeleton") {
        super(name = "Skeleton")
        this.DamageModifiers.Resistances = [piercingDamage(), slashingDamage()];this.DamageModifiers.Weaknesses = [bludeoningDamage()];
        this.ItemDrops = [bones(), bronzeHelmet(), bronzeMace(), bronzeShield(), skull()]
        this.Equipment.Weapon = bronzeMace();this.Equipment.OffHand = bronzeShield();this.Equipment.Head = bronzeHelmet()
    }
}