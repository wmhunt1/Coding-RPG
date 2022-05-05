using System;
namespace GameModels;

public class CombatSkill : Skill
{
    public CombatSkill(string name, int level, string stat):base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}