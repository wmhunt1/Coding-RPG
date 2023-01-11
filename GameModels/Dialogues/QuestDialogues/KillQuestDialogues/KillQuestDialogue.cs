using System.Text.Json.Serialization;

namespace GameModels;
public class KillQuestDialogue : QuestDialogue
{
    [JsonPropertyName("AssociatedInn")]
    public KillQuest AssociatedQuest  {get; set;}
    public KillQuestDialogue(string name, KillQuest quest) : base(name)
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
                    var kq = (KillQuest)hero.Journal[quest];
                    if (kq.TotalKilled >= kq.Quantity && kq.QuestStatus != "Finished")
                    {
                        Console.WriteLine("Thank you");
                        kq.FinishQuest(hero);
                    }
                    else if (kq.TotalKilled >= kq.Quantity && kq.QuestStatus == "Finished")
                    {
                        Console.WriteLine("Thanks again");
                    }
                    else
                    {
                        Console.WriteLine($"You haven't {kq.QuestDescription}");
                    }
                }
            }
        }
    }

}