using System.Text.Json.Serialization;

namespace GameModels;
public class Shield : OffHand
{
    [JsonPropertyName("ShieldValue")]
    public int ShieldValue { get; set; } = 0;
    public Shield(string name, int cost, int shieldValue) : base(name, cost)
    {
        Name = name;
        Cost = cost;
        ShieldValue = shieldValue;
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        hero.OffHand = this;
        hero.Shield += ShieldValue;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero, Character inventory)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.OffHand = new EmptyHand();
        hero.Shield -= ShieldValue;
        if (this.Name != "Empty Hand")
        {
            this.AddItemToInventory(inventory);
        }
    }
}