using System;
using GameModels;

namespace GameUI;
public class InnMenu : Menu
{
    new public string Name = "Inn";
    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
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
            Console.WriteLine("[5] Enter cellar");
            Console.WriteLine("[0] Leave Inn");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                       hero.HasEnoughGold(1);
                    if (hero.HasEnoughGold(1) == false)
                    {
                        hero.RemoveGold(1);
                        Console.WriteLine("You enjoy a refreshing Beer");
                    }
                    else
                    {
                        Console.WriteLine("You don't have enough Gold for a Beer");
                    }
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "3":
                    hero.HasEnoughGold(1);
                    if (hero.HasEnoughGold(1) == false)
                    {
                        hero.RemoveGold(1);
                        Console.WriteLine("You rest for the night");
                        hero.GainHP(hero.MaxHP);
                    }
                    else
                    {
                        Console.WriteLine("You don't have enough Gold for a Room");
                    }
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "4":
                    Console.WriteLine("Innkeeper: 'Want to make some Gold? Go kill some rats in the cellar.'");
                    Console.WriteLine("Press any key to continue");
                    Console.ReadLine();
                    break;
                case "5":
                    Rat rat = new Rat("Cellar Rat");
                    DungeonMenu ratCellar = new DungeonMenu("Rat Cellar", rat);
                    ratCellar.ShowMenu(hero);
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