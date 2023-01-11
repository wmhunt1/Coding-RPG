using System.Text.Json.Serialization;
namespace GameModels;
public class WoodcuttingSkill : GatheringSkill
{
    public WoodcuttingSkill(string name = "Woodcutting") : base(name)
    {
        Name = name;
    }
    public override void GatheringMessage(Character skiller, Item item)
    {
        Console.WriteLine($"{skiller.Name} chops down a {item.Name} tree and gets some {item.Name} logs");
    }
}