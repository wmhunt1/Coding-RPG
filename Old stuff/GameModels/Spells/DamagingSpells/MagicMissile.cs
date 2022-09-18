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
            Console.WriteLine($"[{i+1}] {targets[i].Name}");   
        }
        int target = int.Parse(Console.ReadLine());
        int damage = targets[target-1].CalculateDamage(caster, targets[target-1], true);
        Console.WriteLine($"{caster.Name} casts {Name}");
        targets[target-1].DamageHP(damage);
        targets[target-1].DamageHP(damage);
        targets[target-1].DamageHP(damage);
    }
}