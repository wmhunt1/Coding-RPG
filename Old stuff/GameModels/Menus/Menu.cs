using System;

namespace GameModels;
public class Menu
{
    public string Name = "Menu";
    public virtual void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine(Name);
            exitMenu = true;
        }
    }
}
