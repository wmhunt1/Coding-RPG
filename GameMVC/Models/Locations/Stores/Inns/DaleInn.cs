using System.Text.Json.Serialization;
namespace GameModels;
public class DaleInn : Inn
{
    public DaleInn(string name, List<Item> storeInventory, int roomCost) : base(name, storeInventory, roomCost)
    {
        Name = name;
        StoreInventory = storeInventory;
        RoomCost = roomCost;
        StoreDialogue = new DaleInnDialogue(Name, this);
    }
}