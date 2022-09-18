using System;
namespace GameModels;

public class Barbarian : Job
{
    public Barbarian(string name = "Barbarian"):base(name)
    {
        Name = name;
        Weapon = new Sword();
    }
}