namespace GameModels;
public class SmeltOre : CraftingRecipe
{

    public SmeltOre(string name = "Smelt Ore", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = new SmithingSkill();
        RecipeInput = new Ore();
        RecipeOutput = new MetalBar();
    }
}