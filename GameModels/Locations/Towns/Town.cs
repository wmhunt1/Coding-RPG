namespace GameModels;
public class Town : Location
{
    public Town(string name) : base(name)
    {
        Name = name;
    }
    public override void LocationContent(Character hero)
    {
        Console.WriteLine($"{hero.Name} enters {Name}");
        bool showTown = true;
        while (showTown)
        {
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Rest at Inn");
            Console.WriteLine("[3] Smithy");
            Console.WriteLine($"[0] Leave {Name}");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.DisplayMenu(hero);
                    break;
                case "2":
                    Inn inn = new Inn("Inn", new List<Item>{new Ale()}, 0);
                    StoreMenu innStore = new StoreMenu(inn);
                    innStore.DisplayMenu(hero);
                    break;
                case "3":
                    Smith smith = new Smith("Smith", new List<Item>{new Dagger()});
                    StoreMenu smithStore = new StoreMenu(smith);
                    smithStore.DisplayMenu(hero);
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