using System;
namespace GameModels;

public class Bite : Weapon
{
    public Bite(string name = "Bite", int cost = 0, int damage = 1):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
        DamageType = new Piercing();
    }
}