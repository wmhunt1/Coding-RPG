import { noCondition } from "./Conditions";
import { cleave,pierceArmor, rage} from "./Abilities";
import { bareBack, bareFinger, bareNeck, bite, emptyOffHand, furFeet, furHands, furHead, furLegs, furTorso, hat, gloves, ratTail, rawRatMeat, shoes, sword, trousers, tunic, woodenShield, healingPotion, bronzeDagger, bareFist, bareHead, bareTorso, bareLegs, bareHands, bareFeet } from "./Items";
import { startingLocation } from "./Locations";
import { basicHeal, curePoison, fireBall, magicMissile, poisonSpray, sleepSpell, summonRat } from "./Spells"
import { BasicAttacker } from "./Tactics";
import { cookingSkill, firemakingSkill, fishingSkill, fletchingSkill, miningSkill, smithingSkill, woodcuttingSkill } from "./Skills";
import { noTitle } from "./Titles";

export function character(name) {
    var char = { Name: name, Title: noTitle(), TitleList: [noTitle()], Log: [], Level: 1, CurrentXP: 0, MaxXP: 50, CurrentHP: 10, MaxHP: 10, CurrentMP: 10, MaxMP: 10, CurrentSP: 10, MaxSP: 10, Strength: 10, StrBonus: 0, StrPenalty: 0, Constitution: 10, ConBonus: 0, ConPenalty: 0, Dexterity: 10, DexBonus: 0, DexPenalty: 0, Intelligence: 10, IntBonus: 0, IntPenalty: 0, Wisdom: 10, Charisma: 10, WillPower: 10, WlpBonus: 0, WlpPenalty: 0, Perception: 10, Luck: 10, Beauty: 10, Speed: 10, Weapon: bareFist(), OffHand: emptyOffHand(), Head: bareHead(), Torso: bareTorso(), Legs: bareLegs(), Hands: bareHands(), Feet: bareFeet(), Back: bareBack(), Neck: bareNeck(), Ring: bareFinger(), Inventory: [], Gold: 0, Companions: [], Journal: [], Abilities: [], SpellBook: [], SkillBook: [cookingSkill(), firemakingSkill(), fishingSkill(), fletchingSkill(), miningSkill(), smithingSkill(), woodcuttingSkill()], Buffs: [], DeBuffs: [], Condition: noCondition(), ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [], Tactics(char, allies, enemies, combatLog) { BasicAttacker(char, allies, enemies, combatLog) }, ItemDrops: [], CurrentLocation: startingLocation() }
    return char;
}
export function hero() {
    var hero = character("Hero")
    hero.Log = ["Starting Game"]; hero.Weapon = sword(); hero.OffHand = woodenShield(); hero.Head = hat(); hero.Torso = tunic(); hero.Legs = trousers(); hero.Hands = gloves(); hero.Feet = shoes(); hero.Inventory = [healingPotion(), bronzeDagger()]; hero.Gold = 5; hero.Companions = [dog()]; hero.Abilities = [cleave(),pierceArmor, rage()]; hero.SpellBook = [basicHeal(), curePoison(), fireBall(), magicMissile(), poisonSpray(), sleepSpell(), summonRat()];
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
    return dog;
}
export function rat() {
    var rat = beast("Rat")
    rat.CurrentXP = 10; rat.CurrentHP = 5; rat.MaxHP = 5; rat.CurrentMP = 5; rat.MaxMP = 5; rat.CurrentSP = 5; rat.MaxSP = 5; rawRatMeat.ItemDrops=[rawRatMeat(), ratTail()]
    return rat;
}
//humanoid