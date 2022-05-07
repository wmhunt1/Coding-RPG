using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class InnMenu : Menu
{
    new public string Name = "Inn";
    StoryScripts story = new StoryScripts();
    UIScripts ui = new UIScripts();
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Buy Beer (1 Gold)");
            Console.WriteLine("[3] Rent Room (1 Gold)");
            Console.WriteLine("[4] Talk to InnKeeper");
            if (hero.Journal.Find(x => x.Name == "Rat Quest").QuestState > 0)
            {
                Console.WriteLine("[5] Enter cellar");
            }
            Console.WriteLine("[0] Leave Inn");

            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    Beer beer = new Beer();
                    if (hero.HasEnoughGold(beer.Cost) == false)
                    {
                        hero.RemoveGold(beer.Cost);
                        beer.UseItem(hero);
                    }
                    else
                    {
                        Console.WriteLine("You don't have enough Gold for a Beer");
                    }
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "3":
                    if (hero.HasEnoughGold(1) == false)
                    {
                        hero.RemoveGold(1);
                        Console.WriteLine("You rest for the night");
                        hero.FullRest();
                        for (int i = 0; i < hero.Companions.Count; i++)
                        {
                            hero.Companions[i].FullRest();
                        }
                    }
                    else
                    {
                        Console.WriteLine("You don't have enough Gold for a Room");
                    }
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "4":
                    story.RatQuest(hero);
                    break;
                case "5":
                    if (hero.Journal.Find(x => x.Name == "Rat Quest").QuestState > 0)
                    {
                        RatDungeon ratCellar = new RatDungeon();
                        InnMenu innMenu = new InnMenu();
                        DungeonMenu ratCellarMenu = new DungeonMenu(ratCellar, innMenu);
                        ratCellarMenu.ShowMenu(hero);
                    }
                    break;
                case "0":
                    Town town = new Town("Town");
                    TownMenu townMenu = new TownMenu(town);
                    townMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }
    }
}