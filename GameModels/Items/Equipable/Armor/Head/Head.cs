namespace GameModels;
public class Head : Armor
{
    public Head(string name, int cost, int protection, string protectionType) : base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        hero.Head = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero, Character inventory)
    {
        hero.Head = new BareHead();
        if (this.Name != "Bare")
        {
            this.AddItemToInventory(inventory);
        }
    }
    public override void EquipItemFromInventory(Character hero, Character inventory)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Head.UnEquipItem(hero, inventory);
        this.RemoveItemFromInventory(inventory);
        this.EquipItem(hero, inventory);
    }
    public override void UnEquipItemFromEquipment(Character hero, Character inventory)
    {
        this.UnEquipItem(hero, inventory);

    }
}