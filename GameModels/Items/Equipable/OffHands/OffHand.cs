using System.Text.Json.Serialization;

namespace GameModels;
public class OffHand : Equipable
{   
    public OffHand(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
     public override void EquipItem(Character hero)
    {
        hero.OffHand = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.OffHand = new EmptyHand();
        if (this.Name != "Empty Hand")
        {
            this.AddItemToInventory(hero);
        }
    }
    public override void EquipItemFromInventory(Character hero)
    {
        hero.OffHand.UnEquipItem(hero);
        this.RemoveItemFromInventory(hero);
        this.EquipItem(hero);
    }
    public override void UnEquipItemFromEquipment(Character hero)
    {
        this.UnEquipItem(hero);
    }
}