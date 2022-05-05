using System;
namespace GameModels;

public class UtilitySkill : Skill
{
    public UtilitySkill(string name, int level, string stat):base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}