using System;
namespace GameModels;

public class GoblinQuest1 : DungeonQuest
{
    public GoblinQuest1(string name = "Goblin Slayer", string id = "GQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 1;
        Description = $"Kill the Goblin Boss";
        QuestTarget = "Goblin Boss";
    }
}