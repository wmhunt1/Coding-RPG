using System;
namespace GameModels;

public class BanditDungeon : Dungeon
{
    public BanditDungeon(string name = "Bandit Hideout") : base(name)
    {
        Name = name;
        Encounter = new Bandit("Forest Bandit");
        Boss = new List<Character>() { new BanditBoss("Forest Bandit Boss") };
    }
    public override List<Character> GenerateEncounter1()
    {
        Random rnd = new Random();
        int random = rnd.Next(2, 5);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new Bandit("Forest Bandit"));
        }
        return encounterEnemies;
    }
    public override List<Character> GenerateEncounter2()
    {
        Random rnd = new Random();
        int random = rnd.Next(2, 5);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new Bandit("Forest Bandit"));
        }
        return encounterEnemies;
    }
    public override List<Character> GenerateEncounter3()
    {
        Random rnd = new Random();
        int random = rnd.Next(2, 5);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new Bandit("Forest Bandit"));
        }
        return encounterEnemies;
    }
}