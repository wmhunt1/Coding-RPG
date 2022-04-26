using GameUI;
using GameModels;
class Game
{
    Character hero = new Character("");
    public void StartGame()
    {
        Console.WriteLine("---------- Coding RPG ----------");
        MainMenu mainMenu = new MainMenu();
        mainMenu.ShowMenu(hero);

    }
}