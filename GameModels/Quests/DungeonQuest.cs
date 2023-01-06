namespace GameModels;
public class DungeonQuest : Quest
{
    public string TargetDungeon;
    public bool TargetDungeonCleared = false;
    public DungeonQuest(string name, string questDescription, string targetDungeon) : base(name, questDescription)
    {
        Name = name;
        QuestDescription = questDescription;
        TargetDungeon = targetDungeon;
    }
    public override void JournalEntry(Character hero)
    {
        Console.WriteLine($"{Name} - {QuestStatus}");
        Console.WriteLine($"{QuestDescription}");
        Console.WriteLine($"{TargetDungeon} Cleared: {TargetDungeonCleared}");
    }
}