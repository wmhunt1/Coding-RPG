using System.Text.Json.Serialization;
namespace GameModels
{
    public class SkillMenu : Menu
    {
        public override void DisplayMenu(Character hero, Character inventory)
        {
            //add recipes to list and find recipe dependant on skill
            CookingSkill cook = new CookingSkill();
            FiremakingSkill fire = new FiremakingSkill();
            FishingSkill fish = new FishingSkill();
            FletchingSkill fletch = new FletchingSkill();
            //MiningSkill mine = new MiningSkill();
            SmithingSkill smith = new SmithingSkill();
            WoodcuttingSkill wood = new WoodcuttingSkill();
            CookRawFish cookFish = new CookRawFish();
            BurnWood burnWood = new BurnWood();
            FletchWoodenBow fletchWoodenBow = new FletchWoodenBow();
            SmeltOre smeltOre = new SmeltOre();
            SmithDagger smithDagger = new SmithDagger();
            cook.LearnSkill(hero);
            wood.LearnSkill(hero);
            fire.LearnSkill(hero);
            fish.LearnSkill(hero);
            fletch.LearnSkill(hero);
            //mine.LearnSkill(hero);
            smith.LearnSkill(hero);
            cookFish.LearnRecipe(hero);
            burnWood.LearnRecipe(hero);
            fletchWoodenBow.LearnRecipe(hero);
            smeltOre.LearnRecipe(hero);
            smithDagger.LearnRecipe(hero);
            FishRawFish fishRawFish = new FishRawFish();
            //MineOre mineOre = new MineOre();
            CutWood cutWood = new CutWood();

            bool showMenu = true;
            while (showMenu == true)
            {
                ShowTitle();
                Console.WriteLine("[1] Fish");
                Console.WriteLine("[2] Cook");
                //Console.WriteLine("[3] Mining");
                Console.WriteLine("[4] Smithing");
                Console.WriteLine("[5] Woodcutting");
                Console.WriteLine("[6] Firemaking");
                Console.WriteLine("[7] Fletching");
                Console.WriteLine("[0] Leave");
                string? input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        fish.TrainSkill(hero, fishRawFish);
                        break;
                    case "2":
                        cook.FindRecipes(hero);
                        break;
                    case "3":
                        //mine.TrainSkill(hero, mineOre);
                        break;
                    case "4":
                        smith.FindRecipes(hero);
                        break;
                    case "5":
                        wood.TrainSkill(hero, cutWood);
                        break;
                    case "6":
                        fire.FindRecipes(hero);
                        break;
                    case "7":
                        fletch.FindRecipes(hero);
                        break;
                    case "0":
                        showMenu = false;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}