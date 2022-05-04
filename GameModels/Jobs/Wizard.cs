using System;
namespace GameModels;

public class Wizard : Job
{
    public Wizard(string name = "Wizard"):base(name)
    {
        Name = name;
        Weapon = new Wand();
    }
}