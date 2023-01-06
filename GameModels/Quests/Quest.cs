namespace GameModels;
public class Quest
{
    public string Name;
    public string QuestStatus = "In Progress";
    public string QuestDescription;
    public int GoldReward;
    public Item ItemReward = new Item("Optional", 0);
    public Quest(string name, string questDescription, int goldReward)
    {
        Name = name;
        QuestDescription = questDescription;
        GoldReward = goldReward;
    }
    public void StartQuest(Character hero)
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
        if (alreadyStarted == false)
        {
            hero.AddQuestToJournal(this);
        }
    }
    public void FinishQuest(Character hero)
    {
        QuestStatus = "Finished";
        hero.AddGold(GoldReward);
        if (ItemReward.Name != "Optional")
        {
            hero.AddItemToInventory(ItemReward);
        }
    }
    public virtual void JournalEntry(Character hero)
    {
        Console.WriteLine($"{Name} - {QuestStatus}");
        Console.WriteLine($"{QuestDescription}");
    }
}