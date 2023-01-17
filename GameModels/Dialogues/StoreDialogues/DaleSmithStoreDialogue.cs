using System.Text.Json.Serialization;

namespace GameModels;
public class DaleSmithStoreDialogue : SmithStoreDialogue
{
    public DaleSmithStoreDialogue(string name, Store store) : base(name, store)
    {
        Name = name;
        AssociatedStore = store;
    }
    public override void HaveDialogue(Character hero)
    {
        bool left = false;
        while (left == false)
        {
            Console.WriteLine($"[1] Train Smithing");
            Console.WriteLine("[2] Talk to Smith (Quest)");
            Console.WriteLine("[0] Leave");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    SmithingSkill smith = new SmithingSkill();
                    smith.LearnSkill(hero);
                    SmeltOre smeltOre = new SmeltOre();
                    SmithDagger smithDagger = new SmithDagger();
                    smeltOre.LearnRecipe(hero);
                    smithDagger.LearnRecipe(hero);
                    hero.SkillBook.Find(x => x.Name == "Smithing")?.FindRecipes(hero);
                    break;
                case "2":
                    DwarfDungeonQuest dwarfDungeonQuest = new DwarfDungeonQuest();
                    DwarfDungeonQuestDialogue dwarfDungeonQuestDialogue = new DwarfDungeonQuestDialogue(dwarfDungeonQuest.Name, dwarfDungeonQuest);
                    dwarfDungeonQuestDialogue.HaveDialogue(hero);
                    break;
                case "0":
                    left = true;
                    break;
                default:
                    break;
            }
        }
    }
}