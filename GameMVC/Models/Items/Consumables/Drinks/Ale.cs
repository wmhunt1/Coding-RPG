using System.Text.Json.Serialization;

namespace GameModels;
public class Ale : Drink
{   
    public Ale(string name = "Ale", int cost = 1):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}