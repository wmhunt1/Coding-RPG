using System;
namespace GameModels;

public class Ability
{
    public string Name;
    public int StaminaCost;
    public Ability(string name, int cost)
    {
        Name = name;
        StaminaCost = cost;
    }
}