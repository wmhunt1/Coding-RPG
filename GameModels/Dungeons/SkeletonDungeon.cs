using System;
namespace GameModels;

public class SkeletonDungeon : Dungeon
{
    public SkeletonDungeon(string name = "Town Graveyard"):base(name)
    {
        Name = name;
        Encounter = new BasicSkeleton("Graveyard Skeleton");
    }
}