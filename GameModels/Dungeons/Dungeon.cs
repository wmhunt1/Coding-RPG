using System;
namespace GameModels;

public class Dungeon
{
    public string Name;
    public List<Character> Encounter = new List<Character>() {new Character("Character")};
    public List<Character>? Boss;
    public Dungeon(string name)
    {
        Name = name;
    }
}