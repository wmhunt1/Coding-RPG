using System;
namespace GameModels;

public class RatDungeon : Dungeon
{
    public RatDungeon(string name = "Inn Cellar"):base(name)
    {
        Name = name;
        Encounter = new Rat("Cellar Rat");
    }
    public override List<Character> GenerateEncounter()
    {
        Random rnd = new Random();
        int random = rnd.Next(2, 3);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new Rat("Cellar Rat"));
        }
        return encounterEnemies;
    }
}