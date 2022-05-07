using System;
namespace GameModels;

public class Perk
{
    public string Name;
    public int RequiredLevel = 0;
    public string Description = "";
    public bool Has = false;
    public Perk(string name)
    {
        Name = name;
    }
    public virtual Character ApplyPerk(Character character)
    {
        Has = true;
        return character;
    }
}