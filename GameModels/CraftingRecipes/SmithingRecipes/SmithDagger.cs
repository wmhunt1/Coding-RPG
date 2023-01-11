using System.Text.Json.Serialization;

namespace GameModels;
public class SmithDagger : CraftingRecipe
{

    public SmithDagger(string name = "Smith Dagger", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = "Smithing";
        RecipeInput = new MetalBar();
        RecipeOutput = new Dagger();
    }
}