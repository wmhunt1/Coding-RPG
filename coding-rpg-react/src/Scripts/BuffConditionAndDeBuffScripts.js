import { noCondition } from "../Database/ConditionsDB";
import { AddToCharacterLog } from "./CharacterScripts";
import { AddToCombatLog } from "./CombatScripts";

export function BuffAndDeBuffDuration(char, log) {
    for (var b = 0; b < char.Buffs.length; b++) {
        char.Buffs[b].RemainingDuration--;
        if (char.Buffs[b].RemainingDuration === 0) {
            AddToCombatLog(log, char.Buffs[b].Name + " expires")
            char.Buffs[b].RemoveBuff(char)
        }
    }
    for (var d = 0; d < char.DeBuffs.length; d++) {
        char.DeBuffs[d].RemainingDuration--;
        if (char.DeBuffs[d].RemainingDuration === 0) {
            AddToCombatLog(log, char.DeBuffs[d].Name + " expires")
            char.DeBuffs[d].RemoveDeBuff(char)
        }
    }
}
export function CheckIfBuffApplied(char, buff, combatLog) {
    if (char.Buffs.length > 0) {
        if (char.Buffs.find(x => x.Name !== buff.Name)) {
            buff.ApplyBuff(char)
        }
        else {
            AddToCombatLog(combatLog, char.Name + " already has a " + buff.Name + " Buff")
        }
    }
    else {
        buff.ApplyBuff(char)
    }
}
export function CheckIfDeBuffApplied(char, deBuff, combatLog) {
    if (char.DeBuffs.find(x => x.Name !== deBuff.Name)) {
        deBuff.ApplyDeBuff(char)
    }
    else {
        AddToCombatLog(combatLog, char.Name + " already has a " + deBuff.Name + " DeBuff")
    }
}
export function RemoveAllBuffs(char) {
    for (var b = 0; b < char.Buffs.length; b++) {
        AddToCharacterLog(char, char.Name + "'s " + char.Buffs[b].Name + " wears off");
        char.Buffs[b].RemoveBuff(char);
    }
    char.Buffs = []
}
export function RemoveAllDeBuffs(char) {
    for (var d = 0; d < char.DeBuffs.length; d++) {
        AddToCharacterLog(char, char.Name + "'s " + char.DeBuffs[d].Name + " wears off");
        char.DeBuffs[d].RemoveDeBuff(char);
    }
    char.DeBuffs = []
}
export function ApplyCondition(char, condition, log) {
    if (condition.Name !== "None") {
        char.Condition = condition
        log.push(char.Name + " afflicted with " + condition.Name)
    }
    else {
        log.push(char.Name + " already afflicted with a condition")
    }
}
export function RemoveCondition(char, log) {
    var condition = char.Condition.Name
    char.Condition = noCondition()
    if (condition !== "None") {
        log.push(char.Name + " is no longer afflicted with " + condition)
    }
}
export function ResistCondition(char, log) {
    if (char.Condition.Name !== "None") {
        char.Condition.RemainingDuration--;
        var resistingAttribute = 0;
        if (char.Condition.Attribute === "Con") {
            resistingAttribute = char.Constitution + char.ConBonus - char.ConPenalty
        }
        else if (char.Condition.Attribute === "Str") {
            resistingAttribute = char.Strength + char.StrBonus - char.StrPenalty
        }
        else {
            resistingAttribute = char.WillPower + char.WlpBonus - char.WlpPenalty
        }
        var resistChance = Math.floor(Math.random() * 50) + 1 + resistingAttribute;
        if (char.ConditionImmunities.find(x => x.Name === char.Conditon.Name) === true) {
            resistChance += 100;
        }
        if (char.ConditionResistances.find(x => x.Name === char.Conditon.Name) === true) {
            resistChance += 50;
        }
        if (char.ConditionWeaknesses.find(x => x.Name === char.Conditon.Name) === true) {
            resistChance -= 50
        }
        if (resistChance >= 50 || char.Condition.RemainingDuration === 0) {
            if (resistChance >= 50) {
                log.push(char.Name + " resisted " + char.Condition.Name)
            }
            else {
                log.push(char.Name + "'s " + char.Condition.Name + " expired")
            }
            RemoveCondition(char, log)
        }
    }
}