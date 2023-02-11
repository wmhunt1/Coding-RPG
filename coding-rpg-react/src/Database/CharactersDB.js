import { noCondition, poisonCondition, sleepCondition } from "./ConditionsDB";
import { cleave, pierceArmor, rage } from "./AbilitiesDB";
import { bareBack, bareFinger, bareNeck, bite, emptyOffHand, furFeet, furHands, furHead, furLegs, furTorso, hat, gloves, ratTail, rawRatMeat, shoes, trousers, tunic, woodenShield, healingPotion, bronzeDagger, bareFist, bareHead, bareTorso, bareLegs, bareHands, bareFeet, woodenclub, loinCloth, dogCollar, bronzeSword } from "./ItemsDB";
import { daleTown } from "./LocationsDB";
import { basicHeal, curePoison, fireBall, magicMissile, poisonSpray, sleepSpell, summonRat } from "./SpellsDB"
import { BasicAttacker } from "./TacticsDB";
import { acrobaticsSkill, alchemySkill, alterationSkill, athleticsSkill, axeSkill, barterSkill, blockSkill, bluntSKill, conjurationSkill, cookingSkill, craftingSkill, destructionSkill, enchantingSKill, farmingSkill, firemakingSkill, fishingSkill, fletchingSkill, heavyArmorSkill, huntingSkill, illusionSkill, lightArmorSkill, lockpickingSkill, longBladeSkill, mediumArmorSkill, miningSkill, persuationSkill, rangedSkill, restorationSkill, senseSkill, shortBladeSkill, smithingSkill, spearSkill, stealthSkill, survivalSkill, unArmedSkill, unArmoredSkill, woodcuttingSkill } from "./SkillsDB";
import { noTitle } from "./TitlesDB";
import { bludeoningDamage, fireDamage, piercingDamage, slashingDamage } from "./DamageTypesDB";

export function character(name) {
    var char = { Name: name, Title: noTitle(), TitleList: [noTitle()], Log: [], Level: 1, CurrentXP: 0, MaxXP: 50, CurrentHP: 10, MaxHP: 10, HPBonus: 0, HPPenalty: 0, TempHP: 0, HPRegen: 0, HPRegenBonus: 0, HPRegenPenalty: 0, CurrentMP: 10, MaxMP: 10, MPBonus: 0, MPPenalty: 0, MPRegen: 0, MPRegenBonus: 0, MPRegenPenalty: 0, CurrentSP: 10, MaxSP: 10, SPBonus: 0, SPPenalty: 0, SPRegen: 0, SPRegenBonus: 0, SPRegenPenalty: 0, Strength: 10, StrBonus: 0, StrPenalty: 0, Constitution: 10, ConBonus: 0, ConPenalty: 0, Dexterity: 10, DexBonus: 0, DexPenalty: 0, Intelligence: 10, IntBonus: 0, IntPenalty: 0, Wisdom: 10, WisBonus: 0, WisPenalty: 0, Charisma: 10, ChaBonus: 0, ChaPenalty: 0, WillPower: 10, WlpBonus: 0, WlpPenalty: 0, Perception: 10, PrcBonus: 0, PrcPenalty: 0, Luck: 10, LckBonus: 0, LckPenalty: 0, Beauty: 10, BtyBonus: 0, BtyPenalty: 0, Speed: 10, SpdBonus: 0, SpdPenalty: 0, Weapon: bareFist(), OffHand: emptyOffHand(), Head: bareHead(), Torso: bareTorso(), Legs: bareLegs(), Hands: bareHands(), Feet: bareFeet(), Back: bareBack(), Neck: bareNeck(), Ring: bareFinger(), Inventory: [], Gold: 0, Companions: [], Journal: [], Abilities: [], SpellBook: [], SkillBook: [alchemySkill(), acrobaticsSkill(),alterationSkill(1), athleticsSkill(), axeSkill(1), barterSkill(), blockSkill(1), bluntSKill(1), conjurationSkill(1), cookingSkill(), craftingSkill(), destructionSkill(1), enchantingSKill(1), farmingSkill(), firemakingSkill(), fishingSkill(), fletchingSkill(), heavyArmorSkill(1), huntingSkill(), illusionSkill(1), lightArmorSkill(1), lockpickingSkill(), longBladeSkill(1), mediumArmorSkill(1), miningSkill(), persuationSkill(), rangedSkill(1), restorationSkill(1), shortBladeSkill(1), smithingSkill(), spearSkill(1), stealthSkill(), survivalSkill(), unArmedSkill(1), unArmoredSkill(1), senseSkill(), woodcuttingSkill()], Buffs: [], DeBuffs: [], Condition: noCondition(), ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [], Tactics(char, allies, enemies, combatLog) { BasicAttacker(char, allies, enemies, combatLog) }, ItemDrops: [], CurrentLocation: daleTown(), Map: [daleTown()], Time: {Day: 0, Hour:9, TimeOfDay:"Morning"} }
    return char;
}
export function hero() {
    var hero = character("Hero")
    hero.Log = ["Starting Game"]; hero.Weapon = bronzeSword(); hero.Head = hat(); hero.Torso = tunic(); hero.Legs = trousers(); hero.Hands = gloves(); hero.Feet = shoes(); hero.Inventory = [healingPotion(), bronzeDagger()]; hero.Gold = 5; hero.Companions = [dog()]; hero.Abilities = [cleave(), pierceArmor(), rage()]; hero.SpellBook = [basicHeal(), curePoison(), fireBall(), magicMissile(), poisonSpray(), sleepSpell(), summonRat()]; hero.Weaknesses = [fireDamage()]; hero.Weaknesses[0].Source = hero.Torso;
    return hero
}
//beast
export function beast(name) {
    var beast = character(name)
    beast.Weapon = bite(); beast.Head = furHead(); beast.Torso = furTorso(); beast.Legs = furLegs(); beast.Hands = furHands(); beast.Feet = furFeet();
    return beast
}
export function dog() {
    var dog = beast("Dog")
    dog.Neck = dogCollar();
    return dog;
}
export function giantRat() {
    var rat = beast("Giant Rat")
    rat.CurrentXP = 10; rat.Strength = 14; rat.ItemDrops = [rawRatMeat(), ratTail()]
    return rat;
}
export function rat() {
    var rat = beast("Rat")
    rat.CurrentXP = 5; rat.CurrentHP = 5; rat.MaxHP = 5; rat.CurrentMP = 5; rat.MaxMP = 5; rat.CurrentSP = 5; rat.MaxSP = 5; rat.ItemDrops = [rawRatMeat(), ratTail()]
    return rat;
}
//humanoid
export function goblin() {
    var goblin = character("Goblin")
    goblin.CurrentXP = 10; goblin.Weapon = woodenclub(); goblin.OffHand = woodenShield(); goblin.Legs = loinCloth();
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
    skeleton.Resistances.push(piercingDamage()); skeleton.Resistances.push(slashingDamage()); skeleton.Weaknesses.push(bludeoningDamage())
    skeleton.Weapon = woodenclub()
    return skeleton;
}