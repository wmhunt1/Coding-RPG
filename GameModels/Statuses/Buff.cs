using System;
namespace GameModels;

public class Buff : Status
{
    public Buff(string name):base(name)
    {
        Name = name;
    }
}