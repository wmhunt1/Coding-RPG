namespace GameModels;
public class Feet : Armor
{
    public Feet(string name, int cost, int protection, string protectionType) : base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        hero.Feet = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero, Character inventory)
    {
        hero.Feet = new BareFeet();
        if (this.Name != "Bare")
        {
            this.AddItemToInventory(inventory);
        }
    }
    public override void EquipItemFromInventory(Character hero, Character inventory)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Feet.UnEquipItem(hero, inventory);
        this.RemoveItemFromInventory(inventory);
        this.EquipItem(hero, inventory);
    }
    public override void UnEquipItemFromEquipment(Character hero, Character inventory)
    {
        this.UnEquipItem(hero, inventory);

    }
}