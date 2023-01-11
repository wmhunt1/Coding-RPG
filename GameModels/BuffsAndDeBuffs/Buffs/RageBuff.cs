using System.Text.Json.Serialization;

namespace GameModels;
public class RageBuff : Buff
{
    public RageBuff(string name = "Rage", int duration = 3, int remainingDuration = 3) : base(name, duration, remainingDuration)
    {
        Name = name;
        Duration = duration;
        RemainingDuration = remainingDuration;
    }
    public override Character ApplyBuff(Character character)
    {
        Console.WriteLine($"{character.Name} enters a rage.");
        character.StrengthBonus += 5;
        character.CurrentHP += 5;
        character.Buffs.Add(this);
        return character;
    }
    public override Character RemoveBuff(Character character)
    {
        Console.WriteLine($"{character.Name} loses their rage.");
        character.StrengthBonus -= 5;
        character.CurrentHP -= 5;
        character.Buffs.Remove(this);
        return character;
    }
}