namespace GameModels;
public class Smith : Store
{
    public Smith(string name, List<Item> storeInventory) : base(name, storeInventory)
    {
        Name = name;
        StoreInventory = storeInventory;
        StoreDialogue = new DaleSmithStoreDialogue(Name, this);
    }
}