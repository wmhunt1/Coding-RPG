namespace GameModels;
public class CraftingRecipe
{
    public string Name;
    public int RequireLevel = 1;
    public Skill AssociatedSkill = new Skill("Skill");
    public Item RecipeInput = new Item("Item", 0);
    public Item RecipeOutput = new Item("Item", 0);
    public int RecipeXP;
    public CraftingRecipe(string name, int xp)
    {
        Name = name;
        RecipeXP = xp;
    }
    public Character LearnRecipe(Character crafter)
    {
        if (crafter.CraftingRecipesKnown.Find(x => x.Name == Name) == null)
        {
            Console.WriteLine($"{crafter.Name} learns the Crafting Recipe: {Name}");
            crafter.CraftingRecipesKnown.Add(this);
        }
        return crafter;
    }
}