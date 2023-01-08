namespace GameModels;
public class Equipable : Item
{
    public Enchantment EquipmentEnchantment = new Enchantment("Unenchanted");
    public Equipable(string name, int cost) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public virtual void EquipItem(Character hero)
    {

    }
    public virtual void EquipItemFromInventory(Character hero)
    {

    }
    public virtual void UnEquipItem(Character hero)
    {

    }
    public virtual void UnEquipItemFromEquipment(Character hero)
    {

    }
}