import { noCondition, poisonCondition, sleepCondition, webCondition } from "./ConditionsDB";
import { cleave, pierceArmor, rage } from "./AbilitiesDB";
import { bareBack, bareFinger, bareNeck, bite, bones, emptyOffHand, hat, gloves, ratTail, rawRatMeat, shoes, trousers, tunic, woodenShield, bareFist, bareHead, bareTorso, bareLegs, bareHands, bareFeet, woodenclub, loinCloth, dogCollar, bronzeSword, slam, rawBeef, cowLeather, ironWarHammer, ironShield, ironHelmet, ironTorso, ironLegs, ironGauntlets, ironBoots, poisonedBite, spiderSilkCloth, leatherCowl, leatherTorso, leatherLegs, leatherGloves, leatherBoots, ironDagger, ironDaggerOffHand, oakBow, ironAxe2H, ironSword, skull, bronzeShield, bronzeMace, bronzeHelmet, wolfFur, clawSlash, bearFur } from "./ItemsDB";
import { daleTown } from "./LocationsDB";
import { basicHeal, curePoison, fireBall, magicMissile, poisonSpray, sleepSpell, summonRat } from "./SpellsDB"
import { BasicAttacker, BasicHealer, Rager, spiderSummoner } from "./TacticsDB";
import { allSkills, barterSkill, blockSkill, bluntSKill, heavyArmorSkill, miningSkill, restorationSkill, smithingSkill } from "./SkillsDB";
import { noTitle } from "./TitlesDB";
import { bludeoningDamage, fireDamage, lightningDamage, piercingDamage, poisonDamage, slashingDamage } from "./DamageTypesDB";
import { startingAdjacentLocations } from "./MapsDB";
import { FindSkillInSkillBook } from "../Scripts/SkillScripts";

