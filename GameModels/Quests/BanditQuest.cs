using System;
namespace GameModels;

public class BanditQuest : DungeonQuest
{
    public BanditQuest(string name = "Bandit Quest"):base(name)
    {
        Name = name;
        QuestObjective = 1;
        Description = $"Kill the Bandit Boss";
        QuestTarget = "Bandit Boss";
    }
}