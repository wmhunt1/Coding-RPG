namespace GameModels;
public class Wood : Resource
{   
    public Wood(string name = "Wood", int cost = 2):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}