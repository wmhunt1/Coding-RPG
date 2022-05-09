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
        Console.WriteLine("You are a fledgling adventurer.");
        ui.AnyKey();
        Console.WriteLine("Alongside your loyal canine companion you are on your way to Dale Valley.");
        ui.AnyKey();
        Console.WriteLine("There you must deliver a letter to The Valley's Lord.");
        ui.AnyKey();
    }
    //quests
    public void BanditQuest1(Character hero)
    {
        if (hero.Journal.Find(x => x.QuestID == "BQ1").QuestState == 0)
        {
            Console.WriteLine("I've put out a bounty on bandits in the forest");
            hero.Journal.Find(x => x.QuestID == "BQ1").QuestState += 1;
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "BQ1").QuestState == 1 && hero.Journal.Find(x => x.QuestID == "BQ1").QuestObjectiveProgess < hero.Journal.Find(x => x.QuestID == "BQ1").QuestObjective)
        {
            Console.WriteLine("Please kill those bandits");
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "BQ1").QuestObjective <= hero.Journal.Find(x => x.QuestID == "BQ1").QuestObjectiveProgess && hero.Journal.Find(x => x.QuestID == "BQ1").QuestState < 100)
        {
            Console.WriteLine("You killed the bandits. Here's some gold");
            hero.AddGold(100);
            hero.Journal.Find(x => x.QuestID == "BQ1").QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Thanks for killing those bandits");
            ui.AnyKey();
        }
    }
    public void GiantQuest1(Character hero)
    {
         if (hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestState == 0)
        {
            Console.WriteLine("Please help up, our Foreman George has been kidnapped by Paul the Giant");
            hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestState ++;
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestState == 1 && hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestObjectiveProgess < hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestObjective)
        {
            Console.WriteLine("Please rescue Goerge");
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestObjective <= hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestObjectiveProgess && hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestState < 100)
        {
            Console.WriteLine("You rescued George. Here's some gold");
            hero.AddGold(100);
            hero.Journal.Find(x => x.QuestID == "GiantQ1").QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Feel free to chop some wood if you need it");
            ui.AnyKey();
        }
    }
    public void GoblinQuest1(Character hero)
    {
        if (hero.Journal.Find(x => x.QuestID == "GQ1").QuestState == 0)
        {
            Console.WriteLine("The local mines have overrun by goblins. Go clear them out?");
            hero.Journal.Find(x => x.QuestID == "GQ1").QuestState ++;
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "GQ1").QuestState == 1 && hero.Journal.Find(x => x.QuestID == "GQ1").QuestObjectiveProgess < hero.Journal.Find(x => x.QuestID == "GQ1").QuestObjective)
        {
            Console.WriteLine("Please kill those goblins");
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "GQ1").QuestObjective <= hero.Journal.Find(x => x.QuestID == "GQ1").QuestObjectiveProgess && hero.Journal.Find(x => x.QuestID == "GQ1").QuestState < 100)
        {
            Console.WriteLine("You killed the goblins. Here's some gold");
            hero.AddGold(100);
            hero.Journal.Find(x => x.QuestID == "GQ1").QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Feel free to mine ore if you need it");
            ui.AnyKey();
        }
    }
    public void RatQuest1(Character hero)
    {
        if (hero.Journal.Find(x => x.QuestID == "RQ1").QuestState == 0)
        {
            Console.WriteLine("Innkeeper: 'Want to make some Gold? Go kill some rats in the cellar.'");
            hero.Journal.Find(x => x.QuestID == "RQ1").QuestState++;
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "RQ1").QuestState == 1 && hero.Journal.Find(x => x.QuestID == "RQ1").QuestObjectiveProgess < hero.Journal.Find(x => x.QuestID == "RQ1").QuestObjective)
        {
            Console.WriteLine("Well get going");
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "RQ1").QuestObjective <= hero.Journal.Find(x => x.QuestID == "RQ1").QuestObjectiveProgess && hero.Journal.Find(x => x.QuestID == "RQ1").QuestState < 100)
        {
            Console.WriteLine("You killed the rats. Here's some gold");
            hero.AddGold(25);
            hero.Journal.Find(x => x.QuestID == "RQ1").QuestState = 100;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Thanks for killing those rats");
            ui.AnyKey();
        }
    }
    public void SkeletonQuest1(Character hero)
    {
        if (hero.Journal.Find(x => x.QuestID == "SQ1").QuestState == 0)
        {
            Console.WriteLine("Can you deal with the skeletons rising in the graveyard");
            hero.Journal.Find(x => x.QuestID == "SQ1").QuestState++;
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "SQ1").QuestState == 1 && hero.Journal.Find(x => x.QuestID == "SQ1").QuestObjectiveProgess < hero.Journal.Find(x => x.QuestID == "SQ1").QuestObjective)
        {
            Console.WriteLine("Please kill those skeletons");
            ui.AnyKey();
        }
        else if (hero.Journal.Find(x => x.QuestID == "SQ1").QuestObjective <= hero.Journal.Find(x => x.QuestID == "SQ1").QuestObjectiveProgess && hero.Journal.Find(x => x.QuestID == "SQ1").QuestState < 100)
        {
            Console.WriteLine("You killed the skeletons. Here's some gold");
            hero.AddGold(100);
            hero.Journal.Find(x => x.QuestID == "SQ1").QuestState = 50;
            ui.AnyKey();
        }
        else
        {
            Console.WriteLine("Thanks for killing those skeletons");
            ui.AnyKey();
        }
    }
    public void ValleyQuest1(Character hero)
    {
        if (hero.Journal.Find(x => x.QuestID == "MQ1").QuestState == 1)
        {
            Console.WriteLine("You make your way into the valley towards Dale Town");
            ui.AnyKey();
            Console.WriteLine("You make your way along the road when your dog begins to growl.");
            ui.AnyKey();
            Console.WriteLine("You glance about and soon find yourself surrounded by goblins");
            List<Character> ambush = new List<Character>();
            ambush.Add(new Goblin("Ambushing Goblin"));
            ambush.Add(new Goblin("Ambushing Goblin"));
            ambush.Add(new Goblin("Ambushing Goblin"));
            CombatScripts ambushCombat = new CombatScripts();
            ambushCombat.RunCombat(hero, ambush);
            if (hero.CurrentHP > 0)
            {
                Console.WriteLine("You manage to fight off the goblins and they flee into the woods");
            }
            else
            {
                hero.Gold = 0;
                Console.WriteLine("You are knocked unconscious and wake up several hours later as your dog licks your face.");
                ui.AnyKey();
                Console.WriteLine("You slowly get to your feet.");
            }
            hero.RemoveFromInventory(hero.Inventory.Find(x => x.Name == "Letter to Lord Dale"));
            Console.WriteLine("You brush yourself off and discover that your gold has been stolen and worse... your letter for the lord");
            ui.AnyKey();
            //later add search option
            Console.WriteLine("Unable to track the goblins, you decide to continue to town for help.");
            hero.Journal.Find(x => x.QuestID == "MQ1").QuestState = 2;
        }
        else if (hero.Journal.Find(x => x.QuestID == "MQ1").QuestState == 2)
        {
            Console.WriteLine("You arrive in Dale Town");
            ui.AnyKey();
            Console.WriteLine("An old knight approaches you and asks if you are okay as you look a bit roughed up.");
            ui.AnyKey();
            Console.WriteLine("You inform the old knight that you were attacked by goblins and had an important letter stolen");
            ui.AnyKey();
            if (hero.CurrentHP > 0)
            {
                Console.WriteLine("You also inform the old knight that they robbed you");
                ui.AnyKey();
            }
            Console.WriteLine("The old knight informs you that there have been problems with goblins lately and that you should ask around to find them.");
            ui.AnyKey();
            Console.WriteLine("As you thank the old man and leave he informs you that he is called Old Abe.");
            ui.AnyKey();
            if (hero.CurrentHP > 0)
            {
                Console.WriteLine("As you leave Old Abe stops you and gives you a few gold so you can get a room at the inn.");
                //can try to refuse
                ui.AnyKey();
                Console.WriteLine("When you thank him again he tells you not to worry about it");
            }
            hero.Journal.Find(x => x.QuestID == "MQ1").QuestState = 3;
        }
        else
        {

        }
    }
}