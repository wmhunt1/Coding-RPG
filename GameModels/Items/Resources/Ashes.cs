using System.Text.Json.Serialization;
namespace GameModels;
public class Ashes : Resource
{   
    public Ashes(string name = "Ashes", int cost = 2):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}