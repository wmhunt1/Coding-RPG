using System;
namespace GameModels;

public class GoblinQuest : DungeonQuest
{
    public GoblinQuest(string name = "Goblin Quest"):base(name)
    {
        Name = name;
        QuestObjective = 1;
        Description = $"Kill the Goblin Boss";
        QuestTarget = "Goblin Boss";
    }
}