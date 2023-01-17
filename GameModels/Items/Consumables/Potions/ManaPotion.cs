using System.Text.Json.Serialization;

namespace GameModels;
public class ManaPotion : Potion
{
    [JsonPropertyName("HealingAmount")]
    public int HealingAmount { get; set; }
    public ManaPotion(string name, int cost, int healingAmount) : base(name, cost)
    {
        Name = name;
        Cost = cost;
        HealingAmount = healingAmount;
    }
    public override void ConsumableEffect(Character hero)
    {
        Console.WriteLine($"{hero.Name} drinks {this.Name}, healing {HealingAmount} MP");
        hero.GainMana(HealingAmount);
    }
}