using System.Text.Json.Serialization;
namespace GameModels;
public class RatTail : JunkItem
{
    public RatTail(string name = "Rat Tail", int cost = 2):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}