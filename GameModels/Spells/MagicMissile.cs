using System;
namespace GameModels;

public class MagicMissile: DamagingSpell
{
    public MagicMissile(string name = "Magic Missile", int level = 1, int cost = 5):base(name, level, cost)
    {
        Name = name;
        SpellLevel = level;
        ManaCost = cost;
        SpellDamage = 2;
        DamageType = new Magic();
    }
    public override void CastSpell(Character caster, List<Character> targets)
    {
        caster.SpendMP(ManaCost);
        for (int i = 0; i< targets.Count; i++)
        {
            int damage = targets[i].CalculateDamage(caster, targets[i], true);
            targets[i].DamageHP(damage);
        }
    }
}