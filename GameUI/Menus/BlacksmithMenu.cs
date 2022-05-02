using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class BlacksmithMenu : Menu
{
    new public string Name = "Blacksmith";
    ShoppingScripts blackSmith = new ShoppingScripts();
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Buy Weapons and Armor");
            Console.WriteLine("[3] Talk to Blacksmith");
            Console.WriteLine("[0] Leave Blacksmith");
            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero!);
                    break;
                case "2":
                    Console.WriteLine("Blacksmith Inventory");
                    Console.WriteLine("[1] Buy Dagger: 5 GP");
                    Console.WriteLine("[2] Buy Sword : 10 GP");
                    Console.WriteLine("[3] Leather Vest: 5 GP");
                    Console.WriteLine("[0] Go Back");
                    string? BuyingInput = Console.ReadLine();
                    switch (BuyingInput)
                    {
                        case "1":
                            Dagger dagger = new Dagger();
                            blackSmith.BuyEquipment(hero!, dagger);
                            break;
                        case "2":
                            Sword sword = new Sword();
                            blackSmith.BuyEquipment(hero!, sword);
                            break;
                        case "3":
                            LeatherVest leatherVest = new LeatherVest();
                            blackSmith.BuyEquipment(hero!, leatherVest);
                            break;
                        case "0":
                            break;
                        default:
                            break;
                    }
                    break;
                case "3":
                    if (hero!.Journal[1].QuestState == 0 && hero.Journal[1] != null)
                    {
                        Console.WriteLine("The local mines have overrun by goblins. Go clear them out?");
                        hero.Journal[1].QuestState += 1;
                        Console.WriteLine("Press any key to continue");
                        Console.ReadLine();
                    }
                    else if (hero?.Journal?[1].QuestState == 1)
                    {
                        Console.WriteLine("Please kill those goblins");
                        Console.WriteLine("Press any key to continue");
                        Console.ReadLine();
                    }
                    else
                    {
                        Console.WriteLine("Thank you for help");
                        Console.WriteLine("Press any key to continue");
                        Console.ReadLine();
                    }
                    break;
                case "0":
                    TownMenu townMenu = new TownMenu();
                    townMenu.ShowMenu(hero!);
                    break;
                default:
                    break;
            }

        }
    }
}