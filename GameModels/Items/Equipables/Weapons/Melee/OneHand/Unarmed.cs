using System;
namespace GameModels;

public class Unarmed : OneHand
{
    public Unarmed(string name = "Unarmed", int cost = 0, int damage = 0):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
        DamageType = new Bludgeoning();
    }
}