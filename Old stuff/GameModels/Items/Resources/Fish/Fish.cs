using System;
namespace GameModels;

public class Fish : Resource
{
    public Fish(string name, int cost, int requiredLevel, int xp):base(name, cost, requiredLevel, xp)
    {
        Name = name;
        Cost = cost;
        RequiredLevel = requiredLevel;
        XP = xp;
    }
}