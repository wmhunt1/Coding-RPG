import { BasicAttacker, BasicHealer, Rager } from "../Database/TacticsDB";

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
export function LevelUp(char, log) {
    char.Level++;
    char.MaxXP = (char.Level * (char.Level - 1)) * 100;
    char.MaxHP += char.Constitution;
    char.CurrentHP = char.MaxHP;
    char.MaxMP += 10;
    char.CurrentMP = char.Intelligence;
    char.MaxSP += 10;
    char.CurrentSP = char.Constitution;
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