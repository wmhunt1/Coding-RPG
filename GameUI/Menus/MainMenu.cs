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
        Console.WriteLine("[1] Fighter");
        Console.WriteLine("[2] Rogue");
        Console.WriteLine("[3] Wizard");
        
        string job = Console.ReadLine();
        if (job == "1")
        {
            Fighter fighter = new Fighter();
            fighter.ChooseJob(hero);
            Cleave cleave = new Cleave();
            PowerAttack powerAttack = new PowerAttack();
            cleave.GainAbility(hero);
            powerAttack.GainAbility(hero);
        }
        else if (job == "2")
        {
            Rogue rogue = new Rogue();
            rogue.ChooseJob(hero);
            SneakAttack sneakAttack = new SneakAttack();
            sneakAttack.GainAbility(hero);
        }
        else if (job == "4")
        {
            Wizard wizard = new Wizard();
            wizard.ChooseJob(hero);
            MagicMissile magicMissile = new MagicMissile();
            magicMissile.LearnSpell(hero);
        }
        else if (job == "")
        {

        }
        else
        {
            
        }
        Dog dog = new Dog("Dog");
        Console.WriteLine("Name your dog");
        string dogName = Console.ReadLine();
        if (dogName == "")
        {
            dog.Name = "Dog";
        }
        else
        {
            dog.Name = dogName;
        }
        dog.CalculateStats();
        hero.AddToParty(dog);
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
