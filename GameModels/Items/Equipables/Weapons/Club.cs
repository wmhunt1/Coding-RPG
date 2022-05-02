using System;
namespace GameModels;

public class Club : Weapon
{
    public Club(string name = "Club", int cost = 0, int damage = 1):base(name, cost, damage)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
        DamageType = new Bludgeoning();
    }
}