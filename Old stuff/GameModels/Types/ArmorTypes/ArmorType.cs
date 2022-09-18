using System;
namespace GameModels;

public class ArmorType : Type
{
    public ArmorType(string name = "Armor"):base(name)
    {
        Name = name;
    }
}