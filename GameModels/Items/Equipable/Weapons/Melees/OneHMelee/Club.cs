using System.Text.Json.Serialization;
namespace GameModels;

public class Club : OneHMelee
{
    public Club(string name = "Club", int cost = 1, int weaponDmg = 1) : base(name, cost, weaponDmg)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = new BludgeoningDamage();
    }
}