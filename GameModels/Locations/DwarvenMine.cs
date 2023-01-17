using System.Text.Json.Serialization;

namespace GameModels;
public class DwarvenMine : Location
{
    public DwarvenMine(string name = "Dwarven Mine") : base(name)
    {
        Name = name;
    }
    public override void LocationContent(Character hero)
    {
        bool showMine = true;
        while (showMine)
        {
            Console.WriteLine("[1] View Character Sheet");
            Console.WriteLine("[2] Mine Ore");
            Console.WriteLine("[3] Fight Goblins");
            Console.WriteLine("[4] Visit the Dwarven Mine");
            Console.WriteLine($"[0] Leave {Name}");
            string? input = Console.ReadLine();
            switch (input)
            {
                case "1":
                    CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                    characterSheet.DisplayMenu(hero, hero);
                    break;
                case "2":
                    MiningSkill mine = new MiningSkill();
                    mine.LearnSkill(hero);
                    MineOre mineOre = new MineOre();
                    mine.TrainSkill(hero, mineOre);
                    break;
                case "3":
                    Dungeon dwarvenMine = new Dungeon("Dwarven Mine", new List<Character> { new Goblin(), new Goblin(), new Goblin() }, new List<Character> { new Goblin(), new Goblin(), new Goblin() }, new List<Character> { new Goblin(), new Goblin(), new Goblin() }, new List<Character> { new Goblin(), new Goblin(), new Goblin(), new Orc() });
                    DungeonMenu dwarvenMineMenu = new DungeonMenu(dwarvenMine);
                    dwarvenMineMenu.DisplayMenu(hero, hero);
                    break;
                case "0":
                    showMine = false;
                    break;
                default:
                    break;
            }
        }
    }
}