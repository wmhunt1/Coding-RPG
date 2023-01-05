using System;
using GameModels;

namespace GameSpace
{
    public class StoreMenu : LocationMenu
    {
        public Store Store;
      
        public StoreMenu(string name, Store store):base(name)
        {
            Name = name;
            Store = store;
        }
        public void BuyFromStore(Character hero)
        {
            for (int item = 0; item < Store.StoreInventory.Count; item++)
            {
                Console.WriteLine($"[{item + 1}] {Store.StoreInventory[item].Name} - {Store.StoreInventory[item].Cost} GP");
            }
            string? choiceInput = Console.ReadLine();
            if (choiceInput != null)
            {
                int choice = Int32.Parse(choiceInput);
                Store.StoreInventory[choice - 1].BuyItem(hero);
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
                Console.WriteLine($"===== {Name} =====");
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