import { poisonCondition } from "./ConditionsDB";
import { fireDamage, iceDamage, noDamage, poisonDamage } from "./DamageTypesDB";
import { ApplyCondition } from "../Scripts/BuffConditionAndDeBuffScripts";
import { TakeDamage } from "../Scripts/CharacterScripts";
import { AddToCombatLog, CalculateDamageModifiers } from "../Scripts/CombatScripts";
import { ApplyOnEquipEffect, ApplyOnUnEquipEffect } from "../Scripts/ItemScripts";
export function unEnchanted() {
    var UnEnchanted = { Name: "UnEnchanted", Damage: 0, DamageType: noDamage(), OnHitEffect(char1, char2, combatLog) { }, OnEquipEffect(char, item) { }, OnUnEquipEffect(char, item) { } }
    return UnEnchanted
}
export function fireEnchantment() {
    var fireEnchantment = { Name: "Fire Enchantment", Damage: 5, DamageType: fireDamage(), OnHitEffect(char1, char2, combatLog) { var damage = CalculateDamageModifiers(char2, this.Damage, this.DamageType); TakeDamage(char2, damage); AddToCombatLog(combatLog, char1.Name + " deals an extra " + damage[0] + " " + this.DamageType.Name + " damage " + damage[1] + " due to " + this.Name) }, OnEquipEffect(char, item) { }, OnUnEquipEffect(char, item) { } }
    return fireEnchantment
}
export function fireImmuneEnchantment() {
    var fireEnchantment = { Name: "Immunity to Fire", Immunities: [fireDamage()], Resistances: [], Weaknesses: [], ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], OnHitEffect(char1, char2, combatLog) { }, OnEquipEffect(char, item) { ApplyOnEquipEffect(char, this.Immunities, this.Resistances, this.Weaknesses, this.ConditionModifiers.Immunities, this.ConditionModifiers.Resistances, this.ConditionModifiers.Weaknesses, item) }, OnUnEquipEffect(char, item) { ApplyOnUnEquipEffect(char, char.Immunities, char.Resistances, char.Weaknesses, char.ConditionModifiers.Immunities, char.ConditionModifiers.Resistances, char.ConditionModifiers.Weaknesses, item) } }
    return fireEnchantment
}
export function iceResistEnchantment() {
    var iceResist = { Name: "Resistance to Ice", Immunities: [], Resistances: [iceDamage()], Weaknesses: [], ConditionImmunities: [], ConditionResistances: [], ConditionWeaknesses: [], OnHitEffect(char1, char2, combatLog) { }, OnEquipEffect(char, item) { ApplyOnEquipEffect(char, this.Immunities, this.Resistances, this.Weaknesses, this.ConditionModifiers.Immunities, this.ConditionModifiers.Resistances, this.ConditionModifiers.Weaknesses, item) }, OnUnEquipEffect(char, item) { ApplyOnUnEquipEffect(char, char.Immunities, char.Resistances, char.Weaknesses, char.ConditionModifiers.Immunities, char.ConditionModifiers.Resistances, char.ConditionModifiers.Weaknesses, item) } }
    return iceResist
}
export function poisonApplyEnchantment(){
    var poisonApplyEnchantment =  { Name: "Venom Enchantment", Damage: 1, DamageType: poisonDamage(), OnHitEffect(char1, char2, combatLog) { ApplyCondition(char2, poisonCondition(2, 1)); AddToCombatLog(combatLog, char1.Name + "poisons " + char2.Name) }, OnEquipEffect(char, item) { }, OnUnEquipEffect(char, item) { } }
    return poisonApplyEnchantment
}
export function strengthEnchantment() {
    var strengthEnchantment = { Name: "Strength Enchantment", OnHitEffect() { }, OnEquipEffect(char, item) { char.Attributes.Strength.Bonus += 2; char.Log.push(char.Name + " gains a +2 Strength Bonus due to enchantment") }, OnUnEquipEffect(char, item) { char.Attributes.Strength.Bonus -= 2 } }
    return strengthEnchantment;
}