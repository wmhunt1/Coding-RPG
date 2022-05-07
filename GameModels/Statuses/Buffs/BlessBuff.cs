using System;
namespace GameModels;

public class BlessBuff : Buff
{
    public BlessBuff(string name = "Bless", int duration = 3) : base(name, duration)
    {
        Name = name;
        Duration = duration;
    }
    public override Character AddEffect(Character character)
    {
        DurationLeft = Duration;
        character.TempAttackBonus += 1;
        character.TempDefenseBonus += 1;
        character.TempMagicAttackBonus += 1;
        character.TempMagicDefenseBonus += 1;
        return character;
    }
    public override Character RemoveEffect(Character character)
    {
        character.TempAttackBonus -= 1;
         character.TempDefenseBonus -= 1;
        character.TempMagicAttackBonus -= 1;
        character.TempMagicDefenseBonus -= 1;
        return character;
    }
}