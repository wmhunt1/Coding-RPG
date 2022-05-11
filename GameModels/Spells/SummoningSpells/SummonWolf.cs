using System;
namespace GameModels;

public class SummonWolf : SummoningSpell
{
 
    public SummonWolf(string name = "Summon Wolf", int level = 1, int cost = 5):base(name, level, cost)
    {
        Name = name;
        SpellLevel = level;
        ManaCost = cost;
        Summon = new Wolf("Wolf Summon");
    }
    public override void CastSpell(Character caster, List<Character> targets)
    {
        caster.SpendMP(ManaCost);
        targets.Add(Summon);
    }
}