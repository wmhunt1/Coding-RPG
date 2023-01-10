namespace GameModels;
public class FletchWoodenBow : CraftingRecipe
{

    public FletchWoodenBow(string name = "Fletch Wooden Bow", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = new FletchingSkill();
        RecipeInput = new Wood();
        RecipeOutput = new WoodenBow();
    }
}