using System;
namespace GameModels;

public class Buff : Status
{
    public Buff(string name, int duration):base(name, duration)
    {
        Name = name;
        Duration = duration;
    }
    public override Character AddEffect(Character character)
    {
        return character;
    }
    public override Character RemoveEffect(Character character)
    {
        return character;
    }
}