using System;
namespace GameModels;

public class Alchemy : CraftingSkill
{
    public Alchemy(string name = "Cooking", int level = 1, string stat = "Endurance"):base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}