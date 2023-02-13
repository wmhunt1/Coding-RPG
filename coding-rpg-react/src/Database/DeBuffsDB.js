export function baneDeBuff(duration) {
    var deBuff = { Name: "Bane", Duration: duration, RemainingDuration: duration, ApplyDeBuff(target) { target.StrBonus -= 1; target.DexBonus -= 1; target.DeBuffs.push(this) }, RemoveDeBuff(target) { target.StrBonus += 1; target.DexBonus += 1; } }
    return deBuff
}