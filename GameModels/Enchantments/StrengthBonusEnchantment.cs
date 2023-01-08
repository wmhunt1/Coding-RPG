namespace GameModels;
public class StrengthBonusEnchantment : Enchantment
{
    public StrengthBonusEnchantment(string name = "Strength Bonus Enchantment") : base(name)
    {
        Name = name;
    }
    public override Character ApplyEnchantmentOnEquip(Character hero)
    {
        hero.StrengthBonus += 5;
        return hero;
    }
    public override Character RemoveEnchantmentOnUnEquip(Character hero)
    {
        hero.StrengthBonus -= 5;
        return hero;
    }
}