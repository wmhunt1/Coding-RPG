using System;
namespace GameModels;

public class Human : Humanoid
{
    public Human(string name = "Human"):base(name)
    {
        Name = name;
    }
}