using System.Text.Json.Serialization;

namespace GameModels;
public class PoisonedEnchantment : Enchantment
{
    public PoisonedEnchantment(string name = "Poisoned Enchantment"):base(name)
    {
        Name = name;
    }
    public override void OnHitEnchantment(Character hero, Character target)
    {
        Console.WriteLine($"{hero.Equipment.Weapon.Name} deals 5 extra Posion Damage and Posions the {target.Name}");
        hero.AttackSpell(target, 5, new PoisonDamage());
        PoisonCondition poison = new PoisonCondition();
        poison.ApplyCondition(target);
    }
}