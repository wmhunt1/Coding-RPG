using System;
namespace GameModels;

public class MetalBar : Resource
{
    public MetalBar(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
}