namespace GameModels;
public class GatheringSkill : Skill
{
    public GatheringSkill(string name) : base(name)
    {
        Name = name;
    }
    public virtual void GatheringMessage(Character skiller, Item item)
    {

    }
    public override void SkillActivity(Character skiller, CraftingRecipe recipe)
    {
        GatheringMessage(skiller, recipe.RecipeOutput);
        recipe.RecipeOutput.AddItemToInventory(skiller);
        EarnSkillXP(skiller, recipe.RecipeXP);
    }
}