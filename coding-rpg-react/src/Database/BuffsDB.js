export function rageBuff(duration) {
    var rageBuff = { Name: "Rage Buff", Duration: duration, RemainingDuration: duration, ApplyBuff(target) { target.StrBonus += 2; target.Buffs.push(this) }, RemoveBuff(target) { target.StrBonus -= 2 } }
    return rageBuff
}