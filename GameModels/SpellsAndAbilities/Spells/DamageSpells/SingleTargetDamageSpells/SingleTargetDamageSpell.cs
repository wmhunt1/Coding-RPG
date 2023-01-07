namespace GameModels;
public class SingleTargetDamageSpell : DamageSpell
{
    public SingleTargetDamageSpell(string name, string school, int level, int cost, int spellDamage) : base(name, school, level, cost, spellDamage)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        SpellDamage = spellDamage;
        SpellDamageType = new ForceDamage();
    }
    public override void SpellEffect(Character caster, List<Character> allies, List<Character> enemies)
    {
        Console.WriteLine("Select target");
        for (int enemy = 0; enemy < enemies.Count; enemy++)
        {
            Console.WriteLine($"[{enemy + 1}]{enemies[enemy].Name}: {enemies[enemy].CurrentHP}/{enemies[enemy].MaxHP}");
        }
        string? targetInput = Console.ReadLine();
        if (targetInput != null)
        {
            int target = Int32.Parse(targetInput);
            Console.WriteLine($"{enemies[target - 1].Name} is hit with the {Name}.");
            caster.AttackSpell(enemies[target - 1], SpellDamage, SpellDamageType);
        }
        else
        {
            Console.WriteLine("You choose no target and miss");
        }
    }
}