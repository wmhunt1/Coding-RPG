using System;
namespace GameModels;

public class LeatherVest : Armor
{

    public LeatherVest(string name = "Leather Vest", int cost = 5, int protection = 1):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new Leather();
    }
}