namespace GameModels;
public class Skill
{
    public string Name;
    public int SkillLevel = 1;
    public int CurrentSkillXP = 0;
    public int MaxSkillXP = 100;
    public Item Input = new Item("item", 0);
    public Item Output = new Item("item", 0);
    public Skill(string name)
    {
        Name = name;
    }
    public Character LearnSkill(Character char1)
    {
        if (char1.SkillBook.Find(x => x.Name == Name) == null)
        {
            Console.WriteLine($"{char1.Name} learns the Skill: {Name}");
            char1.SkillBook.Add(this);
        }
        return char1;
    }
    public bool CheckforSkillLevelUP(Character skiller)
    {
        bool levelUp = false;
        for (int skill = 0; skill < skiller.SkillBook.Count; skill++)
        {
            if (skiller.SkillBook[skill].CurrentSkillXP >= skiller.SkillBook[skill].MaxSkillXP)
            {
                levelUp = true;
            }
        }
        return levelUp;
    }
    public Character EarnSkillXP(Character skiller, int xp)
    {
        for (int skill = 0; skill < skiller.SkillBook.Count; skill++)
        {
            if (skiller.SkillBook[skill].Name == Name)
            {
                Console.WriteLine($"{skiller.Name} gains {xp} XP in the {Name} Skill");
                skiller.SkillBook[skill].CurrentSkillXP += xp;
                bool levelUp = CheckforSkillLevelUP(skiller);
                if (levelUp == true)
                {
                    skiller.SkillBook[skill].SkillLevel++;
                    Console.WriteLine($"{skiller.Name} reaches Level {skiller.SkillBook[skill].SkillLevel} in the {Name} Skill");
                    skiller.SkillBook[skill].MaxSkillXP *= skiller.SkillBook[skill].SkillLevel;
                }
            }
        }
        return skiller;
    }
    public virtual void SkillActivity(Character skiller, int xp, Item input, Item output)
    {

    }
    public void TrainSkill(Character skiller, int xp, Item input, Item output)
    {
        SkillActivity(skiller, xp, input, output);
    }
    public void FindRecipes(Character skiller)
    {
        List<CraftingRecipe> recipes = new List<CraftingRecipe>();
        for (int recp = 0; recp < skiller.CraftingRecipesKnown.Count; recp++)
        {
            if (skiller.CraftingRecipesKnown[recp].AssociatedSkill.Name == Name)
            {
                recipes.Add(skiller.CraftingRecipesKnown[recp]);
            }
        }
        if (recipes.Count > 0)
        {
            Console.WriteLine($"{Name} Recipes Known");
            for (int recp = 0; recp < recipes.Count; recp++)
            {
                Console.WriteLine($"[{recp + 1}]: {recipes[recp].Name}");
            }
            string? targetInput = Console.ReadLine();
            if (targetInput != null)
            {
                int target = Int32.Parse(targetInput);
                if (target > 0 && target <= recipes.Count)
                {
                    skiller.SkillBook.Find(x => x.Name == this.Name)?.TrainSkill(skiller, recipes[target - 1].RecipeXP, recipes[target - 1].RecipeInput, recipes[target - 1].RecipeOutput);
                }
            }
        }
    }
}