export function rageBuff()
{
    var rageBuff = {Name: "Rage", Icon: "Rg", ApplyBuff(target){target.StrBonus += 2}, RemoveBuff(target){target.StrBonus -= 2}}
    return rageBuff
}