using System;
using GameModels;

namespace GameModels;
public class DungeonMenu : Menu
{
    public Dungeon Dungeon;
  
    public DungeonMenu(Dungeon dungeon)
    {
        Dungeon = dungeon;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        Dungeon.EnteringDungeonEvent(hero);
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Dungeon.Name}  ----------");
            Dungeon.VisitLocation(hero);
        }
    }
}