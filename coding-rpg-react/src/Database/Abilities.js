import { CheckIfBuffApplied } from "../Scripts/CharacterScripts";
import { BasicAttack, SneakAttack } from "../Scripts/CombatScripts";
import { rageBuff } from "./Buffs";

export function cleave() {
    var cleave = { Name: "Cleave", Description: "Attack all enemies with a Basic Attack", Type: "Attack", StaminaCost: 10, Target: "Enemies", AbilityEffect(user, target, combatLog) {BasicAttack(user, target, combatLog)} }
    return cleave;
}
export function rage() {
    var rage = { Name: "Rage", Description: "User goes into a rage, gaining a +2 Str Bonus", Type: "Self", StaminaCost: 5, Target: "Single Ally", AbilityEffect(user, target, combatLog) { CheckIfBuffApplied(target, rageBuff(), combatLog) } }
    return rage;
}
export function sneakAttack() {
    var sneakAttack = { Name: "Sneak Attack", Description: "An attack that ignores armor", Type: "Attack", StaminaCost: 5, Target: "Single Enemy", AbilityEffect(user, target, combatLog) {SneakAttack(user, target, combatLog)} }
    return sneakAttack;
}