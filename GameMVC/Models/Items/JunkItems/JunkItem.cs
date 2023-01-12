using System.Text.Json.Serialization;
namespace GameModels;
public class JunkItem : Item
{
    public JunkItem(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}