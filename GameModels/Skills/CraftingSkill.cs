namespace GameModels;
public class CraftingSkill : Skill
{
    public CraftingSkill(string name) : base(name)
    {
        Name = name;
    }
    public virtual void CraftingSuccess(Character skiller, Item input, Item output)
    {

    }
    public virtual void CraftingFailure(Character skiller, Item input)
    {

    }
    public bool CheckForResource(Character skiller, Item resource)
    {
        bool hasResource = false;
        for (int res = 0; res < skiller.Inventory.Count; res++)
        {
            if (skiller.Inventory[res].Name == resource.Name && skiller.Inventory[res].Quantity > 0)
            {
                hasResource = true;
            }
        }
        return hasResource;
    }
    public override void SkillActivity(Character skiller, int xp, Item input, Item output)
    {
        bool hasResource = CheckForResource(skiller, input);
        if (hasResource == true)
        {
            for (int res = 0; res < skiller.Inventory.Count; res++)
            {
                if (skiller.Inventory[res].Name == input.Name)
                {
                    skiller.Inventory[res].RemoveItemFromInventory(skiller);
                }
            }
            CraftingSuccess(skiller, input, output);
            output.AddItemToInventory(skiller);
            EarnSkillXP(skiller, xp);
        }
        else
        {
            CraftingFailure(skiller, input);  
        }
    }
}