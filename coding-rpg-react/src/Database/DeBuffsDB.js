export function curseDeBuff()
{
    var curse = {Name: "Curse", ApplyDeBuff(target){target.StrPenalty -= 2; target.DexPenalty -= 2; target.DeBuffs.push(this)}, RemoveDeBuff(target){target.StrPenalty += 2; target.DexPenalty += 2}}
    return curse
}