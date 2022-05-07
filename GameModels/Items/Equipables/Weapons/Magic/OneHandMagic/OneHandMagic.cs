using System;
namespace GameModels;

public class OneHandMagic : MagicWeapon
{
    public OneHandMagic(string name, int cost, int damage):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
    }

}