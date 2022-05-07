using System;
namespace GameModels;

public class BuffingSpell: Spell
{
 
    public Buff BuffEffect = new Buff("Name", 0);
    public BuffingSpell(string name, int level, int cost):base(name, level, cost)
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
            BuffEffect.AddEffect(targets[i]);
        }
    }
}