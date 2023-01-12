using System.Text.Json.Serialization;

namespace GameModels;
public class InnDialogue : Dialogue
{
    [JsonPropertyName("AssociatedInn")]
    public Inn AssociatedInn  {get; set;}
    public InnDialogue(string name, Inn inn):base(name)
    {
        Name = name;
        AssociatedInn = inn;
    }
    public override void HaveDialogue(Character hero)
    {
        Console.WriteLine($"Would you Like a Room? (Y/N) {AssociatedInn.RoomCost} GP");
        string? input = Console.ReadLine();
        switch(input)
        {
            case "y":
            case "Y":
                AssociatedInn.RestAtInn(hero);
                break;
            default:
                break;
        }
    }
}