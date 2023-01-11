using System.Text.Json.Serialization;

namespace GameModels;
public class Ring : Equipable
{
    public Ring(string name, int cost) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public override void EquipItem(Character hero)
    {
        hero.Ring = this;
        this.EquipmentEnchantment.ApplyEnchantmentOnEquip(hero);
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Ring = new EmptyFinger();
        if (this.Name != "Empty Finger")
        {
            this.AddItemToInventory(hero);
        }
    }
    public override void EquipItemFromInventory(Character hero)
    {
        hero.Ring.UnEquipItem(hero);
        this.RemoveItemFromInventory(hero);
        this.EquipItem(hero);
    }
    public override void UnEquipItemFromEquipment(Character hero)
    {
        this.UnEquipItem(hero);
    }
}