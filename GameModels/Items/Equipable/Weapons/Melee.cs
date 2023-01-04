namespace GameModels;
public class Melee : Weapon
{  
       public Melee(string name, int cost, int weaponDmg, string weaponDmgType):base(name, cost, weaponDmg, weaponDmgType)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = weaponDmgType;
    }
}