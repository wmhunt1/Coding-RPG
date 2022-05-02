using System;
namespace GameModels;

public class Sword : Weapon
{
    public Sword(string name = "Sword", int cost = 10, int damage = 3):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
        DamageType = new Slashing();
    }
}