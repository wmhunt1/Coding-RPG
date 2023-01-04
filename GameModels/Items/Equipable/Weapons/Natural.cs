namespace GameModels;

public class Natural : OneHMelee
{  
       public Natural(string name, int cost, int weaponDmg, string weaponDmgType):base(name, cost, weaponDmg, weaponDmgType)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = weaponDmgType;
    }
}