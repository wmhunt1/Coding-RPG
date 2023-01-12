using System.Text.Json.Serialization;

namespace GameModels;
public class Food : Consumable
{   
    public Food(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}