using System;
using GameModels;

namespace GameSpace
{
    public class StoreMenu : LocationMenu
    {
        public string StoreName = "Store";
        public List<Item> StoreInventory = new List<Item>();
        public StoreMenu(string storeName, List<Item> storeInventory)
        {
            StoreName = storeName;
            StoreInventory = storeInventory;
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