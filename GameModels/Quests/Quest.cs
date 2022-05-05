using System;
namespace GameModels;

public class Quest
{
    public string Name;
    public int QuestObjective = 0;
    public int QuestObjectiveProgess = 0;
    public int QuestState = 0;
    public string QuestTarget = "";
    public string Description = "";
    public Quest(string name)
    {
        Name = name;
    }
    public int TrackQuestProgress()
    {
        QuestObjectiveProgess++;
        return QuestObjectiveProgess;
    }
}