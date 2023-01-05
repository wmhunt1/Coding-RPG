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
        public void BuyFromStore(Character hero)
        {
            for (int item = 0; item < StoreInventory.Count; item++)
            {
                Console.WriteLine($"[{item + 1}] {StoreInventory[item].Name} - {StoreInventory[item].Cost} GP");
            }
            string? choiceInput = Console.ReadLine();
            if (choiceInput != null)
            {
                int choice = Int32.Parse(choiceInput);
                StoreInventory[choice - 1].BuyItem(hero);
            }
            AnyKey();
        }
        public void SellToStore(Character hero)
        {
            if (hero.Inventory.Count > 0)
            {
                for (int item = 0; item < hero.Inventory.Count; item++)
                {
                    Console.WriteLine($"[{item + 1}] {hero.Inventory[item].Name} - {hero.Inventory[item].Cost / 2} GP");
                }
                string? choiceInput = Console.ReadLine();
                if (choiceInput != null)
                {
                    int choice = Int32.Parse(choiceInput);
                    hero.Inventory[choice - 1].SellItem(hero);
                }
            }
            else
            {
                Console.WriteLine("You have nothing to sell!");
            }
            AnyKey();
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                Console.WriteLine(" ===== Coding RPG ===== ");
                Console.WriteLine($"===== {StoreName} =====");
                Console.WriteLine($"{hero.Name}: {hero.Gold} GP");
                Console.WriteLine("[1] Buy");
                Console.WriteLine("[2] Sell");
                Console.WriteLine("[0] Leave Store");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        BuyFromStore(hero);
                        break;
                    case "2":
                        SellToStore(hero);
                        break;
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