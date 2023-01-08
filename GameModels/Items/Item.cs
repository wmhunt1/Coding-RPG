namespace GameModels;
public class Item
{
    public string Name;
    public int Cost;
    public int Quantity = 1;
    public Item(string name, int cost)
    {
        Name = name;
        Cost = cost;
    }
    public virtual void ConsumeItem(Character hero)
    {

    }
     public Character AddItemToInventory(Character hero)
    {
        bool alreadyOwned = false;
        if (hero.Inventory.Count > 0)
        {
            for (int itm = 0; itm < hero.Inventory.Count; itm++)
            {
                if (hero.Inventory[itm].Name == Name)
                {
                    alreadyOwned = true;
                    hero.Inventory[itm].Quantity++;
                }
            }
        }
        if (alreadyOwned == false)
        {
             hero.Inventory.Add(this);
        }
        return hero;
    }
    public Character RemoveItemFromInventory(Character hero)
    {
        bool onlyOne = true;
        if (hero.Inventory.Count > 0)
        {
            for (int itm = 0; itm < hero.Inventory.Count; itm++)
            {
                if (hero.Inventory[itm].Name == Name)
                {
                    onlyOne = false;
                    hero.Inventory[itm].Quantity--;
                }
            }
        }
        if (onlyOne == true)
        {
             hero.Inventory.Remove(this);
        }
        return hero;
    }
    public void BuyItem(Character hero)
    {
        if (this.Cost > hero.Gold)
        {
            Console.WriteLine($"{hero.Name} cannot afford {this.Name}");
        }
        else
        {
            hero.RemoveGold(this.Cost);
            this.AddItemToInventory(hero);
        }
    }
    public void SellItem(Character hero)
    {
        hero.AddGold(this.Cost / 2);
        this.RemoveItemFromInventory(hero);
    }
}