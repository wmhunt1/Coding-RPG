namespace GameModels;
public class NoNeck : Neck
{
    public NoNeck(string name = "None", int cost = 0) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }

}