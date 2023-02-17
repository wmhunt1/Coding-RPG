using System.Text.Json.Serialization;

namespace GameModels;
public class OffHandWeapon : OffHand
{
    [JsonPropertyName("OffHandDamageValue")]
    public int OffHandDamageValue { get; set; }
    [JsonPropertyName("OffHandDamageType")]
    public DamageType OffHandDamageType { get; set; } = new DamageType("Untyped");
    public OffHandWeapon(string name, int cost, int offhandDmg) : base(name, cost)
    {
        Name = name;
        Cost = cost;
        OffHandDamageValue = offhandDmg;
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        hero.Equipment.OffHand = this;
        hero.Equipment.OffHandDamageBonus += OffHandDamageValue;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero, Character inventory)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Equipment.OffHand = new EmptyHand();
        hero.Equipment.OffHandDamage -= OffHandDamageValue;
        if (this.Name != "Empty Hand")
        {
            this.AddItemToInventory(inventory);
        }
    }
}