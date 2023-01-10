namespace GameModels;
public class CookRawFish : CraftingRecipe
{

    public CookRawFish(string name = "Cook Raw Fish", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = new CookingSkill();
        RecipeInput = new RawFish();
        RecipeOutput = new CookedFish();
    }
}