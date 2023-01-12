namespace GameModels;
public class NoBack : Back
{
    public NoBack(string name = "None", int cost = 0) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }

}