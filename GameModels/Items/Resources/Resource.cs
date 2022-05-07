using System;
namespace GameModels;

public class Resource : Item
{
    public int RequiredLevel;
    public int XP;
    public Resource(string name, int cost, int requiredLevel, int xp):base(name, cost)
    {
        Name = name;
        Cost = cost;
        RequiredLevel = requiredLevel;
        XP = xp;
    }
}