using System;
namespace GameModels;

public class Spear : Weapon
{
    public Spear(string name = "Spear", int cost = 5, int damage = 2):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
        DamageType = new Piercing();
    }
}