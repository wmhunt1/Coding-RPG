namespace GameModels;
public class WoodenShield : Shield
{
    public WoodenShield(string name = "Wooden Shield", int cost = 2, int shieldValue = 1) : base(name, cost, shieldValue)
    {
        Name = name;
        Cost = cost;
        ShieldValue = shieldValue;
    }
}