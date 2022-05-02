using System;
namespace GameModels;

public class Dungeon
{
    public string Name;
    public Character Encounter = new Character("Character");
    public Character? Boss;
    public Dungeon(string name)
    {
        Name = name;
    }
}