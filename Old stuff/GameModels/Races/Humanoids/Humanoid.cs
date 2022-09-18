using System;
namespace GameModels;

public class Humanoid : Race
{
    public Humanoid(string name = "Humanoid"):base(name)
    {
        Name = name;
    }
}