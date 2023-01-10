namespace GameModels;
public class CraftingRecipe
{
    public string Name  {get; set;}
    public int RequiredLevel {get; set;} = 1;
    public Skill AssociatedSkill {get; set;} = new Skill("Skill");
    public Item RecipeInput {get; set;} = new Item("Item", 0);
    public Item RecipeOutput {get; set;} = new Item("Item", 0);
    public int RecipeXP {get; set;}
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