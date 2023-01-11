using System.Text.Json.Serialization;

namespace GameModels;
public class SmeltOre : CraftingRecipe
{

    public SmeltOre(string name = "Smelt Ore", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = "Smithing";
        RecipeInput = new Ore();
        RecipeOutput = new MetalBar();
    }
}