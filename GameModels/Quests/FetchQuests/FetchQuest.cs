namespace GameModels;
public class FetchQuest : Quest
{
    public int Quantity {get; set;}
    public Item FetchedItem {get; set;}
    public FetchQuest(string name, string questDescription, int goldReward, int quantity, Item fetchedItem) : base(name, questDescription, goldReward)
    {
        Name = name;
        QuestDescription = questDescription;
        GoldReward = goldReward;
        Quantity = quantity;
        FetchedItem = fetchedItem;
    }
    public override void JournalEntry(Character hero)
    {
        int? amountFetched = 0;
        if (hero.Inventory.Find(x => x.Name == FetchedItem.Name) != null)
        {
            amountFetched = hero.Inventory.Find(x => x.Name == FetchedItem.Name)?.Quantity;
        }
        Console.WriteLine($"{Name} - {QuestStatus}");
        Console.WriteLine($"{QuestDescription}");
        Console.WriteLine($"{FetchedItem} {amountFetched}/{Quantity}");
    }
}