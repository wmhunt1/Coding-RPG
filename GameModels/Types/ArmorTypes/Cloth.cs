using System;
namespace GameModels;

public class Cloth : ArmorType
{
    public Cloth(string name = "Piercing"):base(name)
    {
        Name = name;
    }
}