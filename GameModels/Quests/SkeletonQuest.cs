using System;
namespace GameModels;

public class SkeletonQuest : DungeonQuest
{
    public SkeletonQuest(string name = "Skeleton Quest", string id = "SQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 5;
        Description = $"Kill skeletons in the graveyard";
        QuestTarget = "Graveyard Skeleton";
    }
}