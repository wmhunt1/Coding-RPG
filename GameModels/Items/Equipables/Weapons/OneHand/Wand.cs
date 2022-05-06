using System;
namespace GameModels;

public class Wand : OneHand
{
    public Wand(string name = "Wand", int cost = 1, int damage = 1):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
        DamageType = new Magic();
    }
}