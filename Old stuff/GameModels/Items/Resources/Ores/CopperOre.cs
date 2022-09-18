using System;
namespace GameModels;

public class CopperOre : Ore
{
    public CopperOre(string name = "Copper Ore", int cost = 1, int requiredLevel = 1, int xp = 5):base(name, cost, requiredLevel, xp)
    {
        Name = name;
        Cost = cost;
        RequiredLevel = requiredLevel;
        XP = xp;
    }
}