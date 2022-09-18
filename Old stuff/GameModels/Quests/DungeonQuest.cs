using System;
namespace GameModels;

public class DungeonQuest : Quest
{
    public DungeonQuest(string name, string id):base(name, id)
    {
        Name = name;
        QuestID = id;
    }
    public override void QuestDialogue(Character hero)
    {

    }
}