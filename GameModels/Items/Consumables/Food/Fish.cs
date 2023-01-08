namespace GameModels;
public class CookedFish : Food
{   
    public CookedFish(string name = "Cooked Fish", int cost = 2):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}