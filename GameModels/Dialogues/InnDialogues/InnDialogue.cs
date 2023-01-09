namespace GameModels;
public class InnDialogue : Dialogue
{
    public Inn AssociatedInn;
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