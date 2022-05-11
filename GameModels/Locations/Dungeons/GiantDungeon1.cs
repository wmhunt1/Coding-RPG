using System;
namespace GameModels;

public class GiantDungeon1 : Dungeon
{
    public GiantDungeon1(string name = "Giant's Cave") : base(name)
    {
        Name = name;
        Encounter = new Wolf("Tamed Wofl");
        Boss = new List<Character>() { new HillGiant("Paul the Giant") };
    }
    public override List<Character> GenerateEncounter(int x, int y)
    {
        Random rnd = new Random();
        int random = rnd.Next(x, y);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new Wolf("Tamed Wolf"));
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
     public override void AfterBossEvent(Character hero)
    {   
        Console.WriteLine("With Paul the Giant Defeated you rescue Foreman George.");
    }
}