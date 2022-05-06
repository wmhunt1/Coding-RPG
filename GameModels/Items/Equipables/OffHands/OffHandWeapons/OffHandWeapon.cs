using System;
namespace GameModels;

public class OffHandWeapon : OffHand
{
    public int Damage;
    public OffHandWeapon(string name, int cost, int damage):base(name, cost)
    {
        Name = name;
        Cost = cost;
        Damage = damage;
    }
}