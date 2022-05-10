using System;
using GameModels;
using GameScripts;

namespace GameUI;
public class WorldMenu : Menu
{
    new public string Name = "World Map";
    public StoryScripts story = new StoryScripts();
    public UIScripts ui = new UIScripts();
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine($"---------- {Name}  ----------");
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Enter The Valley of Dale");
            Console.WriteLine("[3] Test Feature");
            Console.WriteLine("[0] Back to Main Menu");

            string? UserInput = Console.ReadLine();
            switch (UserInput)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.ShowMenu(hero);
                    break;
                case "2":

                    if (hero.Journal.Find(x => x.QuestID == "MQ1").QuestState == 1)
                    {
                        story.ValleyQuest1(hero);
                    }
                    ValleyMenu valleyMenu = new ValleyMenu();
                    valleyMenu.ShowMenu(hero);
                    break;
                case "3":
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
}