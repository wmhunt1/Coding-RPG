using System.Text.Json.Serialization;
namespace GameModels;
public class MiningSkill : GatheringSkill
{
    public MiningSkill(string name = "Mining") : base(name)
    {
        Name = name;
    }
    public override void GatheringMessage(Character skiller, Item item)
    {
        Console.WriteLine($"{skiller.Name} mines a {item.Name} deposit and gets a(n) {item.Name}");
    }
}