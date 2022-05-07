using System;
namespace GameModels;

public class Bless : BuffingSpell
{
 
    public Bless(string name = "Bless", int level = 1, int cost = 5):base(name, level, cost)
    {
        Name = name;
        SpellLevel = level;
        ManaCost = cost;
        BuffEffect = new BlessBuff();
    }
}