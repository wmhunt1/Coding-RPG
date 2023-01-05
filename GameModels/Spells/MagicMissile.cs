namespace GameModels;
public class MagicMissile : DamageSpell
{
    public MagicMissile(string name = "Magic Missile", string school = "Destruction", int level = 1, int cost = 5) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        SpellDamageType = new ForceDamage();
    }
    public override void SpellEffect(Character caster, List<Character> enemies)
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
            Console.WriteLine($"{enemies[target - 1].Name} is hit with the magic missile.");
            caster.AttackSpell(enemies[target - 1], 5, SpellDamageType);
        }
        else
        {
            Console.WriteLine("You choose no target and miss");
        }
    }
}