using System;
using GameModels;

namespace GameUI;
public class ConversationMenu : Menu
{
    new public string Name;
    public ConversationMenu(string name)
    {
        Name = name;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine(Name);
            exitMenu = true;
        }
    }
}