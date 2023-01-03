using System;
using GameModels;

namespace GameSpace
{
    public class MainMenu : Menu
    {
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                Console.WriteLine("===== Coding RPG =====");
                Console.WriteLine("[1] Continue");
                Console.WriteLine("[2] New Game");
                Console.WriteLine("[3] Load Game");
                Console.WriteLine("[4] Settings");
                Console.WriteLine("[0] Quit Game");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                    case "2":
                    case "3":
                        GameMenu gameMenu = new GameMenu();
                        gameMenu.DisplayMenu(hero);
                        break;
                    case "0":
                        showMenu = false;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}