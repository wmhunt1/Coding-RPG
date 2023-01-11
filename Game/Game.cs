using System;
using GameModels;

namespace GameSpace
{
    public class Game
    {
        public void RunGame()
        {
            bool runGame = true;
            while (runGame)
            {
                Character hero = new Character("Hero"); 
                MainMenu mainMenu = new MainMenu();
                mainMenu.DisplayMenu(hero, hero);
                runGame = false;
            }
        }
    }
}