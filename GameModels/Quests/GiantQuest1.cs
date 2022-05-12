using System;
namespace GameModels;

public class GiantQuest1 : DungeonQuest
{
    UIScripts ui = new UIScripts();
    public GiantQuest1(string name = "Of Minotaurs and Men", string id = "GiantQ1") : base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 1;
        Description = "Rescue Foreman George";
        QuestTarget = "Paul the Giant";
    }
    public override void QuestDialogue(Character hero)
    {
        if (QuestState == 0)
        {
            Console.WriteLine("Please help up, our Foreman George has been kidnapped by Paul the Giant");
            QuestState++;
            ui.AnyKey();
        }
        else if (QuestState == 1 && QuestObjectiveProgess < QuestObjective)
        {
            Console.WriteLine("Please rescue Goerge");
            ui.AnyKey();
        }
        else if (QuestObjective <= QuestObjectiveProgess && QuestState < 100)
        {
            Console.WriteLine("You rescued George. Here's some gold");
            hero.AddGold(100);
            QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Feel free to chop some wood if you need it");
            ui.AnyKey();
        }
    }
}