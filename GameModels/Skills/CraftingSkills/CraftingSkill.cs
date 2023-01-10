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
    public override void SkillActivity(Character skiller, int xp, Item input, Item output)
    {
        if (skiller.Inventory.Find(x => x.Name == input.Name) != null)
        {
            if (skiller.Inventory.Find(x => x.Name == input.Name)?.Quantity > 0)
            {
                skiller.Inventory.Find(x => x.Name == input.Name)?.RemoveItemFromInventory(skiller);
                CraftingSuccess(skiller, input, output);
                output.AddItemToInventory(skiller);
                EarnSkillXP(skiller, xp);
            }
        }
        else
        {
            CraftingFailure(skiller, input);
        }
    }
}