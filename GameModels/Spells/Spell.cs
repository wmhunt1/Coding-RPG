using System;
namespace GameModels;

public class Spell
{
    public string Name;
    public int StaminaCost;
    public Spell(string name, int cost)
    {
        Name = name;
        StaminaCost = cost;
    }
}