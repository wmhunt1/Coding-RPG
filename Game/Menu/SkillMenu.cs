using System;
using GameModels;

namespace GameSpace
{
    public class SkillMenu : Menu
    {
        public override void DisplayMenu(Character hero)
        {
            FishingSkill fish = new FishingSkill();
            CookingSkill cook = new CookingSkill();
            cook.LearnSkill(hero);
            fish.LearnSkill(hero);
            bool showMenu = true;
            while (showMenu == true)
            {
                string? input = Console.ReadLine();
                Console.WriteLine("[1] Fish");
                Console.WriteLine("[2] Cook");
                Console.WriteLine("[0] Leave");
                switch (input)
                {
                    case "1":
                        Console.WriteLine("Fish");
                        fish.TrainSkill(hero, 10, new Item("None", 0), new RawFish());
                        break;
                    case "2":
                        Console.WriteLine("Cook");
                        cook.TrainSkill(hero, 10, new RawFish(), new CookedFish());
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