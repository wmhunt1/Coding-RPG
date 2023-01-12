using System.Text.Json.Serialization;
namespace GameModels
{
    public class MainMenu : Menu
    {
        public void Continue(Character hero)
        {
            //eventually have this now what the last character played was.
        }
        public void NewGame(Character hero)
        {
            Console.WriteLine("Name your character....");
            string? name = Console.ReadLine();
            if (name == null || name == "")
            {
                name = "Hero";
                hero.Name = name;
            }
            else
            {
                hero.Name = name;
            }
        }
        public void Settings(Character hero)
        {

        }
        public void QuitGame(Character hero)
        {

        }
        public override void DisplayMenu(Character hero, Character inventory)
        {
            bool showMenu = true;
            GameMenu gameMenu = new GameMenu();
            while (showMenu)
            {
                ShowTitle();
                Console.WriteLine("[1] Continue");
                Console.WriteLine("[2] New Game");
                Console.WriteLine("[3] Load Game");
                Console.WriteLine("[4] Settings");
                Console.WriteLine("[0] Quit Game");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        Continue(hero);
                        gameMenu.DisplayMenu(hero, hero);
                        break;
                    case "2":
                        NewGame(hero);
                        gameMenu.DisplayMenu(hero, hero);
                        break;
                    case "3":
                        LoadGame(hero);
                        gameMenu.DisplayMenu(hero, hero);
                        break;
                    case "4":
                        Settings(hero);
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