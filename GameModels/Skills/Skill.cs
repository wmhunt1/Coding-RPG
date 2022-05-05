using System;
namespace GameModels;

public class Skill
{
    public string Name;
    public int Level;
    public string Stat;
    public Skill(string name, int level, string stat)
    {
        Name = name;
        Level = level;
        Stat = stat;
    }
}