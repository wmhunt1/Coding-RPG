using System.Text.Json.Serialization;

namespace GameModels;
public class DungeonQuest : Quest
{
     [JsonPropertyName("TargetDungeon")]
    public string TargetDungeon {get; set;}
     [JsonPropertyName("TargetDungeonCleared")]
    public bool TargetDungeonCleared {get; set;} = false;
    public DungeonQuest(string name, string questDescription, int goldReward, string targetDungeon) : base(name, questDescription, goldReward)
    {
        Name = name;
        GoldReward = goldReward;
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