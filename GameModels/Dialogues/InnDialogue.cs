namespace GameModels;
public class InnDialogue : Dialogue
{
    Inn Inn;
    public InnDialogue(string name, Inn inn):base(name)
    {
        Name = name;
        Inn = inn;
    }
    public override void HaveDialogue(Character hero)
    {
        Console.WriteLine($"Would you Like a Room? (Y/N) {Inn.RoomCost} GP");
        string? input = Console.ReadLine();
        switch(input)
        {
            case "y":
            case "Y":
                Inn.RestAtInn(hero);
                break;
            default:
                break;
        }
    }
}