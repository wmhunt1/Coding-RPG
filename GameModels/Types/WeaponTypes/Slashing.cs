using System;
namespace GameModels;

public class Slashing : WeaponType
{
    public Slashing(string name = "Slashing"):base(name)
    {
        Name = name;
    }
}