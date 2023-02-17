namespace GameModels;
public class Head : Armor
{
    public Head(string name, int cost, int protection) : base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new UnTypedProtection();
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        hero.Equipment.Head = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero, Character inventory)
    {
        hero.Equipment.Head = new BareHead();
        if (this.Name != "Bare")
        {
            this.AddItemToInventory(inventory);
        }
    }
    public override void EquipItemFromInventory(Character hero, Character inventory)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Equipment.Head.UnEquipItem(hero, inventory);
        this.RemoveItemFromInventory(inventory);
        this.EquipItem(hero, inventory);
    }
    public override void UnEquipItemFromEquipment(Character hero, Character inventory)
    {
        this.UnEquipItem(hero, inventory);

    }
}