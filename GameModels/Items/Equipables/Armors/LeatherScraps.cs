using System;
namespace GameModels;

public class LeatherScraps : Armor
{

    public LeatherScraps(string name = "Leather Scraps", int cost = 1, int protection = 1):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new Leather();
    }
}