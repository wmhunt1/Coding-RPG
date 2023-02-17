import { BasicAttacker, BasicHealer, Rager } from "../Database/TacticsDB";

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.BaseStats.SP.lice(ax, 1);
        }
    }
    return this;
};
export function AddToCharacterLog(char, message) {
    char.Log.push(message);
}
export function LevelUp(char, log) {
    char.Level++;
    char.MaxXP = (char.Level * (char.Level - 1)) * 100;
    char.BaseStats.HP.Max += char.Attributes.Constitution.Value;
    char.BaseStats.HP.Current = char.BaseStats.HP.Max;
    char.BaseStats.MP.Max += 10;
    char.BaseStats.MP.Current = char.Attributes.Intelligence.Value;
    char.BaseStats.SP.Max += 10;
    char.BaseStats.SP.Current = char.Attributes.Constitution.Value;
    FullyRecover(char)
    AddToCharacterLog(log, char.Name + " has reached level " + char.Level);
}
export function CheckForLevelUp(char, log) {
    if (char.CurrentXP >= char.MaxXP) {
        AddToCharacterLog(log, char.Name + " has enough XP to Level Up");
        return true;
    }
    else {
        AddToCharacterLog(log, char.Name + " doesn't have enough XP to Level Up");
        return false;
    }
}
export function EarnXP(char, xp, log) {
    char.CurrentXP += xp;
    AddToCharacterLog(log, char.Name + " earned " + xp + " XP");
}
export function HealHP(char, hp) {
    char.BaseStats.HP.Current += hp;
    var totalHP = char.BaseStats.HP.Max + char.BaseStats.HP.Bonus - char.BaseStats.HP.Penalty
    if (char.BaseStats.HP.Current > totalHP) {
        char.BaseStats.HP.Current = totalHP;
    }
}
export function TakeDamage(char, damage) {
    if (damage < 0) {
        damage = 0;
    }
    var updateTempHP = damage - char.BaseStats.HP.Temp;
    damage -= char.BaseStats.HP.Temp
    char.BaseStats.HP.Current -= damage;
    char.BaseStats.HP.Temp = updateTempHP;
    if (char.BaseStats.HP.Current < 0) {
        char.BaseStats.HP.Current = 0;
    }
    if (char.BaseStats.HP.Temp < 0) {
        char.BaseStats.HP.Temp = 0
    }
}
export function RecoverMP(char, mp) {
    char.BaseStats.MP.Current += mp;
    if (char.BaseStats.MP.Current > char.BaseStats.MP.Max + char.BaseStats.MP.Bonus - char.BaseStats.MP.Penalty) {
        char.BaseStats.MP.Current = char.BaseStats.MP.Max + char.BaseStats.MP.Bonus - char.BaseStats.MP.Penalty;
    }
}
export function UseMP(char, mp) {
    char.BaseStats.MP.Current -= mp;
}
export function HasEnoughMP(char, mp) {
    if (char.BaseStats.MP.Current >= mp) {
        return true;
    }
    else {
        return false;
    }
}
export function RecoverSP(char, sp) {
    char.BaseStats.SP.Current += sp;
    if (char.BaseStats.SP.Current > char.BaseStats.SP.Max + char.BaseStats.SP.Bonus - char.BaseStats.SP.Penalty) {
        char.BaseStats.SP.Current = char.BaseStats.SP.Max + char.BaseStats.SP.Bonus - char.BaseStats.SP.Penalty;
    }
}
export function UseSP(char, sp) {
    char.BaseStats.SP.Current -= sp;
    AddToCharacterLog(char, char.Name + " uses " + sp + " SP");
}
export function HasEnoughSP(char, sp) {
    if (char.BaseStats.SP.Current >= sp) {
        return true;
    }
    else {
        return false;
    }
}
export function Regen(char, log) {
    HealHP(char, char.BaseStats.HP.Regen + char.BaseStats.HP.RegenBonus - char.BaseStats.HP.RegenPenalty)
    if (char.BaseStats.HP.Regen + char.BaseStats.HP.RegenBonus - char.BaseStats.HP.RegenPenalty > 0) {
        AddToCharacterLog(log, char.Name + " Regenerates " + char.BaseStats.HP.RegenBonus - char.BaseStats.HP.RegenPenalty + " HP")
    }
    RecoverMP(char, char.BaseStats.MP.Regen + char.BaseStats.MP.RegenBonus - char.BaseStats.MP.RegenPenalty)
    if (char.BaseStats.MP.Regen + char.BaseStats.MP.RegenBonus - char.BaseStats.MP.RegenPenalty > 0) {
        AddToCharacterLog(log, char.Name + " Regenerates " + char.BaseStats.MP.Regen + char.BaseStats.MP.RegenBonus - char.BaseStats.MP.RegenPenalty + " MP")
    }
    RecoverSP(char, char.BaseStats.SP.Regen + char.BaseStats.SP.RegenBonus - char.BaseStats.SP.RegenPenalty)
    if (char.BaseStats.SP.Regen + char.BaseStats.SP.RegenBonus - char.BaseStats.SP.RegenPenalty > 0) {
        AddToCharacterLog(log, char.Name + " Regenerates " + char.BaseStats.SP.Regen + char.BaseStats.SP.RegenBonus - char.BaseStats.SP.RegenPenalty + " SP")
    }
}
export function FullyRecover(char) {
    HealHP(char, char.BaseStats.HP.Max + char.BaseStats.HP.Bonus - char.BaseStats.HP.Penalty)
    RecoverMP(char, char.BaseStats.MP.Max + char.BaseStats.MP.Bonus - char.BaseStats.MP.Penalty)
    RecoverSP(char, char.BaseStats.SP.Current + char.BaseStats.SP.Bonus - char.BaseStats.SP.Penalty)
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
export function FindPartyMember(char, party) {
    var index = null;
    if (party.find(x => x.Name === char.Name)) {
        index = party.findIndex(x => x.Name === char.Name);
    }
    return index
}
export function JoinParty(char1, char2, party) {
    if (party.find(x => x.Name === char2.Name)) {
    }
    else {
        party.push(char2)
        AddToCharacterLog(char1, char2.Name + " has joined the party.")
    }
}
export function LeaveParty(char1, char2, party) {
    party.remove(char2)
    AddToCharacterLog(char1, char2.Name + " has left the party.")
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