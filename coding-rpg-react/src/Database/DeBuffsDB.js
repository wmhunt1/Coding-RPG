export function curseDeBuff(duration) {
    var curse = { Name: "Curse", Duration: duration, RemainingDuration: duration, ApplyDeBuff(target) { target.StrPenalty -= 2; target.DexPenalty -= 2; target.DeBuffs.push(this) }, RemoveDeBuff(target) { target.StrPenalty += 2; target.DexPenalty += 2 } }
    return curse
}