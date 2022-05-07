using System;
namespace GameModels;

public class OneHandRanged : RangedWeapon
{
    public OneHandRanged(string name, int cost, int damage):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
    }

}