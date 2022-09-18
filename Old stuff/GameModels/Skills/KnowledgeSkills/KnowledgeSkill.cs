using System;
namespace GameModels;

public class KnowledgeSkill : Skill
{
    public KnowledgeSkill(string name, int level, string stat):base(name, level, stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}