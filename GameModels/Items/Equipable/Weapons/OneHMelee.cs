namespace GameModels;

public class OneHMelee : Melee
{  
       public OneHMelee(string name, int cost, int weaponDmg, string weaponDmgType):base(name, cost, weaponDmg, weaponDmgType)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = weaponDmgType;
    }
}