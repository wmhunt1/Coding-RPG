using System;
using GameModels;

namespace GameSpace
{
    public class DungeonMenu : LocationMenu
    {
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                Console.WriteLine(" ===== Coding RPG ===== ");
                Console.WriteLine("[0] Leave Dungeon");
                string? input = Console.ReadLine();
                switch (input)
                {
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