using System;
namespace GameModels;

public class SummoningSpell: Spell
{
 
    public Character Summon = new Character("Name");
    public SummoningSpell(string name, int level, int cost):base(name, level, cost)
    {
        Name = name;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void CastSpell(Character caster, List<Character> targets)
    {
        caster.SpendMP(ManaCost);
        targets.Add(Summon);
    }
}