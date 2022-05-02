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
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    Console.WriteLine("Blacksmith Inventory");
                    Console.WriteLine("[1] Buy Dagger: 5 GP");
                    Console.WriteLine("[2] Buy Sword : 10 GP");
                    Console.WriteLine("[0] Go Back");
                    string? BuyingInput = Console.ReadLine();
                    switch (BuyingInput)
                    {
                        case "1":
                            Weapon dagger = new Weapon("Dagger", 5, 2);
                            blackSmith.BuyEquipment(hero, dagger);
                            break;
                        case "2":
                            Weapon sword = new Weapon("Sword", 10, 3);
                            blackSmith.BuyEquipment(hero, sword);
                            break;
                        case "0":
                            break;
                        default:
                            break;
                    }
                    break;
                case "3":
                    if (hero.GoblinQuest == 0)
                    {
                        Console.WriteLine("The local mines have overrun by goblins. Go clear them out?");
                        hero.GoblinQuest++;
                        Console.WriteLine("Press any key to continue");
                        Console.ReadLine();
                    }
                    else if (hero.GoblinQuest == 1)
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
                    townMenu.ShowMenu(hero);
                    break;
                default:
                    break;
            }

        }
    }
}