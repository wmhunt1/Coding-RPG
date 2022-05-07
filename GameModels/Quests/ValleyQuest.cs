using System;
namespace GameModels;

public class ValleyQuest : Quest
{
    public ValleyQuest(string name = "Welcome to The Valley", string id = "MQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestState = 1;
        Description = "Deliver Letter";
        QuestObjective = 1;
    }
}