import { TakeDamage } from "../Scripts/CharacterScripts";
import { AddToCombatLog, CalculateDamageModifiers } from "../Scripts/CombatScripts";
import { fireDamage } from "./DamageTypes";
export function unEnchanted() {
    var UnEnchanted = { Name: "UnEnchanted", Damage: 0, DamageType: "", OnHitEffect(char1, char2, combatLog) { }, OnEquipEffect(char) { }, OnUnEquipEffect(chaar) { } }
    return UnEnchanted
}
export function fireEnchantment() {
    var fireEnchantment = { Name: "Fire Enchantment", Damage: 5, DamageType: fireDamage(), OnHitEffect(char1, char2, combatLog) { var damage = CalculateDamageModifiers(char2, this.Damage, this.DamageType); TakeDamage(char2, damage); AddToCombatLog(combatLog, char1.Name + " deals an extra " + damage[0] + " " + this.DamageType + " damage " + damage[1] + " due to " + this.Name) }, OnEquipEffect(char) { }, OnUnEquipEffect(char) { } }
    return fireEnchantment
}
export function strengthEnchantment() {
    var strengthEnchantment = { Name: "Strength Enchantment", OnHitEffect() { }, OnEquipEffect(char) { char.StrBonus += 2; char.Log.push(char.Name + " gains a +2 Strength Bonus due to enchantment") }, OnUnEquipEffect(char) { char.StrBonus -= 2 } }
    return strengthEnchantment;
}