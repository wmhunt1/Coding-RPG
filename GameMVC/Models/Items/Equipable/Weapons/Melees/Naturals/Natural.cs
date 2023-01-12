using System.Text.Json.Serialization;

namespace GameModels;
public class Natural : OneHMelee
{  
       public Natural(string name, int cost, int weaponDmg):base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new PhysicalDamage();
    }
}