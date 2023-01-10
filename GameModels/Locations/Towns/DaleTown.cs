namespace GameModels;
public class DaleTown : Town
{
    public DaleTown(string name = "Dale Town") : base(name)
    {
        Name = name;
    }
    public override void LocationContent(Character hero)
    {
        bool showTown = true;
        while (showTown)
        {
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Dreaming Worker Inn");
            Console.WriteLine("[3] Forgeheart Smithy");
            Console.WriteLine("[4] General Store");
            Console.WriteLine($"[0] Leave {Name}");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.DisplayMenu(hero);
                    break;
                case "2":
                    DaleInn daleInn = new DaleInn("Dale Inn", new List<Item>{new Ale()}, 1);
                    StoreMenu innStore = new StoreMenu(daleInn);
                    innStore.DisplayMenu(hero);
                    break;
                case "3":
                    DaleSmith daleSmith = new DaleSmith("Forgeheart Smithy", new List<Item>{new TwoHAxe(), new Dagger(), new WoodenShield()});
                    StoreMenu smithStore = new StoreMenu(daleSmith);
                    smithStore.DisplayMenu(hero);
                    break;
                case "4":
                    Store daleStore = new Store("Dale Town General Store", new List<Item>{new HealingPotion("Healing Potion", 5, 5)});
                    StoreMenu storeMenu = new StoreMenu(daleStore);
                    break;
                case "0":
                    showTown = false;
                    break;
                default:
                    break;
            }
        }
    }
}