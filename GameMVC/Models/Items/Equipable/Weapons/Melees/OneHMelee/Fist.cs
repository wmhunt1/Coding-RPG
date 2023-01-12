using System.Text.Json.Serialization;
namespace GameModels;

public class Fist : OneHMelee
{
    public Fist(string name = "Fist", int cost = 0, int weaponDmg = 0) : base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new BludgeoningDamage();
    }
}