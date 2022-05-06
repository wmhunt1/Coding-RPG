using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class InnMenu : Menu
{
    new public string Name = "Inn";
    public UIScripts ui = new UIScripts();
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
            if (hero.Journal[2].QuestState > 0)
            {
                Console.WriteLine("[5] Enter cellar");
            }
            Console.WriteLine("[0] Leave Inn");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
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
                    break;
                case "5":
                    if (hero.Journal[2].QuestState > 0)
                    {
                        RatDungeon ratCellar = new RatDungeon();
                        InnMenu innMenu = new InnMenu();
                        DungeonMenu ratCellarMenu = new DungeonMenu(ratCellar, innMenu);
                        ratCellarMenu.ShowMenu(hero);
                    }
                    break;
                case "0":
                    TownMenu townMenu = new TownMenu();
                    townMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }
        }       
    }
}