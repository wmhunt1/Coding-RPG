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
}