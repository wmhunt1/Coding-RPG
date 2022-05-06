using System;
namespace GameModels;

public class DeBuff : Status
{
    public DeBuff(string name, int duration):base(name, duration)
    {
        Name = name;
        Duration = duration;
    }
}