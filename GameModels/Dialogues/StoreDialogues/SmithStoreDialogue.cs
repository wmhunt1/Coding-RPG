using System.Text.Json.Serialization;

namespace GameModels;
public class SmithStoreDialogue : StoreDialogue
{
    public SmithStoreDialogue(string name, Store store):base(name, store)
    {
        Name = name;
        AssociatedStore = store;
    }
    public override void HaveDialogue(Character hero)
    {
        Console.WriteLine($"[1] Train Smithing (Y/N)?");
        string? input = Console.ReadLine();
        switch(input)
        {
            case "y":
            case "Y":
                hero.SkillBook.Find(x => x.Name == "Smithing")?.FindRecipes(hero);
                break;
            default:
                break;
        }
    }
}