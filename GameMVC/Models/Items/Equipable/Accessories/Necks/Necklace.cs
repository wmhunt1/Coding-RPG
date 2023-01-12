namespace GameModels;
public class Necklace : Neck
{
    public Necklace(string name = "Necklace", int cost = 0) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }

}