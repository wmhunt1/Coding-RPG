namespace GameModels;
public class Store : Location
{
    public List<Item> StoreInventory;
    public Store(string name, List<Item> storeInventory) : base(name)
    {
        Name = name;
        StoreInventory = storeInventory;
    }
}