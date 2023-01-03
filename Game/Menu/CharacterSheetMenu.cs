using System;
using GameModels;

namespace GameSpace
{
    public class CharacterSheetMenu : Menu
    {
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                Console.WriteLine(" ===== Coding RPG ===== ");
                Console.WriteLine($"===== {hero.Name}'s Character Sheet =====");
                Console.WriteLine($"Level: {hero.Level} EXP {hero.CurrentXP}/{hero.MaxXP}");
                Console.WriteLine($"HP: {hero.CurrentHP}/{hero.MaxHP} MP: {hero.CurrentMP}/{hero.MaxMP} SP: {hero.CurrentSP}/{hero.MaxSP}");
                Console.WriteLine("[0] Leave Sheet");
                string? input = Console.ReadLine();
                switch (input)
                {
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