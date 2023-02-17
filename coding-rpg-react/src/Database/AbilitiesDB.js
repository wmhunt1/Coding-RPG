import { rageBuff } from "./BuffsDB";
import { CheckIfBuffApplied } from "../Scripts/BuffConditionAndDeBuffScripts";
import { AddToCombatLog, ArmorIgnoringAttack, BasicAttack } from "../Scripts/CombatScripts";

export function cleave() {
    var cleave = { Name: "Cleave", StaminaCost: 10, Description: "Cleaves through all foes with a weapon", AbilityEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " cleaves through all foes with their weapon"); for (var e = 0; e < enemies.length; e++) { BasicAttack(char, enemies[e], combatLog, char.Equipment.Weapon) } } }
    return cleave;
}
export function pierceArmor() {
    var pierceArmor = {
        Name: "Pierce Armor", StaminaCost: 5, Description: "An attack that ignores target's armor", AbilityEffect(char, allies, enemies, target, combatLog) {
            ArmorIgnoringAttack(char, target, combatLog, char.Equipment.Weapon); if (char.Equipment.OffHand.Type === "Weapon") {
                ArmorIgnoringAttack(char, target, combatLog, char.Equipment.OffHand)
            }
        }
    }
    return pierceArmor;
}
export function rage() {
    var rage = { Name: "Rage", StaminaCost: 5, Description: "Temporarily gain a +2 bonus to Strength", AbilityEffect(char, allies, enemies, target, combatLog) { AddToCombatLog(combatLog, char.Name + " enters a rage"); CheckIfBuffApplied(char, rageBuff(3), combatLog) } }
    return rage;
}
export function raiseShield() {
    var abil = { Name: "Raise Shield", StaminaCost: 5, Description: "Raises a Shield to Give a +2 Shield Bonus", AbilityEffect(char, allies, enemies, target, combatLog) { if (char.Equipment.OffHand.SubType === "Shield") { AddToCombatLog(combatLog, char.Name + " raises their shield"); CheckIfBuffApplied(char, raiseShield(3), combatLog) } else { AddToCombatLog(combatLog, char.Name + " does not have a shield to raise.") } } }
    return abil;
}