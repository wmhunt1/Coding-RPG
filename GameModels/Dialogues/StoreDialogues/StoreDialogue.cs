namespace GameModels;
public class StoreDialogue : Dialogue
{
    public Store AssociatedStore {get; set;}
    public StoreDialogue(string name, Store store):base(name)
    {
        Name = name;
        AssociatedStore = store;
    }
    public override void HaveDialogue(Character hero)
    {
        
    }
}