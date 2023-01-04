namespace GameModels;

public class Club : OneHMelee
{
    public Club(string name = "Club", int cost = 1, int weaponDmg = 1, string weaponDmgType = "Bludgeoning") : base(name, cost, weaponDmg, weaponDmgType)
    {
        Name = name;
        Cost = cost;
        WeaponDmg = weaponDmg;
        WeaponDmgType = weaponDmgType;
    }
}