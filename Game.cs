using System;
using GameUI;
using GameModels;
class Game
{
    Hero hero = new Hero("Placeholder");
    public void StartGame()
    {
        MainMenu mainMenu = new MainMenu();
        mainMenu.ShowMenu(hero);

    }
}