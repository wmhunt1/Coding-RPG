using System;
namespace GameModels;

public class Rogue : Job
{
    public Rogue(string name = "Rogue"):base(name)
    {
        Name = name;
        Weapon = new Dagger();
    }
}