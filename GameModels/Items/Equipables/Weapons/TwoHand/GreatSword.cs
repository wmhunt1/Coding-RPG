using System;
namespace GameModels;

public class GreatSword : TwoHand
{
    public GreatSword(string name = "Great Sword", int cost = 10, int damage = 5):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
        DamageType = new Slashing();
    }
}