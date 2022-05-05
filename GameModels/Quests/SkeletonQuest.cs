using System;
namespace GameModels;

public class SkeletonQuest : DungeonQuest
{
    public SkeletonQuest(string name = "Skeleton Quest"):base(name)
    {
        Name = name;
        QuestObjective = 5;
        Description = $"Kill skeletons in the graveyard";
        QuestTarget = "Graveyard Skeleton";
    }
}