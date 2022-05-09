using System;
namespace GameModels;

public class GoblinDungeon1 : Dungeon
{
    public GoblinDungeon1(string name = "Dwarven Mine") : base(name)
    {
        Name = name;
        Encounter = new Goblin("Goblin");
        Boss = new List<Character>() { new GoblinBoss("Goblin Boss") };
    }
    public override List<Character> GenerateEncounter(int x, int y)
    {
        Random rnd = new Random();
        int random = rnd.Next(x, y);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new Goblin("Goblin"));
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