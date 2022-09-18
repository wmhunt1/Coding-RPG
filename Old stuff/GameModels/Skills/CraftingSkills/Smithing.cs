using System;
namespace GameModels;

public class Smithing : CraftingSkill
{
    public Smithing(string name = "Cooking", int level = 1, string stat = "Endurance"):base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}