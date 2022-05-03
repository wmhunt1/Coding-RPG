using System;
namespace GameModels;

public class Skill
{
    public string Name;
    public int Level;
    public Skill(string name, int level)
    {
        Name = name;
        Level = level;
    }
}