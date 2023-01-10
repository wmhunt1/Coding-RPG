namespace GameModels;
public class Ore : Resource
{   
    public Ore(string name = "Ore", int cost = 2):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}