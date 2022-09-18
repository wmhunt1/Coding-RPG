using System;
namespace GameModels;

public class BaneDeBuff : DeBuff
{
    public BaneDeBuff(string name = "BBane", int duration = 3) : base(name, duration)
    {
        Name = name;
        Duration = duration;
    }
    public override Character AddEffect(Character character)
    {
        DurationLeft = Duration;
        character.TempAttackBonus -= 1;
        character.TempDefenseBonus -= 1;
        character.TempMagicAttackBonus -= 1;
        character.TempMagicDefenseBonus -= 1;
        return character;
    }
    public override Character RemoveEffect(Character character)
    {
        character.TempAttackBonus += 1;
         character.TempDefenseBonus += 1;
        character.TempMagicAttackBonus += 1;
        character.TempMagicDefenseBonus += 1;
        return character;
    }
}