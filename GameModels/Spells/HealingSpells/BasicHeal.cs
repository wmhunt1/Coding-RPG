using System;
namespace GameModels;

public class BasicHeal : HealingSpell
{
    public BasicHeal(string name = "Basic Heal", int level = 1, int cost = 5) : base(name, level, cost)
    {
        Name = name;
        SpellLevel = level;
        ManaCost = cost;
        HealingAmount = 5;
    }
}