namespace GameModels
{
    public class SkillMenu : Menu
    {
        public override void DisplayMenu(Character hero)
        {
            CookingSkill cook = new CookingSkill();
            FiremakingSkill fire = new FiremakingSkill();
            FishingSkill fish = new FishingSkill();
            FletchingSkill fletch = new FletchingSkill();
            MiningSkill mine = new MiningSkill();
            SmithingSkill smith = new SmithingSkill();
            WoodcuttingSkill wood = new WoodcuttingSkill();
            cook.LearnSkill(hero);
            wood.LearnSkill(hero);
            fire.LearnSkill(hero);
            fish.LearnSkill(hero);
            fletch.LearnSkill(hero);
            mine.LearnSkill(hero);
            smith.LearnSkill(hero);
            bool showMenu = true;
            while (showMenu == true)
            {
                ShowTitle();
                string? input = Console.ReadLine();
                Console.WriteLine("[1] Fish");
                Console.WriteLine("[2] Cook");
                Console.WriteLine("[3] Mining");
                Console.WriteLine("[4] Smithing (Smelting)");
                Console.WriteLine("[5] Woodcutting");
                Console.WriteLine("[6] Firemaking");
                Console.WriteLine("[7] Fletching");
                Console.WriteLine("[8] Smithing (Making Item)");
                Console.WriteLine("[0] Leave");
                switch (input)
                {
                    case "1":
                        fish.TrainSkill(hero, 10, new NoInput(), new RawFish());
                        break;
                    case "2":
                        cook.TrainSkill(hero, 10, new RawFish(), new CookedFish());
                        break;
                    case "3":
                        mine.TrainSkill(hero, 10, new NoInput(), new Ore());
                        break;
                    case "4":
                        smith.TrainSkill(hero, 10, new Ore(), new MetalBar());
                        break;
                    case "5":
                        wood.TrainSkill(hero, 10, new NoInput(), new Wood());
                        break;
                    case "6":
                        fire.TrainSkill(hero, 10, new Wood(), new Ashes());
                        break;
                    case "7":
                        fletch.TrainSkill(hero, 10, new Wood(), new WoodenBow());
                        break;
                    case "8":
                        smith.TrainSkill(hero, 10, new Ore(), new Dagger());
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