using System.Text.Json.Serialization;

namespace GameModels;
public class CutWood : CraftingRecipe
{

    public CutWood(string name = "Cut Wood", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = "Woodcutting";
        RecipeInput = new NoInput();
        RecipeOutput = new Wood();
    }
}