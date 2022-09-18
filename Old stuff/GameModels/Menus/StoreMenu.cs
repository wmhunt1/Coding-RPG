using System;

namespace GameModels;
public class StoreMenu : Menu
{

    Store Store;
    public StoreMenu(Store store)
    {
        Store = store;
    }
    public override void ShowMenu(Hero hero)
    {
        bool exitMenu = false;
        while (!exitMenu)
        {
            Console.WriteLine("---------- Coding RPG ----------");
            Console.WriteLine($"---------- {Store.Name}  ----------");
            Store.VisitLocation(hero);
        }
    }
}