using System;
namespace GameModels;

public class BanditQuest1 : DungeonQuest
{
    UIScripts ui = new UIScripts();
    public BanditQuest1(string name = "Bandit Quest", string id = "BQ1") : base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 1;
        Description = $"Kill the Bandit Boss";
        QuestTarget = "Bandit Boss";
    }
    public override void QuestDialogue(Character hero)
    {
        if (QuestState == 0)
        {
            Console.WriteLine("I've put out a bounty on bandits in the forest");
            QuestState += 1;
            ui.AnyKey();
        }
        else if (QuestState == 1 && QuestObjectiveProgess < QuestObjective)
        {
            Console.WriteLine("Please kill those bandits");
            ui.AnyKey();
        }
        else if (QuestObjective <= QuestObjectiveProgess && QuestState < 100)
        {
            Console.WriteLine("You killed the bandits. Here's some gold");
            hero.AddGold(100);
            QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Thanks for killing those bandits");
            ui.AnyKey();
        }
    }
}