using System;

using GameModels;

namespace GameUI;
public class CharacterSheetMenu : Menu
{
    new public string Name = "Character Sheet";
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine($"{hero.Name} - {hero.Job.Name}");
            Console.WriteLine("[1] Stats");
            Console.WriteLine("[2] Equipment");
            Console.WriteLine("[3] Inventory");
            Console.WriteLine("[4] Journal");
            Console.WriteLine("[0] Close");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    hero.DisplayStats();
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "2":
                    hero.DisplayEquipment();
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "3":
                    hero.DisplayInventory();
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "4":
                    hero.DisplayJournal();
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "0":
                    exitMenu = true;
                    break;
                default:
                    break;
            }
        }
    }
}