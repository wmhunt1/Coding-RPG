using System;
namespace GameModels;

public class SkeletonDungeon : Dungeon
{
    public SkeletonDungeon(string name = "Town Graveyard") : base(name)
    {
        Name = name;
        Encounter = new BasicSkeleton("Graveyard Skeleton");
    }
    public override List<Character> GenerateEncounter1()
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
    public override List<Character> GenerateEncounter2()
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
    public override List<Character> GenerateEncounter3()
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

}