using System;
namespace GameModels;

public class GoblinQuest : DungeonQuest
{
    public GoblinQuest(string name = "Goblin Quest", string id = "GQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 1;
        Description = $"Kill the Goblin Boss";
        QuestTarget = "Goblin Boss";
    }
}