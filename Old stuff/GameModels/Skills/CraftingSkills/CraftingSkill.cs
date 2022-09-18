using System;
namespace GameModels;

public class CraftingSkill : Skill
{
    public CraftingSkill(string name, int level, string stat):base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}