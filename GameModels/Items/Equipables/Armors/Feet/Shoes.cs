using System;
namespace GameModels;

public class Shoes : Feet
{

    public Shoes(string name = "Shoes", int cost = 0, int protection = 0):base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new Leather();
    }
}