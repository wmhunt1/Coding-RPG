export function baneDeBuff(duration) {
    var deBuff = { Name: "Bane", Duration: duration, RemainingDuration: duration, ApplyDeBuff(target) { target.Attributes.Strength.Penalty += 1; target.Attributes.Dexterity.Penalty += 1; target.DeBuffs.push(this) }, RemoveDeBuff(target) { target.Attributes.Strength.Penalty -= 1; target.Attributes.Dexterity.Penalty -= 1; } }
    return deBuff
}
export function drunkDeBuff(duration) {
    var deBuff = { Name: "Drunk", Duration: duration, RemainingDuration: duration, ApplyDeBuff(target) { target.Attributes.Intelligence.Penalty += 1; target.Attributes.Dexterity.Penalty += 1; target.DeBuffs.push(this) }, RemoveDeBuff(target) { target.Attributes.Dexterity.Penalty -= 1; target.Attributes.Intelligence.Penalty -= 1; } }
    return deBuff
}