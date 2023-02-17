using System.Text.Json.Serialization;
namespace GameModels;
public class TwoHRanged : Ranged
{   
    public TwoHRanged(string name, int cost, int weaponDmg):base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PhysicalDamage();
    }
    public override void EquipItem(Character hero, Character inventory)
    {
        hero.Equipment.Weapon = this;
        hero.Equipment.OffHand.UnEquipItem(hero, inventory);
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}