namespace GameModels;
public class TwoHMelee : Melee
{   
    public TwoHMelee(string name, int cost, int weaponDmg):base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PhysicalDamage();
    }
    public override void EquipItem(Character hero)
    {
        hero.Weapon = this;
        hero.OffHand = new EmptyHand();
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}