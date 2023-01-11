using System.Text.Json.Serialization;
namespace GameModels;
public class MetalBar : Resource
{   
    public MetalBar(string name = "Metal Bar", int cost = 4):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}