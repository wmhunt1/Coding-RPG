namespace GameModels;
public class Ring : Accessory
{
    public Ring(string name, int cost) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        hero.Equipment.Ring = this;
        this.EquipmentEnchantment.ApplyEnchantmentOnEquip(hero);
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero, Character inventory)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Equipment.Ring = new EmptyFinger();
        if (this.Name != "Empty Finger")
        {
            this.AddItemToInventory(inventory);
        }
    }
    public override void EquipItemFromInventory(Character hero, Character inventory)
    {
        hero.Equipment.Ring.UnEquipItem(hero, inventory);
        this.RemoveItemFromInventory(inventory);
        this.EquipItem(hero, inventory);
    }
    public override void UnEquipItemFromEquipment(Character hero, Character inventory)
    {
        this.UnEquipItem(hero, inventory);
    }
}