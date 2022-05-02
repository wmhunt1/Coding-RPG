using System;
namespace GameModels;

public class Undead : Race
{
    public Undead(string name = "Undead"):base(name)
    {
        Name = name;
    }
}