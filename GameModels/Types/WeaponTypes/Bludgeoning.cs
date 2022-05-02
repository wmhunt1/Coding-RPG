using System;
namespace GameModels;

public class Bludgeoning : WeaponType
{
    public Bludgeoning(string name = "Bludgeoning"):base(name)
    {
        Name = name;
    }
}