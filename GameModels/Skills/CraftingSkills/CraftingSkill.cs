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
    public override void SkillActivity(Character skiller, CraftingRecipe recipe)
    {
        if (skiller.Inventory.Find(x => x.Name == recipe.RecipeInput.Name) != null)
        {
            if (skiller.Inventory.Find(x => x.Name == recipe.RecipeInput.Name)?.Quantity > 0)
            {
                skiller.Inventory.Find(x => x.Name == recipe.RecipeInput.Name)?.RemoveItemFromInventory(skiller);
                CraftingSuccess(skiller, recipe.RecipeInput, recipe.RecipeOutput);
                recipe.RecipeOutput.AddItemToInventory(skiller);
                EarnSkillXP(skiller, recipe.RecipeXP);
            }
        }
        else
        {
            CraftingFailure(skiller, recipe.RecipeInput);
        }
    }
}