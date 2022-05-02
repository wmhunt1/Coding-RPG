using System;
namespace GameModels;

public class Piercing : WeaponType
{
    public Piercing(string name = "Piercing"):base(name)
    {
        Name = name;
    }
}