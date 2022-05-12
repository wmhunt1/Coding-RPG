using System;

namespace GameModels;
public class CharacterSheetMenu : Menu
{
    new public string Name = "Character Sheet";
    UIScripts ui = new UIScripts();
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
            Console.WriteLine("[5] Skills");
            Console.WriteLine("[6] Spells");
            Console.WriteLine("[7] Abilities");
            Console.WriteLine("[8] Feats & Perks");
            Console.WriteLine("[9] Party");
            Console.WriteLine("[0] Close");

            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    hero.DisplayStats();
                    ui.AnyKey();
                    break;
                case "2":
                    hero.DisplayEquipment();
                    ui.AnyKey();
                    break;
                case "3":
                    hero.DisplayInventory();
                    ui.AnyKey();
                    break;
                case "4":
                    hero.DisplayJournal();
                    ui.AnyKey();
                    break;
                case "5":
                    hero.DisplaySkills();
                    ui.AnyKey();
                    break;
                case "6":
                    hero.DisplaySpellBook();
                    ui.AnyKey();
                    break;
                case "7":
                    ui.AnyKey();
                    break;
                case "8":
                    hero.DisplayFeats();
                    hero.DisplayPerks();
                    ui.AnyKey();
                    break;
                case "9":
                    hero.DisplayCompanions();
                    ui.AnyKey();
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