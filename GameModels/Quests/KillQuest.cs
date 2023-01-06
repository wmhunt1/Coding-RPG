namespace GameModels;
public class KillQuest : Quest
{
    public int Quantity;
    public int TotalKilled = 0;
    public string TargetMonster;
    public KillQuest(string name, string questDescription, int quantity, string target) : base(name, questDescription)
    {
        Name = name;
        QuestDescription = questDescription;
        Quantity = quantity;
        TargetMonster = target;
    }
    public override void JournalEntry(Character hero)
    {
        Console.WriteLine($"{Name} - {QuestStatus}");
        Console.WriteLine($"{QuestDescription}");
        Console.WriteLine($"{TargetMonster} {TotalKilled}/{Quantity}");
    }
}