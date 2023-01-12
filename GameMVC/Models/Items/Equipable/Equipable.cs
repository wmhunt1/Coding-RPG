using System.Text.Json.Serialization;

namespace GameModels;
public class Equipable : Item
{
     [JsonPropertyName("EquipmentEnchantment")]
    public Enchantment EquipmentEnchantment {get; set;} = new Enchantment("Unenchanted");
    public Equipable(string name, int cost) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public virtual void EquipItem(Character hero, Character inventory)
    {

    }
    public virtual void EquipItemFromInventory(Character hero, Character inventory)
    {

    }
    public virtual void UnEquipItem(Character hero, Character inventory)
    {

    }
    public virtual void UnEquipItemFromEquipment(Character hero, Character inventory)
    {

    }
}