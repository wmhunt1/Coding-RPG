using System;
namespace GameModels;

public class SkeletonQuest : Quest
{
    public SkeletonQuest(string name = "Skeleton Quest"):base(name)
    {
        Name = name;
        Description = "Kill Skeletons in the Town Graveyard";
    }
}