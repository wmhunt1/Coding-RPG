using System.Text.Json.Serialization;

namespace GameModels;
public class OffHand : Equipable
{   
    public OffHand(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
     public override void EquipItem(Character hero, Character inventory)
    {
        hero.Equipment.OffHand = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero, Character inventory)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Equipment.OffHand = new EmptyHand();
        if (this.Name != "Empty Hand")
        {
            this.AddItemToInventory(inventory);
        }
    }
    public override void EquipItemFromInventory(Character hero, Character inventory)
    {
        hero.Equipment.OffHand.UnEquipItem(hero, inventory);
        this.RemoveItemFromInventory(inventory);
        this.EquipItem(hero, inventory);
    }
    public override void UnEquipItemFromEquipment(Character hero, Character inventory)
    {
        this.UnEquipItem(hero, inventory);
    }
}