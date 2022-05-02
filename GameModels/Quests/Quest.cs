using System;
namespace GameModels;

public class Quest
{
    public string Name;
    public int QuestState = 0;
    public string Description = "";
    public Quest(string name)
    {
        Name = name;
    }
}