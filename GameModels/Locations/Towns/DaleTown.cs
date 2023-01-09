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
            Console.WriteLine("[2] Visit the Inn");//Rat quest
            //General Store
            //Blacksmith for Goblin Quest
            //church for graveyard quest
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
                    StoreMenu innStore = new StoreMenu(daleInn.Name, daleInn);
                    innStore.DisplayMenu(hero);
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