export function rageBuff()
{
    var rageBuff = {Name: "Rage Buff", ApplyBuff(target){target.StrBonus += 2; target.Buffs.push(this)}, RemoveBuff(target){target.StrBonus -= 2}}
    return rageBuff
}