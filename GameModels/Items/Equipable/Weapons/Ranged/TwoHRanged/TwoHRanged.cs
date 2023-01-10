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
    public override void EquipItem(Character hero)
    {
        hero.Weapon = this;
        hero.OffHand.UnEquipItem(hero);
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}