using System;
namespace GameModels;

public class Sling : TwoHand
{
    public Sling(string name = "Sling", int cost = 0, int damage = 1):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
        DamageType = new Bludgeoning();
    }
}