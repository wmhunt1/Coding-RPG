namespace GameModels;
public class EmptyHand : OffHand
{   
    public EmptyHand(string name = "Empty Hand", int cost = 0):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}