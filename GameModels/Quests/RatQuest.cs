using System;
namespace GameModels;

public class RatQuest : Quest
{
    public RatQuest(string name = "Rat Quest", string id = "RQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 3;
        Description = $"Kill the rats in the inn cellar";
        QuestTarget = "Cellar Rat";
    }
}