using System;
namespace GameModels;

public class TwoHand : Weapon
{
    public TwoHand(string name, int cost, int damage):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
    }

}