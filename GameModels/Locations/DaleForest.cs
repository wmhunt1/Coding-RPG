namespace GameModels;
public class DaleForest : Location
{
    public DaleForest(string name = "Dale Forest") : base(name)
    {
        Name = name;
    }
    public override void LocationContent(Character hero)
    {
        bool showForest = true;
        while (showForest)
        {
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine($"[0] Leave {Name}");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.DisplayMenu(hero);
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