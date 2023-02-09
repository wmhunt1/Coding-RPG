import { CheckIfBuffApplied } from "../Scripts/CharacterScripts";
import {ArmorIgnoringAttack, BasicAttack } from "../Scripts/CombatScripts";
import { rageBuff } from "./Buffs";

export function cleave() {
    var cleave = { Name: "Cleave", StaminaCost: 10, Description: "Cleaves through all foes with a weapon", AbilityEffect(char, allies, enemies, target, combatLog) { combatLog.push(char.Name + " cleaves through all foes with their weapon"); for (var e = 0; e < enemies.length; e++) { BasicAttack(char, enemies[e], combatLog, char.Weapon) } } }
    return cleave;
}
export function pierceArmor() {
    var pierceArmor = {
        Name: "Pierce Armor", StaminaCost: 5, Description: "An attack that ignores target's armor", AbilityEffect(char, allies, enemies, target, combatLog) {
            ArmorIgnoringAttack(char, target, combatLog, char.Weapon); if (char.OffHand.Type === "Weapon") {
                ArmorIgnoringAttack(char, target, combatLog, char.OffHand)
            }
        }
    }
    return pierceArmor;
}
export function rage() {
    var rage = { Name: "Rage", StaminaCost: 5, Description: "Temporarily gain a +2 bonus to Strength", AbilityEffect(char, allies, enemies, target, combatLog) { combatLog.push(char.Name + " Enters a rage"); CheckIfBuffApplied(char, rageBuff(), combatLog) } }
    return rage;
}