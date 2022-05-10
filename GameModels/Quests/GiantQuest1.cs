using System;
namespace GameModels;

public class GiantQuest1 : DungeonQuest
{
    public GiantQuest1(string name = "Of Minotaurs and Men", string id = "GiantQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 1;
        Description = "Rescue Foreman George";
        QuestTarget = "Paul the Giant";
    }
}