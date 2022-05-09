using System;
namespace GameModels;

public class RatQuest1 : Quest
{
    public RatQuest1(string name = "Rats in The Cellar", string id = "RQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 3;
        Description = $"Kill the rats in the inn cellar";
        QuestTarget = "Cellar Rat";
    }
}