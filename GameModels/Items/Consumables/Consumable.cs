namespace GameModels;
public class Consumable : Item
{   
    public Consumable(string name, int cost):base(name, cost)
    {
        Name = name;
        Cost = cost;
    }
    public virtual void ConsumableEffect(Character hero)
    {

    }
    public override void ConsumeItem(Character hero)
    {   
        ConsumableEffect(hero);
        hero.RemoveItemFromInventory(this);
    }
}