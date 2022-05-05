using System;
namespace GameModels;

public class RatQuest : Quest
{
    public RatQuest(string name = "Rat Quest"):base(name)
    {
        Name = name;
        QuestObjective = 3;
        Description = $"Kill the rats in the inn cellar";
        QuestTarget = "Cellar Rat";
    }
}