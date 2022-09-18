using System;
namespace GameModels;

public class ValleyQuest1 : Quest
{
    UIScripts ui = new UIScripts();
    public ValleyQuest1(string name = "Welcome to The Valley", string id = "MQ1") : base(name, id)
    {
        Name = name;
        QuestID = id;
        QuestState = 1;
        Description = "Deliver Letter";
        QuestObjective = 1;
    }
    public override void QuestDialogue(Character hero)
    {
        // if (hero.Journal.Find(x => x.QuestID == "MQ1").QuestState == 1)
        // {
        //     Console.WriteLine("You make your way into the valley towards Dale Town");
        //     ui.AnyKey();
        //     Console.WriteLine("You make your way along the road when your dog begins to growl.");
        //     ui.AnyKey();
        //     Console.WriteLine("You glance about and soon find yourself surrounded by goblins");
        //     List<Character> ambush = new List<Character>();
        //     ambush.Add(new Goblin("Ambushing Goblin"));
        //     ambush.Add(new Goblin("Ambushing Goblin"));
        //     ambush.Add(new Goblin("Ambushing Goblin"));
        //     CombatScripts ambushCombat = new CombatScripts();
        //     ambushCombat.RunCombat(hero, ambush);
        //     if (hero.CurrentHP > 0)
        //     {
        //         Console.WriteLine("You manage to fight off the goblins and they flee into the woods");
        //     }
        //     else
        //     {
        //         hero.Gold = 0;
        //         Console.WriteLine("You are knocked unconscious and wake up several hours later as your dog licks your face.");
        //         ui.AnyKey();
        //         Console.WriteLine("You slowly get to your feet.");
        //     }
        //     hero.RemoveFromInventory(hero.Inventory.Find(x => x.Name == "Letter to Lord Dale"));
        //     Console.WriteLine("You brush yourself off and discover that your gold has been stolen and worse... your letter for the lord");
        //     ui.AnyKey();
        //     //later add search option
        //     Console.WriteLine("Unable to track the goblins, you decide to continue to town for help.");
        //     hero.Journal.Find(x => x.QuestID == "MQ1").QuestState = 2;
        // }
        // else if (hero.Journal.Find(x => x.QuestID == "MQ1").QuestState == 2)
        // {
        //     Console.WriteLine("You arrive in Dale Town");
        //     ui.AnyKey();
        //     Console.WriteLine("An old knight approaches you and asks if you are okay as you look a bit roughed up.");
        //     ui.AnyKey();
        //     Console.WriteLine("You inform the old knight that you were attacked by goblins and had an important letter stolen");
        //     ui.AnyKey();
        //     if (hero.CurrentHP > 0)
        //     {
        //         Console.WriteLine("You also inform the old knight that they robbed you");
        //         ui.AnyKey();
        //     }
        //     Console.WriteLine("The old knight informs you that there have been problems with goblins lately and that you should ask around to find them.");
        //     ui.AnyKey();
        //     Console.WriteLine("As you thank the old man and leave he informs you that he is called Old Abe.");
        //     ui.AnyKey();
        //     if (hero.CurrentHP > 0)
        //     {
        //         Console.WriteLine("As you leave Old Abe stops you and gives you a few gold so you can get a room at the inn.");
        //         //can try to refuse
        //         ui.AnyKey();
        //         Console.WriteLine("When you thank him again he tells you not to worry about it");
        //     }
        //     hero.Journal.Find(x => x.QuestID == "MQ1").QuestState = 3;
        // }
        // else
        // {

        // }
    }
}