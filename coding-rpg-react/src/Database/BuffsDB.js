export function blessBuff(duration) {
    var buff = { Name: "Bless", Duration: duration, RemainingDuration: duration, ApplyBuff(target) { target.StrBonus += 1; target.DexBonus += 1; target.Buffs.push(this) }, RemoveBuff(target) { target.StrBonus -= 1; target.DexBonus -= 1; } }
    return buff
}
export function courageBuff(duration) {
    var buff = { Name: "Inspire Courage", Duration: duration, RemainingDuration: duration, ApplyBuff(target) { target.StrBonus += 1; target.Buffs.push(this) }, RemoveBuff(target) { target.StrBonus -= 1 } }
    return buff
}
export function rageBuff(duration) {
    var rageBuff = { Name: "Rage Buff", Duration: duration, RemainingDuration: duration, ApplyBuff(target) { target.StrBonus += 2; target.Buffs.push(this) }, RemoveBuff(target) { target.StrBonus -= 2 } }
    return rageBuff
}