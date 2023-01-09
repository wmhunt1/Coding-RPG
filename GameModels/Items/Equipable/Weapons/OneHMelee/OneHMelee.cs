namespace GameModels;

public class OneHMelee : Melee
{  
       public OneHMelee(string name, int cost, int weaponDmg):base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PhysicalDamage();
    }
}