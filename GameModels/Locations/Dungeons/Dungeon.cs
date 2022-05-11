using System;
namespace GameModels;

public class Dungeon : Location
{
    public Character Encounter = new Character("char");
    public List<Character>? Boss;
    public Dungeon(string name) : base(name)
    {
        Name = name;
    }
    public virtual List<Character> GenerateEncounter(int x, int y)
    {
        List<Character> newEncounter = new List<Character>();
        return newEncounter;
    }
    public virtual List<Character> GenerateEncounter1()
    {
        List<Character> newEncounter = GenerateEncounter(1, 2);
        return newEncounter;

    }
    public virtual List<Character> GenerateEncounter2()
    {
        List<Character> newEncounter = GenerateEncounter(1, 2);
        return newEncounter;
    }
    public virtual List<Character> GenerateEncounter3()
    {
        List<Character> newEncounter = GenerateEncounter(1, 2);
        return newEncounter;
    }
    public virtual void AfterBossEvent(Character hero)
    {   
        Console.WriteLine("Boss Defeated");
    }
}