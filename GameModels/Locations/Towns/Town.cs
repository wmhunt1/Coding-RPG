using System;
namespace GameModels;

public class Town : Location
{
    public Town(string name):base(name)
    {
        Name = name;
    }
    public override void VisitLocation(Hero hero)
    {

    }
}