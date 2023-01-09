namespace GameModels;
public class DaleValley : Location
{
    public DaleValley(string name = "Valley Of Dale") : base(name)
    {
        Name = name;
    }
    public override void EntryEvent(Character hero)
    {
        //bandit battle at bridge
        base.EntryEvent(hero);
    }
    public override void LocationContent(Character hero)
    {
        bool showForest = true;
        while (showForest)
        {
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Visit Dale Town");
            Console.WriteLine("[3] Visit Dale Forest");
            Console.WriteLine($"[0] Leave {Name}");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.DisplayMenu(hero);
                    break;
                case "2":
                    DaleTown daleTown = new DaleTown();
                    LocationMenu daleTownMenu = new LocationMenu(daleTown.Name, daleTown);
                    daleTownMenu.DisplayMenu(hero);
                    break;
                case "3":
                    DaleForest daleForest = new DaleForest();
                    LocationMenu daleForestMenu = new LocationMenu(daleForest.Name, daleForest);
                    daleForestMenu.DisplayMenu(hero);
                    break;
                case "0":
                    showForest = false;
                    break;
                default:
                    break;
            }
        }
    }
}