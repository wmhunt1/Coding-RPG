using System.Text.Json.Serialization;

namespace GameModels
{
    public class StoreMenu : LocationMenu
    {
        [JsonPropertyName("Store")]
        public Store Store { get; set; }
        public StoreMenu(Store store) : base(store)
        {
            Store = store;
        }
        public void BuyFromStore(Character hero)
        {
            for (int item = 0; item < Store.StoreInventory.Count; item++)
            {
                Console.WriteLine($"[{item + 1}] {Store.StoreInventory[item].Name} - {Store.StoreInventory[item].Cost} GP");
            }
            string? choiceInput = Console.ReadLine();
            int selection;
            bool parseSucess = Int32.TryParse(choiceInput, out selection);
            if (parseSucess == true && selection > 0 && selection <= Store.StoreInventory.Count)
            {
                Store.StoreInventory[selection - 1].BuyItem(hero);
            }
            AnyKey();
        }
        public void SellToStore(Character hero)
        {
            if (hero.Inventory.Count > 0)
            {
                for (int item = 0; item < hero.Inventory.Count; item++)
                {
                    if (hero.Inventory[item].Quantity > 0)
                    {
                        Console.WriteLine($"[{item + 1}] {hero.Inventory[item].Name} X {hero.Inventory[item].Quantity} - {hero.Inventory[item].Cost / 2} GP");
                    }
                }
                string? choiceInput = Console.ReadLine();
                int selection;
                bool parseSucess = Int32.TryParse(choiceInput, out selection);
                if (parseSucess == true && selection > 0 && selection <= Store.StoreInventory.Count)
                {
                    hero.Inventory[selection - 1].SellItem(hero);
                }
            }
            else
            {
                Console.WriteLine("You have nothing to sell!");
            }
            AnyKey();
        }
        public void TalkToStoreOwner(Character hero)
        {
            DialogueMenu storeDialogueMenu = new DialogueMenu(Store.StoreDialogue);
            storeDialogueMenu.DisplayMenu(hero);
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                ShowTitle();
                Console.WriteLine($"===== {Store.Name} =====");
                Console.WriteLine($"{hero.Name}: {hero.Gold} GP");
                Console.WriteLine("[1] Buy");
                Console.WriteLine("[2] Sell");
                if (Store.StoreDialogue.Name != "No Associated Dialogue")
                {
                    Console.WriteLine("[3] Talk to the Owner");
                }
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
                    case "3":
                        if (Store.StoreDialogue.Name != "No Associated Dialogue")
                        {
                            TalkToStoreOwner(hero);
                        }
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