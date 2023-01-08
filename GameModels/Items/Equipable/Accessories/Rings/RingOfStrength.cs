namespace GameModels;
public class RingOfStrength : Ring
{
    public RingOfStrength(string name = "Ring of Strength", int cost = 10) : base(name, cost)
    {
        Name = name;
        Cost = cost;
        EquipmentEnchantment = new StrengthBonusEnchantment();
    }

}