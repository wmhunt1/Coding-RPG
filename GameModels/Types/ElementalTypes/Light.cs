using System;
namespace GameModels;

public class Light : ElementalType
{
    public Light(string name = "Light"):base(name)
    {
        Name = name;
    }
}