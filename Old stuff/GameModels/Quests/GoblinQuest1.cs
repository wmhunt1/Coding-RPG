using System;
namespace GameModels;

public class GoblinQuest1 : DungeonQuest
{
    UIScripts ui = new UIScripts();
    public GoblinQuest1(string name = "Goblin Slayer", string id = "GQ1") : base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 1;
        Description = $"Kill the Goblin Boss";
        QuestTarget = "Goblin Boss";
    }
    public override void QuestDialogue(Character hero)
    {
        if (QuestState == 0)
        {
            Console.WriteLine("The local mines have overrun by goblins. Go clear them out?");
            QuestState++;
            ui.AnyKey();
        }
        else if (QuestState == 1 && QuestObjectiveProgess < QuestObjective)
        {
            Console.WriteLine("Please kill those goblins");
            ui.AnyKey();
        }
        else if (QuestObjective <= QuestObjectiveProgess && QuestState < 100)
        {
            Console.WriteLine("You killed the goblins. Here's some gold");
            hero.AddGold(100);
            QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Feel free to mine ore if you need it");
            ui.AnyKey();
        }
    }
}