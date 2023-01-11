using System.Text.Json.Serialization;
namespace GameModels;
public class CookingSkill : CraftingSkill
{
    public CookingSkill(string name = "Cooking") : base(name)
    {
        Name = name;
    }
    public override void CraftingSuccess(Character skiller, Item input, Item output)
    {
        Console.WriteLine($"{skiller.Name} goes cooks a {input.Name} and gets a {output.Name}");
    }
    public override void CraftingFailure(Character skiller, Item input)
    {
        Console.WriteLine($"{skiller.Name} did not have any {input.Name} to cook");
    }
}