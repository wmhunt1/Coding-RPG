using System.Text.Json.Serialization;

namespace GameModels;
public class Weapon : Equipable
{
    [JsonPropertyName("WeaponDmg")]
    public int WeaponDmg { get; set; }
    [JsonPropertyName("WeaponDmgType")]
    public DamageType WeaponDmgType { get; set; }
    public Weapon(string name, int cost, int weaponDmg) : base(name, cost)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PhysicalDamage();
    }
    public override void EquipItem(Character hero)
    {
        hero.Weapon = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
    public override void UnEquipItem(Character hero)
    {
        this.EquipmentEnchantment.RemoveEnchantmentOnUnEquip(hero);
        hero.Weapon = new Fist();
        if (this.Name != "Fist")
        {
            this.AddItemToInventory(hero);
        }
    }
    public override void EquipItemFromInventory(Character hero)
    {
        hero.Weapon.UnEquipItem(hero);
        this.RemoveItemFromInventory(hero);
        this.EquipItem(hero);
    }
    public override void UnEquipItemFromEquipment(Character hero)
    {
        this.UnEquipItem(hero);
    }
}