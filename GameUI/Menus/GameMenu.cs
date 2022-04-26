using GameModels;

namespace GameUI;
public class GameMenu : Menu
{
    new public string Name = "Game Menu";
    public override void ShowMenu(Character hero)
    {
        Console.WriteLine("[1] View Character Sheet");
        Console.WriteLine("[2] Enter Town");
        Console.WriteLine("[0] Back to Main Menu");

        string? UserInput = Console.ReadLine();
        switch(UserInput)
        {
            case "1":
                Console.WriteLine("Character Sheet");
                break;
            case "2":
                TownMenu townMenu = new TownMenu();
                townMenu.ShowMenu(hero);
                break;
            case "0":
                MainMenu mainMenu = new MainMenu();
                mainMenu.ShowMenu(hero);
                break;
            default:
                break;
        }
    }
}
