namespace GameModels;
public class Weapon : Equipable
{   
    public int WeaponDmg;
    public string WeaponDmgType;
    public Weapon(string name, int cost, int weaponDmg, string weaponDmgType):base(name, cost)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = weaponDmgType;
    }
    public override void EquipItem(Character hero)
    {
        hero.Weapon = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}