using System;
namespace GameModels;

public class RatDungeon1 : Dungeon
{
    public RatDungeon1(string name = "Inn Cellar") : base(name)
    {
        Name = name;
        Encounter = new Rat("Cellar Rat");
    }
    public override List<Character> GenerateEncounter(int x, int y)
    {
        Random rnd = new Random();
        int random = rnd.Next(x, y);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new Rat("Cellar Rat"));
        }
        return encounterEnemies;
    }
    public override List<Character> GenerateEncounter1()
    {
        List<Character> newEncounter = GenerateEncounter(1, 2);
        return newEncounter;

    }
    public override List<Character> GenerateEncounter2()
    {
        List<Character> newEncounter = GenerateEncounter(2, 3);
        return newEncounter;

    }
    public override List<Character> GenerateEncounter3()
    {
        List<Character> newEncounter = GenerateEncounter(2, 4);
        return newEncounter;

    }
}