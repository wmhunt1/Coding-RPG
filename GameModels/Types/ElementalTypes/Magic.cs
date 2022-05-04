using System;
namespace GameModels;

public class Magic : ElementalType
{
    public Magic(string name = "Magic"):base(name)
    {
        Name = name;
    }
}