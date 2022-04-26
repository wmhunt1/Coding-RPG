using GameModels;

namespace GameUI;
public class TownMenu : Menu
{
    new public string Name = "Town";
    public override void ShowMenu(Character hero)
    {
        Console.WriteLine($"---------- {Name}  ----------");
        Console.WriteLine("[1] View Character Sheet");
        Console.WriteLine("[0] Leave Town");

        string? UserInput = Console.ReadLine();
        switch(UserInput)
        {
            case "1":
                Console.WriteLine("Character Sheet");
                break;
            case "0":
                GameMenu gameMenu = new GameMenu();
                gameMenu.ShowMenu(hero);
                break;
            default:
                break;
        }
    }
}