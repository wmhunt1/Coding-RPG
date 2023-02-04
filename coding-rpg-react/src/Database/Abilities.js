import { CheckIfBuffApplied } from "../Scripts/CharacterScripts";
import { rageBuff } from "./Buffs";

export function rage() {
    var rage = { Name: "Rage", Type: "Self", StaminaCost: 5, Target: "Single Ally", AbilityEffect(target, combatLog) { CheckIfBuffApplied(target, rageBuff(), combatLog) } }
    return rage;
}