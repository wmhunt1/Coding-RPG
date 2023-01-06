namespace GameModels;
public class Quest
{
    public string Name;
    public string QuestStatus = "Not Started";
    public string QuestDescription;
    public Quest(string name, string questDescription)
    {
        Name = name;
        QuestDescription = questDescription;
    }
    public void StartQuest(Character hero)
    {
        QuestStatus = "In Progress";
        hero.AddQuestToJournal(this);
    }
    public void FinishQuest(Character hero)
    {
        QuestStatus = "Finished";
    }
    public virtual void JournalEntry(Character hero)
    {
        Console.WriteLine($"{Name} - {QuestStatus}");
        Console.WriteLine($"{QuestDescription}");
    }
}