using System.Text.Json.Serialization;

namespace GameModels;
public class Undead : Character
{
    public Undead(string name) : base(name)
    {
        Name = name;
        //Add weakness to holy or radiant
    }
}