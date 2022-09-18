using System;
namespace GameModels;

public class DeBuffingSpell: Spell
{
 
    public DeBuff DeBuffEffect = new DeBuff("None", 0);
    public DeBuffingSpell(string name, int level, int cost):base(name, level, cost)
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
           DeBuffEffect.AddEffect(targets[i]); 
        }
    }
}