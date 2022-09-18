using System;
namespace GameModels;

public class BanditDungeon1 : Dungeon
{
    public BanditDungeon1(string name = "Bandit Hideout") : base(name)
    {
        Name = name;
        Encounter = new Bandit("Forest Bandit");
        Boss = new List<Character>() { new BanditBoss("Forest Bandit Boss") };
        DaleForest forest = new DaleForest();
        LocationMenu forestMenu = new LocationMenu(forest);
        Exit = forestMenu;
    }
    public override List<Character> GenerateEncounter(int x, int y)
    {
        Random rnd = new Random();
        int random = rnd.Next(x, y);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new Bandit("Forest Bandit"));
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