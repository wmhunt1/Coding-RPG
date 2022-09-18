using System;
namespace GameModels;

public class Cooking : CraftingSkill
{
    public Cooking(string name = "Cooking", int level = 1, string stat = "Endurance"):base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}