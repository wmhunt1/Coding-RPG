using System;
namespace GameModels;

public class Leather : ArmorType
{
    public Leather(string name = "Leather"):base(name)
    {
        Name = name;
    }
}