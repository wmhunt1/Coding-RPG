import { noCondition } from "./Conditions";
import { cleave, rage, sneakAttack } from "./Abilities";
import { bareBack, bareFinger, bareNeck, bite, emptyOffHand, furFeet, furHands, furHead, furLegs, furTorso, hat, gloves, ratTail, rawRatMeat, shoes, sword, trousers, tunic, woodenShield, healingPotion, bronzeDagger } from "./Items";
import { basicHeal, curePoison, fireBall, magicMissile, poisonSpray, sleepSpell, summonRat } from "./Spells"
import { BasicAttacker } from "./Tactics";
import { cookingSkill, firemakingSkill, fishingSkill, fletchingSkill, miningSkill, smithingSkill, woodcuttingSkill } from "./Skills";

export function hero() {
    var hero = { Name: "Hero", Log: ["Starting Game"], Level: 1, CurrentXP: 50, MaxXP: 50, CurrentHP: 10, MaxHP: 10, CurrentMP: 10, MaxMP: 10, CurrentSP: 10, MaxSP: 10, Strength: 10, StrBonus: 0, StrPenalty: 0, Constitution: 10, ConBonus: 0, ConPenalty: 0, Dexterity: 10, DexBonus: 0, DexPenalty: 0, Intelligence: 10, IntBonus: 0, IntPenalty: 0, Wisdom: 10, Charisma: 10, WillPower: 10, WlpBonus: 0, WlpPenalty: 0, Perception: 10, Luck: 10, Beauty: 10, Speed: 10, Weapon: sword(), OffHand: woodenShield(), Head: hat(), Torso: tunic(), Legs: trousers(), Hands: gloves(), Feet: shoes(), Back: bareBack(), Neck: bareNeck(), Ring: bareFinger(), Inventory: [healingPotion(), bronzeDagger()], Gold: 5, Companions: [dog()], Journal: [], Abilities: [cleave(), rage(), sneakAttack()], SpellBook: [basicHeal(),curePoison(), fireBall(), magicMissile(), poisonSpray(), sleepSpell(), summonRat()], SkillBook: [cookingSkill(), firemakingSkill(), fishingSkill(), fletchingSkill(), miningSkill(), smithingSkill(), woodcuttingSkill()], Buffs: [], DeBuffs: [], Condition: noCondition(), ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [], Tactics(char, allies, enemies, combatLog) { BasicAttacker(char, allies, enemies, combatLog) }, ItemDrops: [] }
    return hero
}
export function dog() {
    var dog = { Name: "Dog", Log: [], Level: 1, CurrentXP: 0, MaxXP: 50, CurrentHP: 10, MaxHP: 10, CurrentMP: 10, MaxMP: 10, CurrentSP: 10, MaxSP: 10, Strength: 10, StrBonus: 0, StrPenalty: 0, Constitution: 10, ConBonus: 0, ConPenalty: 0, Dexterity: 10, DexBonus: 0, DexPenalty: 0, Intelligence: 10, IntBonus: 0, IntPenalty: 0, Wisdom: 10, Charisma: 10, WillPower: 10, WlpBonus: 0, WlpPenalty: 0, Perception: 10, Luck: 10, Beauty: 10, Speed: 10, Weapon: bite(), OffHand: emptyOffHand(), Head: furHead(), Torso: furTorso(), Legs: furLegs(), Hands: furHands(), Feet: furFeet(), Back: bareBack(), Neck: bareNeck(), Ring: bareFinger(), Inventory: [], Gold: 5, Companions: [], Abilities: [], SpellBook: [], SkillBook: [], Buffs: [], DeBuffs: [], Condition: noCondition(), ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [], ItemDrops: [], Tactics(char, allies, enemies, combatLog, round) { BasicAttacker(char, allies, enemies, combatLog, round) } }
    return dog;
}
export function rat() {
    var rat = { Name: "Rat", Log: [], Level: 1, CurrentXP: 10, MaxXP: 50, CurrentHP: 5, MaxHP: 5, CurrentMP: 5, MaxMP: 5, CurrentSP: 5, MaxSP: 5, Strength: 10, StrBonus: 0, StrPenalty: 0, Constitution: 10, ConBonus: 0, ConPenalty: 0, Dexterity: 10, DexBonus: 0, DexPenalty: 0, Intelligence: 10, IntBonus: 0, IntPenalty: 0, Wisdom: 10, Charisma: 10, WillPower: 10, WlpBonus: 0, WlpPenalty: 0, Perception: 10, Luck: 10, Beauty: 10, Speed: 10, Weapon: bite(), OffHand: emptyOffHand(), Head: furHead(), Torso: furTorso(), Legs: furLegs(), Hands: furHands(), Feet: furFeet(), Back: bareBack(), Neck: bareNeck(), Ring: bareFinger(), Inventory: [], Gold: 5, Companions: [], Abilities: [], SpellBook: [], SkillBook: [], Buffs: [], DeBuffs: [], Condition: noCondition(), ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], Immunities: [], Resistances: [], Weaknesses: [], ItemDrops: [rawRatMeat(), ratTail()], Tactics(char, allies, enemies, combatLog, round) { BasicAttacker(char, allies, enemies, combatLog, round) } }
    return rat;
}