using System.Text.Json.Serialization;
namespace GameModels;
public class FishingSkill : GatheringSkill
{
    public FishingSkill(string name = "Fishing") : base(name)
    {
        Name = name;
    }
    public override void GatheringMessage(Character skiller, Item item)
    {
        Console.WriteLine($"{skiller.Name} goes fishing and catches a {item.Name}");
    }
}