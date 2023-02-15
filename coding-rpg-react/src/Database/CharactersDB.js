import { noCondition, poisonCondition, sleepCondition, webCondition } from "./ConditionsDB";
import { cleave, pierceArmor, rage } from "./AbilitiesDB";
import { bareBack, bareFinger, bareNeck, bite, bones, emptyOffHand, hat, gloves, ratTail, rawRatMeat, shoes, trousers, tunic, woodenShield, bareFist, bareHead, bareTorso, bareLegs, bareHands, bareFeet, woodenclub, loinCloth, dogCollar, bronzeSword, slam, rawBeef, cowLeather, ironWarHammer, ironShield, ironHelmet, ironTorso, ironLegs, ironGauntlets, ironBoots, poisonedBite, spiderSilkCloth, leatherCowl, leatherTorso, leatherLegs, leatherGloves, leatherBoots, ironDagger, ironDaggerOffHand, oakBow, ironAxe2H, ironSword, skull, bronzeShield, bronzeMace, bronzeHelmet } from "./ItemsDB";
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
        Name: name, Title: noTitle(), TitleList: [noTitle()], Log: [], Level: 1, CurrentXP: 0, MaxXP: 50, CurrentHP: 10, MaxHP: 10, HPBonus: 0, HPPenalty: 0, TempHP: 0, HPRegen: 0, HPRegenBonus: 0, HPRegenPenalty: 0,
        CurrentMP: 10, MaxMP: 10, MPBonus: 0, MPPenalty: 0, MPRegen: 0, MPRegenBonus: 0, MPRegenPenalty: 0,
        CurrentSP: 10, MaxSP: 10, SPBonus: 0, SPPenalty: 0, SPRegen: 0, SPRegenBonus: 0, SPRegenPenalty: 0,
        Strength: 10, StrBonus: 0, StrPenalty: 0, Constitution: 10, ConBonus: 0, ConPenalty: 0, Dexterity: 10, DexBonus: 0, DexPenalty: 0,
        Intelligence: 10, IntBonus: 0, IntPenalty: 0, Wisdom: 10, WisBonus: 0, WisPenalty: 0, Charisma: 10, ChaBonus: 0, ChaPenalty: 0,
        WillPower: 10, WlpBonus: 0, WlpPenalty: 0, Perception: 10, PrcBonus: 0, PrcPenalty: 0, Luck: 10, LckBonus: 0, LckPenalty: 0,
        Beauty: 10, BtyBonus: 0, BtyPenalty: 0, Speed: 10, SpdBonus: 0, SpdPenalty: 0, ShieldBonus: 0, ShieldPenalty: 0, AttackBonus: 0, AttackPenalty: 0,
        Weapon: bareFist(), OffHand: emptyOffHand(), Head: bareHead(), Torso: bareTorso(), Legs: bareLegs(), Hands: bareHands(), Feet: bareFeet(),
        Back: bareBack(), Neck: bareNeck(), Ring: bareFinger(), Inventory: [], Gold: 0, Bank: [], BankGold: 0,
        Companions: [], Journal: [], Abilities: [], SpellBook: [], SkillBook: allSkills(), Reputation: [], Relationships: [],
        Buffs: [], DeBuffs: [], Condition: noCondition(), ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [],
        Tactics: { Tactics(char, allies, enemies, combatLog, round) { BasicAttacker(char, allies, enemies, combatLog, round) } },
        ItemDrops: [], CurrentLocation: daleTown(this, 0, 0), Map: [daleTown(this, 0, 0)], AdjacentLocations: startingAdjacentLocations(), Time: { Day: 0, Hour: 9, TimeOfDay: "Morning" }
    }
    return char;
}
export function hero() {
    var hero = character("Hero")
    hero.Log = ["Starting Game"]; hero.Weapon = bronzeSword(); hero.Head = hat(); hero.Torso = tunic(); hero.Legs = trousers(); hero.Hands = gloves(); hero.Feet = shoes(); hero.Inventory = [dogCollar()]; hero.Gold = 5; hero.Companions = [dog("Dog")]; hero.Abilities = [cleave(), pierceArmor(), rage()]; hero.SpellBook = [basicHeal(), curePoison(), fireBall(), magicMissile(), poisonSpray(), sleepSpell(), summonRat()]; hero.Weaknesses = [fireDamage()]; hero.Weaknesses[0].Source = hero.Torso;
    hero.Journal = [];
    hero.Inventory = [ironSword()]
    return hero
}
//companions
export function ferraForgeHeart() {
    var hero = character("Ferra Forgeheart")
    hero.Weapon = ironWarHammer(); hero.OffHand = ironShield(); hero.Head = ironHelmet(); hero.Torso = ironTorso(); hero.Legs = ironLegs(); hero.Hands = ironGauntlets(); hero.Feet = ironBoots(); hero.SpellBook = [basicHeal(), curePoison()]; hero.Weaknesses = [lightningDamage()]; hero.Weaknesses[0].Source = hero.Torso;
    //hero.DexPenalty = 3; hero.SpdPenalty = 3; 
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
    beast.Weapon = bite();
    return beast
}
export function cow() {
    var cow = beast("Cow")
    cow.Weapon = slam(); cow.ItemDrops = [cowLeather(), rawBeef()]
    return cow;
}
export function dog(name) {
    var dog = beast(name)
    //dog.Neck = dogCollar();
    dog.Abilities = [rage()]
    return dog;
}
export function giantRat() {
    var rat = beast("Giant Rat")
    rat.CurrentXP = 10; rat.Strength = 14; rat.ItemDrops = [rawRatMeat(), ratTail()]
    return rat;
}
export function giantSpider() {
    var spider = beast("Giant Spider")
    spider.CurrentMP = 20; spider.MaxMP = 20; spider.CurrentHP = 20; spider.MaxHP = 10;
    spider.CurrentXP = 50; spider.Strength = 12; spider.Weapon = poisonedBite(); spider.ConditionImmunities = [webCondition(), poisonCondition()]; spider.Immunities(poisonDamage()); spider.ItemDrops = [spiderSilkCloth()]
    bandit.Tactics = { Tactics(char, allies, enemies, combatLog, round) { spiderSummoner(char, allies, enemies, combatLog, round) } }
    return spider;
}
export function rat() {
    var rat = beast("Rat")
    rat.CurrentXP = 5; rat.CurrentHP = 5; rat.MaxHP = 5; rat.CurrentMP = 5; rat.MaxMP = 5; rat.CurrentSP = 5; rat.MaxSP = 5; rat.ItemDrops = [rawRatMeat(), ratTail()]
    return rat;
}
export function spider() {
    var spider = beast("Spider")
    spider.CurrentXP = 10; spider.Dexterity = 12; spider.Speed = 12; spider.Weapon = poisonedBite(); spider.ConditionImmunities = [webCondition(), poisonCondition()]; spider.Immunities(poisonDamage()); spider.ItemDrops = [spiderSilkCloth()]
    return spider;
}
export function worg() {
    var worg = beast("Worg")
    worg.CurrentXP = 10; worg.Strength = 14; worg.CurrentHP = 20; worg.MaxHP = 20;
    return worg;
}
//construct
export function construct(name) {
    var construct = character("Construct");
    construct.ConditionImmunities = [poisonCondition(), sleepCondition()]
    return construct;
}
export function scareCrow() {
    var scareCrow = construct("Scarecrow")
    scareCrow.CurrentXP = 10;
    scareCrow.Weaknesses = [fireDamage()]
    return scareCrow;
}
//humanoid
//bandits
export function bandit() {
    var bandit = character("Bandit"); bandit.Head = leatherCowl(); bandit.Torso = leatherTorso(); bandit.Legs = leatherLegs(); bandit.Hands = leatherGloves(); bandit.Feet = leatherBoots();
    bandit.Weapon = ironDagger(); bandit.Offhand = ironDaggerOffHand(); bandit.ItemDrops = [leatherBoots(), leatherCowl(), leatherGloves(), leatherLegs(), leatherTorso(), ironDagger(), ironDaggerOffHand()]
}
export function banditArcher() {
    var bandit = character("Bandit Archer"); bandit.Head = leatherCowl(); bandit.Torso = leatherTorso(); bandit.Legs = leatherLegs(); bandit.Hands = leatherGloves(); bandit.Feet = leatherBoots();
    bandit.Weapon = oakBow()
    bandit.ItemDrops = [leatherBoots(), leatherCowl(), leatherGloves(), leatherLegs(), leatherTorso(), oakBow()]
}
export function banditBerseker() {
    var bandit = character("Bandit Berserker"); bandit.Head = leatherCowl(); bandit.Torso = leatherTorso(); bandit.Legs = leatherLegs(); bandit.Hands = leatherGloves(); bandit.Feet = leatherBoots();
    bandit.Weapon = ironAxe2H(); bandit.ItemDrops = [leatherBoots(), leatherCowl(), leatherGloves(), leatherLegs(), leatherTorso(), ironAxe2H()]
    bandit.Abilities = [rage()]
    bandit.Tactics = { Tactics(char, allies, enemies, combatLog, round) { Rager(char, allies, enemies, combatLog, round) } }
}
export function giant() {
    var giant = character("Giant")
    giant.Weapon = woodenclub();
    giant.CurrentSP = 100;
    giant.StrBonus = 20;
    return giant;
}
export function goblin() {
    var goblin = character("Goblin")
    goblin.CurrentXP = 10; goblin.Weapon = woodenclub(); goblin.OffHand = woodenShield(); goblin.Legs = loinCloth(); goblin.ItemDrops = [woodenclub(), woodenShield()]
    return goblin
}
export function goblinBoss() {
    var goblin = character("Goblin Boss")
    goblin.CurrentHP = 15; goblin.MaxHP = 15; goblin.CurrentXP = 20; goblin.Weapon = woodenclub(); goblin.OffHand = woodenShield(); goblin.Legs = loinCloth(); goblin.ItemDrops = [woodenclub(), woodenShield()]
    return goblin
}
//undead
export function undead(name) {
    var undead = character(name)
    undead.ConditionImmunities(poisonCondition()); undead.ConditionImmunities(sleepCondition())
    return undead;
}
export function skeleton() {
    var skeleton = undead("Skeleton")
    skeleton.Resistances.push(piercingDamage()); skeleton.Resistances.push(slashingDamage()); skeleton.Weaknesses.push(bludeoningDamage()); skeleton.ItemDrops = [bones(), bronzeHelmet(), bronzeMace(), bronzeShield(), skull()]
    skeleton.Weapon = bronzeMace(); skeleton.OffHand = bronzeShield(); skeleton.Head = bronzeHelmet()
    return skeleton;
}