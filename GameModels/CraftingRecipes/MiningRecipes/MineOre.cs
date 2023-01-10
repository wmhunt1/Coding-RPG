namespace GameModels;
public class MineOre : CraftingRecipe
{

    public MineOre(string name = "Mine Ore", int xp = 10):base(name, xp)
    {
        Name = name;
        RecipeXP = xp;
        AssociatedSkill = new MiningSkill();
        RecipeInput = new NoInput();
        RecipeOutput = new Ore();
    }
}