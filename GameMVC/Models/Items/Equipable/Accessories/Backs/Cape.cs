namespace GameModels;
public class Cape : Back
{
    public Cape(string name = "Cape", int cost = 0) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }

}