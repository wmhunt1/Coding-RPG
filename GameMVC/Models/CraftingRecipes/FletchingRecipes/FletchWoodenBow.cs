using System.Text.Json.Serialization;

namespace GameModels;
public class FletchWoodenBow : CraftingRecipe
{

    public FletchWoodenBow(string name = "Fletch Wooden Bow", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = "Fletching";
        RecipeInput = new Wood();
        RecipeOutput = new WoodenBow();
    }
}