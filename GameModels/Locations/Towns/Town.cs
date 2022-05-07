using System;
namespace GameModels;

public class Town : Location
{
    public Town(string name):base(name)
    {
        Name = name;
    }
}