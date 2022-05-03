using System;
namespace GameModels;

public class RatDungeon : Dungeon
{
    public RatDungeon(string name = "Inn Cellar"):base(name)
    {
        Name = name;
        Encounter = new List<Character>() {new Rat($"Cellar Rat A"), new Rat($"Cellar Rat B")};
    }
}