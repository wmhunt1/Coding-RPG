using System;
namespace GameModels;

public class Status
{
    public string Name;
    public int Duration;
    public int DurationLeft = 0;
    public Status(string name, int duration)
    {
        Name = name;
        Duration = duration;
    }
    public virtual Character AddEffect(Character character)
    {
        return character;
    }
    public virtual Character RemoveEffect(Character character)
    {
        return character;
    }
}