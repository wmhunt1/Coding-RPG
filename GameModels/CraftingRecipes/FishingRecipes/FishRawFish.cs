namespace GameModels;
public class FishRawFish : CraftingRecipe
{

    public FishRawFish(string name = "Fish Raw Fish", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = new FishingSkill();
        RecipeInput = new NoInput();
        RecipeOutput = new RawFish();
    }
}