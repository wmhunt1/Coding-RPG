using System;
namespace GameModels;

public class DamagingSpell: Spell
{
    public int SpellDamage = 0;
    public Type DamageType = new Type("Untyped");
    public DamagingSpell(string name, int level, int cost):base(name, level, cost)
    {
        Name = name;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void CastSpell(Character caster, List<Character> targets)
    {
        caster.SpendMP(ManaCost);
        for (int i = 0; i< targets.Count; i++)
        {
            
        }
    }
}