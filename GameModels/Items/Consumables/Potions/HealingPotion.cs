namespace GameModels;
public class HealingPotion : Potion
{
    public int HealingAmount;
    public HealingPotion(string name, int cost, int healingAmount) : base(name, cost)
    {
        Name = name;
        Cost = cost;
        HealingAmount = healingAmount;
    }
    public override void ConsumableEffect(Character hero)
    {
        Console.WriteLine($"{hero.Name} drinks {this.Name}, healing {HealingAmount} HP");
        hero.HealHP(HealingAmount);
    }
}