export function attackBonusBuff(duration) {
    var buff = { Name: "Attack Buff", Duration: duration, RemainingDuration: duration, ApplyBuff(target) { target.BaseStats.Attack.Bonus += 2; target.Buffs.push(this) }, RemoveBuff(target) { target.BaseStats.Attack.Bonus -= 2 } }
    return buff
}
export function blessBuff(duration) {
    var buff = { Name: "Bless", Duration: duration, RemainingDuration: duration, ApplyBuff(target) { target.BaseStats.Attack.Bonus += 2; target.Buffs.push(this) }, RemoveBuff(target) { target.BaseStats.Attack.Bonus -= 2; } }
    return buff
}
export function courageBuff(duration) {
    var buff = { Name: "Inspire Courage", Duration: duration, RemainingDuration: duration, ApplyBuff(target) { target.Attributes.Strength.Bonus += 1; target.Buffs.push(this) }, RemoveBuff(target) { target.Attributes.Strength.Bonus -= 1 } }
    return buff
}
export function rageBuff(duration) {
    var buff = { Name: "Rage Buff", Duration: duration, RemainingDuration: duration, ApplyBuff(target) { target.Attributes.Strength.Bonus += 2; target.Buffs.push(this) }, RemoveBuff(target) { target.Attributes.Strength.Bonus -= 2 } }
    return buff
}
export function shieldBuff(duration) {
    var buff = { Name: "Shield Buff", Duration: duration, RemainingDuration: duration, ApplyBuff(target) { target.BaseStats.Defense.Bonus += 2; target.Buffs.push(this) }, RemoveBuff(target) { target.BaseStats.Defense.Bonus -= 2 } }
    return buff
}