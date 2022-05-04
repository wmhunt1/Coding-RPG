using System;
using GameModels;

namespace GameUI;
public class MainMenu : Menu
{
    new public string Name = "Main Menu";
    Hero hero = new Hero("Hero");
    public GameMenu gameMenu = new GameMenu();
    public Hero CharacterCreation(Hero hero)
    {
        string name = "";
        Console.WriteLine("What is your name?");
        name = Console.ReadLine();
        if (name == "")
        {
            name = "Hero";
        }
        hero.Name = name;
        Console.WriteLine("Choose Class");
        Console.WriteLine("[1] Freelancer");
        Console.WriteLine("[2] Rogue");
        Console.WriteLine("[3] Wizard");
        
        int job = int.Parse(Console.ReadLine());
        if (job == 1)
        {
           
        }
        else if (job == 2)
        {
            Rogue rogue = new Rogue();
            rogue.ChooseJob(hero);
        }
        else if (job == 3)
        {
            Wizard wizard = new Wizard();
            wizard.ChooseJob(hero);
            MagicMissile magicMissile = new MagicMissile();
            magicMissile.LearnSpell(hero);
        }
        else
        {

        }
        return hero;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            hero.Name = "Hero";
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] Continue");
            Console.WriteLine("[2] New Game");
            Console.WriteLine("[3] Load Game");
            Console.WriteLine("[4] Options");
            Console.WriteLine("[0] Quit Game");

            string? UserInput = Console.ReadLine();
            switch(UserInput)
            {
                case "1":
                    gameMenu.ShowMenu(hero);
                    break;
                case "2":
                    CharacterCreation(hero);
                    gameMenu.ShowMenu(hero);
                    break;
                case "3":
                    gameMenu.ShowMenu(hero);
                    break;
                case "4":
                    Console.WriteLine("Options");
                    break;
                case "0":
                    Environment.Exit(0);
                    break;
                default:
                    break;
            }
        }
    }
}
