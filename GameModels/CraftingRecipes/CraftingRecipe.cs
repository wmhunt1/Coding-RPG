using System.Text.Json.Serialization;

namespace GameModels;
public class CraftingRecipe
{
    [JsonPropertyName("Name")]
    public string Name  {get; set;}
    [JsonPropertyName("RequiredLevel")]
    public int RequiredLevel {get; set;} = 1;
    [JsonPropertyName("AssociatedSkill")]
    public string AssociatedSkill {get; set;} = "Skill";
    [JsonPropertyName("RecipeInput")]
    public Item RecipeInput {get; set;} = new Item("Item", 0);
    [JsonPropertyName("RecipeOutput")]
    public Item RecipeOutput {get; set;} = new Item("Item", 0);
    [JsonPropertyName("RecipeXP")]
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