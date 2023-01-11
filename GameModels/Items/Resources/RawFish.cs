using System.Text.Json.Serialization;
namespace GameModels;
public class RawFish : Resource
{   
    public RawFish(string name = "Raw Fish", int cost = 0):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}