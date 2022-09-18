using System;
namespace GameModels;

public class Location
{
    public string Name;
    public Location(string name)
    {
        Name = name;
    }
    public virtual void VisitLocation(Hero hero)
    {

    }
}