export function curse()
{
    var curse = {Name: "Curse", Icon: "Cu", ApplyDeBuff(target){target.StrPenalty -= 2; target.DexPenalty -= 2}, RemoveDeBuff(target){target.StrPenalty += 2; target.DexPenalty += 2}}
    return curse
}