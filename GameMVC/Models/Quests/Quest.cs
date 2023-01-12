using System.Text.Json.Serialization;

namespace GameModels;
public class Quest
{
    [JsonPropertyName("Name")]
    public string Name { get; set; }
    [JsonPropertyName("QuestStatus")]
    public string QuestStatus { get; set; } = "In Progress";
    [JsonPropertyName("QuestDescription")]
    public string QuestDescription { get; set; }
    [JsonPropertyName("GoldReward")]
    public int GoldReward { get; set; }
    [JsonPropertyName("ItemReward")]
    public Item ItemReward { get; set; } = new Item("Optional", 0);
    public Quest(string name, string questDescription, int goldReward)
    {
        Name = name;
        QuestDescription = questDescription;
        GoldReward = goldReward;
    }
    public bool AlreadyStartedQuest(Character hero)
    {
        bool alreadyStarted = false;
        if (hero.Journal.Count > 0)
        {
            for (int quest = 0; quest < hero.Journal.Count; quest++)
            {
                if (hero.Journal[quest].Name == Name)
                {
                    alreadyStarted = true;
                }
            }
        }
        return alreadyStarted;
    }
    public Character AddQuestToJournal(Character hero)
    {
        hero.Journal.Add(this);
        return hero;
    }
    public void StartQuest(Character hero)
    {
        bool alreadyStarted = AlreadyStartedQuest(hero);
        if (alreadyStarted == false)
        {
            this.AddQuestToJournal(hero);
        }
    }
    public void FinishQuest(Character hero)
    {
        QuestStatus = "Finished";
        hero.AddGold(GoldReward);
        if (ItemReward.Name != "Optional")
        {
            ItemReward.AddItemToInventory(hero);
        }
    }
    public virtual void JournalEntry(Character hero)
    {
        Console.WriteLine($"{Name} - {QuestStatus}");
        Console.WriteLine($"{QuestDescription}");
    }
}