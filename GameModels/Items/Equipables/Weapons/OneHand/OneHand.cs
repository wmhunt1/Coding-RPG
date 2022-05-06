using System;
namespace GameModels;

public class OneHand : Weapon
{
    public OneHand(string name, int cost, int damage):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
    }

}