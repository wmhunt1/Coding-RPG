using System.Text.Json.Serialization;

namespace GameModels;
public class BurnWood : CraftingRecipe
{

    public BurnWood(string name = "Burn Wood", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = "Firemaking";
        RecipeInput = new Wood();
        RecipeOutput = new Ashes();
    }
}