using System;
namespace GameModels;

public class RatQuest1 : Quest
{
    UIScripts ui = new UIScripts();
    public RatQuest1(string name = "Rats in The Cellar", string id = "RQ1") : base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 3;
        Description = $"Kill the rats in the inn cellar";
        QuestTarget = "Cellar Rat";
    }
    public override void QuestDialogue(Character hero)
    {
        if (QuestState == 0)
        {
            Console.WriteLine("Innkeeper: 'Want to make some Gold? Go kill some rats in the cellar.'");
            QuestState++;
            ui.AnyKey();
        }
        else if (QuestState == 1 && QuestObjectiveProgess < QuestObjective)
        {
            Console.WriteLine("Well get going");
            ui.AnyKey();
        }
        else if (QuestObjective <= QuestObjectiveProgess && QuestState < 100)
        {
            Console.WriteLine("You killed the rats. Here's some gold");
            hero.AddGold(25);
            QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Thanks for killing those rats");
            ui.AnyKey();
        }
    }
}