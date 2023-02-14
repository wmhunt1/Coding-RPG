export function baneDeBuff(duration) {
    var deBuff = { Name: "Bane", Duration: duration, RemainingDuration: duration, ApplyDeBuff(target) { target.StrPenalty += 1; target.DexPenalty += 1; target.DeBuffs.push(this) }, RemoveDeBuff(target) { target.StrPenalty -= 1; target.DexPenalty -= 1; } }
    return deBuff
}
export function drunkDeBuff(duration) {
    var deBuff = { Name: "Drunk", Duration: duration, RemainingDuration: duration, ApplyDeBuff(target) { target.IntPenalty += 1; target.DexPenalty += 1; target.DeBuffs.push(this) }, RemoveDeBuff(target) { target.DexPenalty -= 1; target.IntPenalty -= 1; } }
    return deBuff
}