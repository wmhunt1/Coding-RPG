namespace GameModels;
public class DwarfDungeonQuestDialogue : DungeonQuestDialogue 
{
    public DwarfDungeonQuestDialogue(string name, DungeonQuest quest) : base(name, quest)
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
            FerraForgeheart ferra = new FerraForgeheart();
            ferra.JoinParty(hero);
        }
        else
        {
            for (int quest = 0; quest < hero.Journal.Count; quest++)
            {
                if (hero.Journal[quest].Name == AssociatedQuest.Name)
                {
                    var dq = (DungeonQuest)hero.Journal[quest];
                    if (dq.TargetDungeonCleared == true && dq.QuestStatus != "Finished")
                    {
                        Console.WriteLine("Thank you");
                        dq.FinishQuest(hero);
                    }
                    else if (dq.TargetDungeonCleared == true && dq.QuestStatus == "Finished")
                    {
                        Console.WriteLine("Thanks again");
                    }
                    else
                    {
                        Console.WriteLine($"You haven't {dq.QuestDescription}");
                    }
                }
            }
        }
    }
}