export function character(name) {
    var char = {
        Name: name, Title: noTitle(), TitleList: [noTitle()], Log: [], Level: 1, CurrentXP: 10, MaxXP: 50,
        BaseStats: { Attack: { Bonus: 0, Penalty: 0 }, Defense: { Bonus: 0, Penalty: 0 }, HP: { Current: 10, Max: 10, Bonus: 0, Penalty: 0, Regen: 0, RegenBonus: 0, RegenPenalty: 0, Temp: 0 }, MP: { Current: 10, Max: 10, Bonus: 0, Penalty: 0, Regen: 0, RegenBonus: 0, RegenPenalty: 0 }, SP: { Current: 10, Max: 10, Bonus: 0, Penalty: 0, Regen: 0, RegenBonus: 0, RegenPenalty: 0 } },
        Attributes: {
            Beauty: { Value: 10, Bonus: 0, Penalty: 0 }, Charisma: { Value: 10, Bonus: 0, Penalty: 0 }, Constitution: { Value: 10, Bonus: 0, Penalty: 0 },
            Dexterity: { Value: 10, Bonus: 0, Penalty: 0 }, Intelligence: { Value: 10, Bonus: 0, Penalty: 0 }, Luck: { Value: 10, Bonus: 0, Penalty: 0 },
            Perception: { Value: 10, Bonus: 0, Penalty: 0 }, Speed: { Value: 10, Bonus: 0, Penalty: 0 }, Strength: { Value: 10, Bonus: 0, Penalty: 0 },
            WillPower: { Value: 10, Bonus: 0, Penalty: 0 }, Wisdom: { Value: 10, Bonus: 0, Penalty: 0 }
        },
        ConditionModifiers: { Immunities: [], Resistances: [], Weaknesses: [] },
        DamageModifiers: { Immunities: [], Resistances: [], Weaknesses: [] },
        Equipment: {
            Back: bareBack(), Feet: bareFeet(), Hands: bareHands(), Head: bareHead(), Legs: bareLegs(), Neck: bareNeck(), OffHand: emptyOffHand(), Ring: bareFinger(), Torso: bareTorso(), Weapon: bareFist()
        },
        Inventory: [], Gold: 0, Bank: [], BankGold: 0,
        Companions: [], Journal: [], Abilities: [], SpellBook: [], SkillBook: allSkills(), Reputation: [], Relationships: [],
        Buffs: [], DeBuffs: [], Condition: noCondition(),
        Tactics: { Tactics(char, allies, enemies, combatLog, round) { BasicAttacker(char, allies, enemies, combatLog, round) } },
        ItemDrops: [], CurrentLocation: daleTown(this, 0, 0), Map: [daleTown(this, 0, 0)], AdjacentLocations: startingAdjacentLocations(), Time: { Day: 0, Hour: 9, TimeOfDay: "Morning" }
    }
    return char;
}
export function hero() {
    var hero = character("Hero")
    hero.CurrentXP = 0; hero.Attributes.Strength.Value = 20;
    hero.Log = ["Starting Game"]; hero.Equipment.Weapon = bronzeSword(); hero.Equipment.Head = hat(); hero.Equipment.Torso = tunic(); hero.Equipment.Legs = trousers(); hero.Equipment.Hands = gloves(); hero.Equipment.Feet = shoes(); hero.Inventory = [dogCollar()]; hero.Gold = 5; hero.Companions = [dog("Dog")]; hero.Abilities = [cleave(), pierceArmor(), rage()]; hero.BaseStats.SpellBook = [basicHeal(), curePoison(), fireBall(), magicMissile(), poisonSpray(), sleepSpell(), summonRat()]; hero.DamageModifiers.Weaknesses = [fireDamage()]; hero.DamageModifiers.Weaknesses[0].Source = hero.Equipment.Torso;
    hero.Journal = [];
    hero.Inventory = [ironSword()]
    return hero
}
//companions
export function ferraForgeHeart() {
    var hero = character("Ferra Forgeheart")
    hero.CurrentXP = 0;
    hero.Equipment.Weapon = ironWarHammer(); hero.Equipment.OffHand = ironShield(); hero.Equipment.Head = ironHelmet(); hero.Equipment.Torso = ironTorso(); hero.Equipment.Legs = ironLegs(); hero.Equipment.Hands = ironGauntlets(); hero.Equipment.Feet = ironBoots(); hero.BaseStats.SpellBook = [basicHeal(), curePoison()]; hero.DamageModifiers.Weaknesses = [lightningDamage()]; hero.DamageModifiers.Weaknesses[0].Source = hero.Equipment.Torso;
    //hero.Attributes.Dexterity.Penalty = 3; hero.Attributes.Speed.Penalty = 3; 
    hero.Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicHealer(char, allies, enemies, combatLog, round) } }
    FindSkillInSkillBook(hero, barterSkill()).Level = 10;
    FindSkillInSkillBook(hero, barterSkill()).CurrentXP = 7200;
    FindSkillInSkillBook(hero, barterSkill()).MaxXP = 9000;
    FindSkillInSkillBook(hero, blockSkill()).Level = 10;
    FindSkillInSkillBook(hero, blockSkill()).CurrentXP = 7200;
    FindSkillInSkillBook(hero, blockSkill()).MaxXP = 9000;
    FindSkillInSkillBook(hero, bluntSKill()).Level = 10;
    FindSkillInSkillBook(hero, bluntSKill()).CurrentXP = 7200;
    FindSkillInSkillBook(hero, bluntSKill()).MaxXP = 9000;
    FindSkillInSkillBook(hero, heavyArmorSkill()).Level = 10;
    FindSkillInSkillBook(hero, heavyArmorSkill()).CurrentXP = 7200;
    FindSkillInSkillBook(hero, heavyArmorSkill()).MaxXP = 9000;
    FindSkillInSkillBook(hero, miningSkill()).Level = 10;
    FindSkillInSkillBook(hero, miningSkill()).CurrentXP = 7200;
    FindSkillInSkillBook(hero, miningSkill()).MaxXP = 9000;
    FindSkillInSkillBook(hero, restorationSkill()).Level = 10;
    FindSkillInSkillBook(hero, restorationSkill()).CurrentXP = 7200;
    FindSkillInSkillBook(hero, restorationSkill()).MaxXP = 9000;
    FindSkillInSkillBook(hero, smithingSkill()).Level = 10;
    FindSkillInSkillBook(hero, smithingSkill()).CurrentXP = 7200;
    FindSkillInSkillBook(hero, smithingSkill()).MaxXP = 9000;
    return hero
}
//beast
export function beast(name) {
    var beast = character(name)
    beast.Equipment.Weapon = bite();
    return beast
}
export function bear() {
    var bear = beast("Bear")
    bear.BaseStats.HP.Current = 20; bear.BaseStats.HP.Max = 20; bear.Attributes.Strength.Value = 14; bear.Attributes.Constitution.Value = 14; bear.Equipment.Weapon = clawSlash(); bear.ItemDrops = [bearFur()]
    return bear;
}
export function cow() {
    var cow = beast("Cow")
    cow.Equipment.Weapon = slam(); cow.ItemDrops = [cowLeather(), rawBeef()]
    return cow;
}
export function dog(name) {
    var dog = beast(name)
    return dog;
}
export function giantRat() {
    var rat = beast("Giant Rat")
    rat.CurrentXP = 10; rat.Attributes.Strength.Value = 14; rat.ItemDrops = [rawRatMeat(), ratTail()]
    return rat;
}
export function giantSpider() {
    var spider = beast("Giant Spider")
    spider.BaseStats.MP.Current = 20; spider.BaseStats.MP.Max = 20; spider.BaseStats.HP.Current = 20; spider.BaseStats.HP.Max = 10;
    spider.CurrentXP = 50; spider.Attributes.Strength.Value = 12; spider.Equipment.Weapon = poisonedBite(); spider.ConditionModifiers.Immunities = [webCondition(), poisonCondition()]; spider.Immunities(poisonDamage()); spider.ItemDrops = [spiderSilkCloth()]
    bandit.Tactics = { Tactics(char, allies, enemies, combatLog, round) { spiderSummoner(char, allies, enemies, combatLog, round) } }
    return spider;
}
export function rat() {
    var rat = beast("Rat")
    rat.CurrentXP = 5; rat.BaseStats.HP.Current = 5; rat.BaseStats.HP.Max = 5; rat.BaseStats.MP.Current = 5; rat.BaseStats.MP.Max = 5; rat.BaseStats.SP.Current = 5; rat.BaseStats.SP.Max = 5; rat.ItemDrops = [rawRatMeat(), ratTail()]
    return rat;
}
export function spider() {
    var spider = beast("Spider")
    spider.CurrentXP = 10; spider.Attributes.Dexterity.Value = 12; spider.Attributes.Speed.Value = 12; spider.Equipment.Weapon = poisonedBite(); spider.ConditionModifiers.Immunities = [webCondition(), poisonCondition()]; spider.Immunities(poisonDamage()); spider.ItemDrops = [spiderSilkCloth()]
    return spider;
}
export function wolf() {
    var wolf = beast("Wolf"); wolf.Attributes.Dexterity.Value = 12; wolf.Attributes.Speed.Value = 12; wolf.Equipment.Weapon = bite(); wolf.ItemDrops = [wolfFur()]
    return wolf;
}
export function worg() {
    var worg = beast("Worg")
    worg.CurrentXP = 10; worg.Attributes.Strength.Value = 14; worg.BaseStats.HP.Current = 20; worg.BaseStats.HP.Max = 20;
    return worg;
}
//construct
export function construct(name) {
    var construct = character("Construct");
    construct.ConditionModifiers.Immunities = [poisonCondition(), sleepCondition()]
    return construct;
}
export function scareCrow() {
    var scareCrow = construct("Scarecrow")
    scareCrow.CurrentXP = 25;
    scareCrow.DamageModifiers.Weaknesses = [fireDamage()]
    return scareCrow;
}
//humanoid
//bandits
export function bandit() {
    var bandit = character("Bandit");
    bandit.Equipment.Head = leatherCowl(); bandit.Equipment.Torso = leatherTorso(); bandit.Equipment.Legs = leatherLegs(); bandit.Equipment.Hands = leatherGloves(); bandit.Equipment.Feet = leatherBoots();
    bandit.Equipment.Weapon = ironDagger(); bandit.Equipment.OffHand = ironDaggerOffHand(); bandit.ItemDrops = [leatherBoots(), leatherCowl(), leatherGloves(), leatherLegs(), leatherTorso(), ironDagger(), ironDaggerOffHand()]
    return bandit;
}
export function banditArcher() {
    var bandit = character("Bandit Archer"); bandit.Equipment.Head = leatherCowl(); bandit.Equipment.Torso = leatherTorso(); bandit.Equipment.Legs = leatherLegs(); bandit.Equipment.Hands = leatherGloves(); bandit.Equipment.Feet = leatherBoots();
    bandit.Equipment.Weapon = oakBow()
    bandit.ItemDrops = [leatherBoots(), leatherCowl(), leatherGloves(), leatherLegs(), leatherTorso(), oakBow()]
    return bandit;
}
export function banditBerseker() {
    var bandit = character("Bandit Berserker"); bandit.Equipment.Head = leatherCowl(); bandit.Equipment.Torso = leatherTorso(); bandit.Equipment.Legs = leatherLegs(); bandit.Equipment.Hands = leatherGloves(); bandit.Equipment.Feet = leatherBoots();
    bandit.Equipment.Weapon = ironAxe2H(); bandit.ItemDrops = [leatherBoots(), leatherCowl(), leatherGloves(), leatherLegs(), leatherTorso(), ironAxe2H()]
    bandit.Abilities = [rage()]
    bandit.Tactics = { Tactics(char, allies, enemies, combatLog, round) { Rager(char, allies, enemies, combatLog, round) } }
    return bandit;
}
export function giant() {
    var giant = character("Giant")
    giant.Equipment.Weapon = woodenclub();
    giant.CurrentXP = 100;
    giant.Attributes.Strength.Bonus = 10;
    return giant;
}
export function goblin() {
    var goblin = character("Goblin")
    goblin.CurrentXP = 10; goblin.Equipment.Weapon = woodenclub(); goblin.Equipment.OffHand = woodenShield(); goblin.Equipment.Legs = loinCloth(); goblin.ItemDrops = [woodenclub(), woodenShield()]
    return goblin
}
export function goblinBoss() {
    var goblin = character("Goblin Boss")
    goblin.BaseStats.HP.Current = 15; goblin.BaseStats.HP.Max = 15; goblin.CurrentXP = 20; goblin.Equipment.Weapon = woodenclub(); goblin.Equipment.OffHand = woodenShield(); goblin.Equipment.Legs = loinCloth(); goblin.ItemDrops = [woodenclub(), woodenShield()]
    return goblin
}
//undead
export function undead(name) {
    var undead = character(name)
    undead.ConditionModifiers.Immunities.push(poisonCondition()); undead.ConditionModifiers.Immunities.push(sleepCondition())
    return undead;
}
export function skeleton() {
    var skeleton = undead("Skeleton")
    skeleton.DamageModifiers.Resistances.push(piercingDamage()); skeleton.DamageModifiers.Resistances.push(slashingDamage()); skeleton.DamageModifiers.Weaknesses.push(bludeoningDamage()); skeleton.ItemDrops = [bones(), bronzeHelmet(), bronzeMace(), bronzeShield(), skull()]
    skeleton.Equipment.Weapon = bronzeMace(); skeleton.Equipment.OffHand = bronzeShield(); skeleton.Equipment.Head = bronzeHelmet()
    return skeleton;
}