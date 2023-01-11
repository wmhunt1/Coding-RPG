using System.Text.Json.Serialization;
namespace GameModels;
public class NoInput : Resource
{   
    public NoInput(string name = "None", int cost = 0):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}