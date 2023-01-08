namespace GameModels;
public class Torso : Armor
{
    public Torso(string name, int cost, int protection, string protectionType) : base(name, cost, protection, protectionType)
    {
        Name = name;
        Cost = cost;
        Protection = protection;
        ProtectionType = protectionType;
    }
    public override void EquipItem(Character hero)
    {
        hero.Torso = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero)
    {
        hero.Torso = new NakedTorso();
        if (this.Name != "Naked")
        {
            this.AddItemToInventory(hero);
        }
    }
    public override void EquipItemFromInventory(Character hero)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Torso.UnEquipItem(hero);
        this.RemoveItemFromInventory(hero);
        this.EquipItem(hero);
    }
    public override void UnEquipItemFromEquipment(Character hero)
    {
        this.UnEquipItem(hero);

    }
}