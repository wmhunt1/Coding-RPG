using System.Text.Json.Serialization;

namespace GameModels;
public class Torso : Armor
{
    public Torso(string name, int cost, int protection) : base(name, cost, protection)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = new UnTypedProtection();
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        hero.Equipment.Torso = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero, Character inventory)
    {
        hero.Equipment.Torso = new NakedTorso();
        if (this.Name != "Naked")
        {
            this.AddItemToInventory(inventory);
        }
    }
    public override void EquipItemFromInventory(Character hero, Character inventory)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Equipment.Torso.UnEquipItem(hero, inventory);
        this.RemoveItemFromInventory(inventory);
        this.EquipItem(hero, inventory);
    }
    public override void UnEquipItemFromEquipment(Character hero, Character inventory)
    {
        this.UnEquipItem(hero, inventory);

    }
}