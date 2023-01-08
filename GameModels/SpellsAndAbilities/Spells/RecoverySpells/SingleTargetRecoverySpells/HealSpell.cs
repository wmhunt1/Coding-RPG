namespace GameModels;
public class HealSpell : SingleTargetHealingSpell
{
   public HealSpell(string name = "Heal", string school = "Healing", int level = 1, int cost = 5, int healingAmount = 5) : base(name, school, level, cost, healingAmount)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        HealingAmount = healingAmount;
    }
}