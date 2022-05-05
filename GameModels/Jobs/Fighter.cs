using System;
namespace GameModels;

public class Fighter : Job
{
    public Fighter(string name = "Fighter"):base(name)
    {
        Name = name;
        Weapon = new Sword();
    }
}