using System;
namespace GameModels;

public class Dungeon
{
    public string Name;
    public Character Encounter = new Character("char");
    public List<Character>? Boss;
    public Dungeon(string name)
    {
        Name = name;
    }
    public virtual List<Character> GenerateEncounter()
    {
        List<Character> newEncounter = new List<Character>();
        return newEncounter;
    }
}