using System;
namespace GameModels;

public class MagicWeapon : Weapon
{
    public MagicWeapon(string name, int cost, int damage):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
    }
}