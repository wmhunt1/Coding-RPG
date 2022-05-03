using System;
namespace GameModels;

public class SkeletonDungeon : Dungeon
{
    public SkeletonDungeon(string name = "Town Graveyard"):base(name)
    {
        Name = name;
        Encounter = new List<Character>(){new BasicSkeleton("Graveyard Skeleton")};
    }
}