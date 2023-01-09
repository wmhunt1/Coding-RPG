namespace GameModels;
public class FetchQuestDialogue : QuestDialogue
{
    public FetchQuest AssociatedQuest;
    public FetchQuestDialogue(string name, FetchQuest quest) : base(name)
    {
        Name = name;
        AssociatedQuest = quest;
    }
    public override void HaveDialogue(Character hero)
    {
        bool started = AssociatedQuest.AlreadyStartedQuest(hero);
        if (started == false)
        {
            Console.WriteLine($"Go {AssociatedQuest.QuestDescription}");
            AssociatedQuest.StartQuest(hero);
        }
        else
        {
            for (int quest = 0; quest < hero.Journal.Count; quest++)
            {
                if (hero.Journal[quest].Name == AssociatedQuest.Name)
                {
                    var fq = (FetchQuest)hero.Journal[quest];
                    if (hero.Inventory.Find(x => x.Name == AssociatedQuest.FetchedItem.Name) != null)
                    {
                        if (hero.Inventory.Find(x => x.Name == AssociatedQuest.FetchedItem.Name)?.Quantity >= fq.Quantity && fq.QuestStatus != "Finished")
                        {
                            Console.WriteLine("Thank you");
                            fq.FinishQuest(hero);
                        }
                    }
                    else if (fq.QuestStatus == "Finished")
                    {
                        Console.WriteLine("Thanks again");
                    }
                    else
                    {
                        Console.WriteLine($"You haven't {fq.QuestDescription}");
                    }
                }
            }
        }
    }

}