using System;
namespace GameModels;

public class SocialSkill : Skill
{
    public SocialSkill(string name, int level, string stat):base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}