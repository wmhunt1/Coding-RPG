using System;
using GameModels;

namespace GameUI;
public class BlacksmithMenu : Menu
{
    new public string Name = "Blacksmith";
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Buy Weapons and Armor");
            Console.WriteLine("[0] Leave Blacksmith");
              string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":
                    Console.WriteLine("Blacksmith Inventory");
                    Console.WriteLine("[1] Buy Sword : 10 GP");
                    Console.WriteLine("[0] Go Back");
                    string? BuyingInput = Console.ReadLine();
                    switch (BuyingInput)
                    {
                        case "1":
                            if (hero.Weapon.Name != "Sword")
                            {
                                if (hero.HasEnoughGold(10) == false)
                                {
                                    hero.RemoveGold(10);
                                    Console.WriteLine("You buy a new sword");
                                    Weapon sword = new Weapon("Sword", 10, 3);
                                    sword.EquipItem(hero);
                                }
                                else
                                {
                                    Console.WriteLine("You don't have enough Gold for a Sword");
                                }
                            }
                            else
                            {
                                Console.WriteLine("You already own a Sword");
                                Console.WriteLine("Press any key to continue");
                                Console.ReadLine();
                            }
                            break;
                        case "0":
                            break;
                        default:
                            break;
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