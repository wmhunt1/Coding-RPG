using System.Text.Json.Serialization;

namespace GameModels;
public class MineOre : CraftingRecipe
{

    public MineOre(string name = "Mine Ore", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = "Mining";
        RecipeInput = new NoInput();
        RecipeOutput = new Ore();
    }
}