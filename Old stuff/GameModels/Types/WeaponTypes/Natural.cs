using System;
namespace GameModels;

public class Natural : WeaponType
{
    public Natural(string name = "Natural"):base(name)
    {
        Name = name;
    }
}