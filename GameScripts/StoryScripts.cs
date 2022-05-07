using System;
using GameModels;

namespace GameScripts;
public class StoryScripts
{
    UIScripts ui = new UIScripts();
    public StoryScripts()
    {
    }
    public void GameIntro()
    {
        Console.WriteLine("Game Intro");
    }
    //quests
    public void BanditQuest(Character hero)
    {
        if (hero.Journal[0].QuestState == 0)
        {
            Console.WriteLine("I've put out a bounty on bandits in the forest");
            hero.Journal[0].QuestState++;
            ui.AnyKey();
        }
        else if (hero.Journal[0].QuestState == 1 && hero.Journal[0].QuestObjectiveProgess < hero.Journal[0].QuestObjective)
        {
            Console.WriteLine("Please kill those bandits");
            ui.AnyKey();
        }
        else if (hero.Journal[0].QuestObjective <= hero.Journal[0].QuestObjectiveProgess && hero.Journal[0].QuestState < 100)
        {
            Console.WriteLine("You killed the bandits. Here's some gold");
            hero.AddGold(100);
            hero.Journal[2].QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Thanks for killing those bandits");
            ui.AnyKey();
        }
    }
    public void GoblinQuest(Character hero)
    {
        if (hero!.Journal?[1].QuestState == 0 && hero.Journal[1] != null)
        {
            Console.WriteLine("The local mines have overrun by goblins. Go clear them out?");
            hero.Journal[1].QuestState += 1;
            ui.AnyKey();
        }
        else if (hero?.Journal?[1].QuestState == 1 && hero.Journal[1].QuestObjectiveProgess < hero.Journal[1].QuestObjective)
        {
            Console.WriteLine("Please kill those goblins");
            ui.AnyKey();
        }
        else if (hero!.Journal?[1].QuestObjective <= hero.Journal?[1].QuestObjectiveProgess && hero.Journal?[1].QuestState < 100)
        {
            Console.WriteLine("You killed the goblins. Here's some gold");
            hero.AddGold(100);
            hero.Journal[2].QuestState = 75;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Feel free to mine ore if you need it");
            ui.AnyKey();
        }
    }
    public void RatQuest(Character hero)
    {
        if (hero.Journal[2].QuestState == 0)
        {
            Console.WriteLine("Innkeeper: 'Want to make some Gold? Go kill some rats in the cellar.'");
            hero.Journal[2].QuestState++;
            ui.AnyKey();
        }
        else if (hero.Journal[2].QuestState == 1 && hero.Journal[2].QuestObjectiveProgess < hero.Journal[2].QuestObjective)
        {
            Console.WriteLine("Well get going");
            ui.AnyKey();
        }
        else if (hero.Journal[2].QuestObjective <= hero.Journal[2].QuestObjectiveProgess && hero.Journal[2].QuestState < 100)
        {
            Console.WriteLine("You killed the rats. Here's some gold");
            hero.AddGold(25);
            hero.Journal[2].QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Thanks for killing those rats");
            ui.AnyKey();
        }
    }
    public void SkeletonQuest(Character hero)
    {
        if (hero.Journal[3].QuestState == 0)
        {
            Console.WriteLine("Can you deal with the skeletons rising in the graveyard");
            hero.Journal[3].QuestState++;
            ui.AnyKey();
        }
        else if (hero.Journal[3].QuestState == 1 && hero.Journal[3].QuestObjectiveProgess < hero.Journal[3].QuestObjective)
        {
            Console.WriteLine("Please kill those skeletons");
            ui.AnyKey();
        }
        else if (hero.Journal[3].QuestObjective <= hero.Journal[3].QuestObjectiveProgess && hero.Journal[3].QuestState < 100)
        {
            Console.WriteLine("You killed the skeletons. Here's some gold");
            hero.AddGold(100);
            hero.Journal[2].QuestState = 50;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Thanks for killing those skeletons");
            ui.AnyKey();
        }
    }
}