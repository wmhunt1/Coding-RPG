using System;
namespace GameModels;

public class Metal : ArmorType
{
    public Metal(string name = "Metal"):base(name)
    {
        Name = name;
    }
}