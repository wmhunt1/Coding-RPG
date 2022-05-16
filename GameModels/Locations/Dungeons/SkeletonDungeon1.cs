using System;
namespace GameModels;

public class SkeletonDungeon1 : Dungeon
{
    public SkeletonDungeon1(string name = "Town Graveyard") : base(name)
    {
        Name = name;
        Encounter = new BasicSkeleton("Graveyard Skeleton");
        DaleTown town = new DaleTown();
        TownMenu townMenuExit = new TownMenu(town);
        Exit = townMenuExit;
    }
    public override List<Character> GenerateEncounter(int x, int y)
    {
        Random rnd = new Random();
        int random = rnd.Next(2, 5);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new BasicSkeleton("Graveyard Skeleton"));
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