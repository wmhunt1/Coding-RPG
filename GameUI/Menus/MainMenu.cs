using GameModels;

namespace GameUI;
public class MainMenu : Menu
{
    new public string Name = "Main Menu";
    Character hero = new Character("Hero");
    public GameMenu gameMenu = new GameMenu();
    public override void ShowMenu(Character hero)
    {
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
