using System;
namespace GameModels;

public class Dagger : Weapon
{
    public Dagger(string name = "Dagger", int cost = 5, int damage = 2):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
        DamageType = new Piercing();
    }
}