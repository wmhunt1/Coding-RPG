using System;

namespace GameModels;
public class LocationMenu : Menu
{
    StoryScripts story = new StoryScripts();
    UIScripts ui = new UIScripts();
    Location Location;

    public LocationMenu(Location location)
    {
        Location = location;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Location.Name}  ----------");
          

        }
    }
}