import { noCondition } from "../Database/ConditionsDB";
import { BasicAttacker, BasicHealer, Rager } from "../Database/TacticsDB";
import { AddToCombatLog } from "./CombatScripts";

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
export function AddToCharacterLog(char, message) {
    char.Log.push(message);
}
export function LevelUp(char) {
    char.Level++;
    char.MaxXP = (char.Level * (char.Level - 1)) * 100;
    char.MaxHP += char.Constitution;
    char.CurrentHP = char.MaxHP;
    char.MaxMP += 10;
    char.CurrentMP = char.Intelligence;
    char.MaxSP += 10;
    char.CurrentSP = char.Constitution;
    AddToCharacterLog(char, char.Name + " has reached level " + char.Level);
}
export function CheckForLevelUp(char) {
    if (char.CurrentXP >= char.MaxXP) {
        AddToCharacterLog(char, char.Name + " has enough XP to Level Up");
        return true;
    }
    else {
        AddToCharacterLog(char, char.Name + " doesn't have enough XP to Level Up");
        return false;
    }
}
export function EarnXP(char, xp) {
    char.CurrentXP += xp;
    AddToCharacterLog(char, char.Name + " earned " + xp + " XP");
}
export function HealHP(char, hp) {
    char.CurrentHP += hp;
    var totalHP = char.MaxHP + char.HPBonus - char.HPPenalty
    if (char.CurrentHP > totalHP) {
        char.CurrentHP = totalHP;
    }
}
export function TakeDamage(char, damage) {
    if (damage < 0) {
        damage = 0;
    }
    var updateTempHP = damage - char.TempHP;
    damage -= char.TempHP
    char.CurrentHP -= damage;
    char.TempHP = updateTempHP;
    if (char.CurrentHP < 0) {
        char.CurrentHP = 0;
    }
    if (char.TempHP < 0) {
        char.TempHP = 0
    }
}
export function RecoverMP(char, mp) {
    char.CurrentMP += mp;
    if (char.CurrentMP > char.MaxMP + char.MPBonus - char.MPPenalty) {
        char.CurrentMP = char.MaxMP + char.MPBonus - char.MPPenalty;
    }
}
export function UseMP(char, mp) {
    char.CurrentMP -= mp;
}
export function HasEnoughMP(char, mp) {
    if (char.CurrentMP >= mp) {
        return true;
    }
    else {
        return false;
    }
}
export function RecoverSP(char, sp) {
    char.CurrentSP += sp;
    if (char.CurrentSP > char.MaxSP + char.SPBonus - char.SPPenalty) {
        char.CurrentSP = char.MaxSP + char.SPBonus - char.SPPenalty;
    }
}
export function UseSP(char, sp) {
    char.CurrentSP -= sp;
    AddToCharacterLog(char, char.Name + " uses " + sp + " SP");
}
export function HasEnoughSP(char, sp) {
    if (char.CurrentSP >= sp) {
        return true;
    }
    else {
        return false;
    }
}
export function Regen(char, log) {
    HealHP(char, char.HPRegen + char.HPRegenBonus - char.HPRegenPenalty)
    if (char.HPRegen + char.HPRegenBonus - char.HPRegenPenalty > 0) {
        AddToCharacterLog(log, char.Name + " Regenerates " + char.HPRegenBonus - char.HPRegenPenalty + " HP")
    }
    RecoverMP(char, char.MPRegen + char.MPRegenBonus - char.MPRegenPenalty)
    if (char.MPRegen + char.MPRegenBonus - char.MPRegenPenalty > 0) {
        AddToCharacterLog(log, char.Name + " Regenerates " + char.MPRegen + char.MPRegenBonus - char.MPRegenPenalty + " MP")
    }
    RecoverSP(char, char.SPRegen + char.SPRegenBonus - char.SPRegenPenalty)
    if (char.SPRegen + char.SPRegenBonus - char.SPRegenPenalty > 0) {
        AddToCharacterLog(log, char.Name + " Regenerates " + char.SPRegen + char.SPRegenBonus - char.SPRegenPenalty + " SP")
    }
}
export function FullyRecover(char) {
    HealHP(char, char.MaxHP + char.HPBonus - char.HPPenalty)
    RecoverMP(char, char.MaxMP + char.MPBonus - char.MPPenalty)
    RecoverSP(char, char.CurrentSP + char.SPBonus - char.SPPenalty)
    AddToCharacterLog(char, char.Name + " Fully Recovered")
}
export function PartyRecovery(char) {
    FullyRecover(char)
    for (var c = 0; c < char.Companions.length; c++) {
        FullyRecover(char.Companions[c])
    }
}
export function AddGold(char, gold) {
    if (gold > 0) {
        char.Gold += gold;
        AddToCharacterLog(char, char.Name + " earned " + gold + " GP")
    }
}
export function RemoveGold(char, gold) {
    char.Gold -= gold;
    AddToCharacterLog(char, char.Name + " paid " + gold + " GP")
}
export function JoinParty(char1, char2, party) {
    party.push(char2)
    AddToCharacterLog(char1, char2.Name + " has joined the party.")
}
export function LeaveParty(char1, char2, party) {
    party.remove(char2)
    AddToCharacterLog(char1, char2.Name + " has left the party.")
}
export function LearnAbility(char, abil) {
    if (char.Abilites.find(x => x.Name === abil.Name)) {
        char.Log.push(char.Name + " already knows " + abil.Name)
    }
    else {
        char.Abilites.push(abil);
        char.Log.push(char.Name + " learns " + abil.Name)
    }
}
export function LearnSpell(char, spell) {
    if (char.SpellBook.find(x => x.Name === spell.Name)) {
        char.Log.push(char.Name + " already knows " + spell.Name)
    }
    else {
        char.SpellBook.push(spell);
        char.Log.push(char.Name + " learns " + spell.Name)
    }
}
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
        if (char.Condition.Type === "Damage") {
            resistingAttribute = char.Constitution + char.ConBonus - char.ConPenalty;
        }
        if (char.Condition.Type === "Skip") {
            resistingAttribute = char.WillPower + char.WlpBonus - char.WlpPenalty;
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
export function CalculateTime(char, hours) {
    char.Time.Hour += hours;
    if (char.Time.Hour >= 6 && char.Time.Hour < 12) {
        char.Time.TimeOfDay = "Morning"
    }
    else if (char.Time.Hour === 12) {
        char.Time.TimeOfDay = "Noon"
    }
    else if (char.Time.Hour > 12 && char.Time.Hour < 18) {
        char.Time.TimeOfDay = "Afternoon"
    }
    else if (char.Time.Hour >= 18 && char.Time.Hour < 21) {
        char.Time.TimeOfDay = "Evening"
    }
    else if (char.Time.Hour === 0) {
        char.Time.TimeOfDay = "Midnight"
    }
    else {
        char.Time.TimeOfDay = "Night"
    }
    if (char.Time.Hour >= 24) {
        char.Time.Day++;
        char.Time.Hour = 0
    }
}
export function ChangeTactics(hero, tactic) {
    if (tactic.Name === "Basic Healer") {
        hero.Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicHealer(char, allies, enemies, combatLog, round) } }
    }
    else if (tactic.Name === "Rager") {
        hero.Tactics = { Tactics(char, allies, enemies, combatLog, round) { Rager(char, allies, enemies, combatLog, round) } }
    }
    else {
        hero.Tactics = { Tactics(char, allies, enemies, combatLog, round) { BasicAttacker(char, allies, enemies, combatLog, round) } }
    }
    return hero;
}