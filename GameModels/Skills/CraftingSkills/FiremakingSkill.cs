namespace GameModels;
public class FiremakingSkill : CraftingSkill
{
    public FiremakingSkill(string name = "Firemaking") : base(name)
    {
        Name = name;
    }
    public override void CraftingSuccess(Character skiller, Item input, Item output)
    {
        Console.WriteLine($"{skiller.Name} goes burns a {input.Name} and gets a {output.Name}");
    }
    public override void CraftingFailure(Character skiller, Item input)
    {
        Console.WriteLine($"{skiller.Name} did not have any {input.Name} to burn");
    }
}