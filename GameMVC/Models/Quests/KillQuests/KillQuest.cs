using System.Text.Json.Serialization;

namespace GameModels;
public class KillQuest : Quest
{
    [JsonPropertyName("Quantity")]
    public int Quantity { get; set; }
    [JsonPropertyName("TotalKilled")]
    public int TotalKilled { get; set; } = 0;
    [JsonPropertyName("TargetMonster")]
    public string TargetMonster { get; set; }
    public KillQuest(string name, string questDescription, int goldReward, int quantity, string target) : base(name, questDescription, goldReward)
    {
        Name = name;
        QuestDescription = questDescription;
        GoldReward = goldReward;
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