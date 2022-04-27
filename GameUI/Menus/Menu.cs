using System;
using GameModels;

namespace GameUI;
public class Menu
{
    public string Name = "Menu";
    public virtual void ShowMenu(Character hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine(Name);
            exitMenu = true;
        }
    }
}
