using System.Text.Json.Serialization;

namespace GameModels;
public class HealthPotion : Potion
{
    [JsonPropertyName("HealingAmount")]
    public int HealingAmount { get; set; }
    public HealthPotion(string name, int cost, int healingAmount) : base(name, cost)
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