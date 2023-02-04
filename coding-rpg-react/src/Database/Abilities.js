import { rageBuff } from "./Buffs";

export function rage()
{
    var rage = {Name: "Rage", Type: "Self", StaminaCost: 5, Target: "Single Ally", AbilityEffect(target){rageBuff().ApplyBuff(target)}}
    return rage;
}