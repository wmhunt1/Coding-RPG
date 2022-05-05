using System;
namespace GameModels;

public class RatDungeon : Dungeon
{
    public RatDungeon(string name = "Inn Cellar"):base(name)
    {
        Name = name;
        Encounter = new Rat($"Cellar Rat");
    }
}