using System;
using GameModels;

namespace GameSpace
{
    public class LocationMenu : Menu
    {
        public string Name;
        public LocationMenu(string name)
        {
            Name = name;
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                showMenu = false;
            }
        }
    }
}