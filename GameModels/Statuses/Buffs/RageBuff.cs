using System;
namespace GameModels;

public class RageBuff : Buff
{
    public RageBuff(string name = "Rage", int duration = 3) : base(name, duration)
    {
        Name = name;
        Duration = duration;
    }
    public override Character AddEffect(Character character)
    {
        DurationLeft = Duration;
        character.TempAttackBonus += 2;
        return character;
    }
    public override Character RemoveEffect(Character character)
    {
        character.TempAttackBonus -= 2;
        return character;
    }
}