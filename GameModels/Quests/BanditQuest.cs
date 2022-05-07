using System;
namespace GameModels;

public class BanditQuest : DungeonQuest
{
    public BanditQuest(string name = "Bandit Quest", string id = "BQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 1;
        Description = $"Kill the Bandit Boss";
        QuestTarget = "Bandit Boss";
    }
}