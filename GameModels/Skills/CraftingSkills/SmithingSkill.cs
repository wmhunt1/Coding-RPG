namespace GameModels;
public class SmithingSkill : CraftingSkill
{
    public SmithingSkill(string name = "Smiths") : base(name)
    {
        Name = name;
    }
    public override void CraftingSuccess(Character skiller, Item input, Item output)
    {
        Console.WriteLine($"{skiller.Name} goes smiths a {input.Name} and gets a {output.Name}");
    }
    public override void CraftingFailure(Character skiller, Item input)
    {
        Console.WriteLine($"{skiller.Name} did not have any {input.Name} to smiths");
    }
}