namespace GameModels;
public class Weapon : Equipable
{   
    public int WeaponDmg;
    public string WeaponDmgType;
    public Weapon(string name, int weaponDmg, string weaponDmgType):base(name)
    {
        Name = name;
        WeaponDmg = weaponDmg;
        WeaponDmgType = weaponDmgType;
    }
    public override void Equip(Character hero)
    {
        hero.Weapon = this;
        Console.WriteLine($"{hero.Name} equips {this.Name}");
    }
}