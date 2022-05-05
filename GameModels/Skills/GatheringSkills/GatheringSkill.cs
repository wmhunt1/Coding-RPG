using System;
namespace GameModels;

public class GatheringSkill : Skill
{
    public GatheringSkill(string name, int level, string stat):base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}