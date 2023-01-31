export function LevelUp(char)
{
    char.Level++;
    char.MaxXP *= char.Level;
    char.MaxHP += 10;
    console.log("Leveling up")
}
export function CheckForLevelUp(char)
{
    if (char.CurrentXP >= char.MaxXP)
    {
        console.log("Enough XP to Level")
        LevelUp(char)
    }
}
export function EarnXP(char, xp)
{
    char.CurrentXP += xp;
    console.log(char.Name + " gains " + xp + " XP")
    CheckForLevelUp(char);
}
export function HealHP(char, hp)
{
    char.CurrentHP += hp;
    if (char.CurrentHP > char.MaxHP)
    {
        char.CurrentHP = char.MaxHP;
    }
}
export function TakeDamage(char, damage)
{
    char.CurrentHP -= damage;
    console.log(char.Name + " loses " + damage + " hp");
    if (char.CurrentHP < 0)
    {
        char.CurrentHP = 0;
    }
}