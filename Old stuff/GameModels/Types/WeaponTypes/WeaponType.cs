using System;
namespace GameModels;

public class WeaponType : Type
{
    public WeaponType(string name = "Weapon"):base(name)
    {
        Name = name;
    }
}