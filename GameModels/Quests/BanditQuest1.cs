using System;
namespace GameModels;

public class BanditQuest1 : DungeonQuest
{
    public BanditQuest1(string name = "Bandit Quest", string id = "BQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 1;
        Description = $"Kill the Bandit Boss";
        QuestTarget = "Bandit Boss";
    }
}