using System;
namespace GameModels;

public class Plant : Race
{
    public Plant(string name = "Plant"):base(name)
    {
        Name = name;
    }
}