using System;
namespace GameModels;

public class HealingSpell : Spell
{

    public int HealingAmount;
    public HealingSpell(string name, int level, int cost) : base(name, level, cost)
    {
        Name = name;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void CastSpell(Character caster, List<Character> targets)
    {
        caster.SpendMP(ManaCost);
        for (int i = 0; i < targets.Count; i++)
        {
            Console.WriteLine($"[{i + 1}] {targets[i].Name}");
        }
        int target = int.Parse(Console.ReadLine());
        targets[target -1].GainHP(HealingAmount);
    }
}