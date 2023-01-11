using System.Text.Json.Serialization;
namespace GameModels;
public class DaleSmith : Smith
{
    public DaleSmith(string name, List<Item> storeInventory) : base(name, storeInventory)
    {
        Name = name;
        StoreInventory = storeInventory;
        StoreDialogue = new DaleSmithStoreDialogue(Name, this);
    }
}