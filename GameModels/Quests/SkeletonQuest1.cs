using System;
namespace GameModels;

public class SkeletonQuest1 : DungeonQuest
{
    UIScripts ui = new UIScripts();
    public SkeletonQuest1(string name = "Skeleton Quest", string id = "SQ1"):base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestObjective = 5;
        Description = $"Kill skeletons in the graveyard";
        QuestTarget = "Graveyard Skeleton";
    }
        public override void QuestDialogue(Character hero)
    {
        if (QuestState == 0)
        {
            Console.WriteLine("Can you deal with the skeletons rising in the graveyard");
            QuestState++;
            ui.AnyKey();
        }
        else if (QuestState == 1 && QuestObjectiveProgess < QuestObjective)
        {
            Console.WriteLine("Please kill those skeletons");
            ui.AnyKey();
        }
        else if (QuestObjective <= QuestObjectiveProgess && QuestState < 100)
        {
            Console.WriteLine("You killed the skeletons. Here's some gold");
            hero.AddGold(100);
            QuestState = 50;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Thanks for killing those skeletons");
            ui.AnyKey();
        }
    }
}