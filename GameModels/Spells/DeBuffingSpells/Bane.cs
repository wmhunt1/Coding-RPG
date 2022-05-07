using System;
namespace GameModels;

public class Bane : DeBuffingSpell
{
 
    public Bane(string name = "Bane", int level = 1, int cost = 5):base(name, level, cost)
    {
        Name = name;
        SpellLevel = level;
        ManaCost = cost;
        DeBuffEffect = new BaneDeBuff();
    }
}