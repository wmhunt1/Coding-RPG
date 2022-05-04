using System;
namespace GameModels;

public class DeBuff : Status
{
    public DeBuff(string name):base(name)
    {
        Name = name;
    }
}