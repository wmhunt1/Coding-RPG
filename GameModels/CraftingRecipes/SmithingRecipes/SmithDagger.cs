namespace GameModels;
public class SmithDagger : CraftingRecipe
{

    public SmithDagger(string name = "Smith Dagger", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = new SmithingSkill();
        RecipeInput = new MetalBar();
        RecipeOutput = new Dagger();
    }
}