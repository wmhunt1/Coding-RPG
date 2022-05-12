using System;
namespace GameModels;

public class DaleTown : Town
{
    StoryScripts story = new StoryScripts();
    public DaleTown(string name = "Dale Town") : base(name)
    {
        Name = name;
    }
    public override void VisitLocation(Hero hero)
    {
        Console.WriteLine("[1] View Character Sheet");
        Console.WriteLine("[2] Inn");
        Console.WriteLine("[3] Blacksmith");
        Console.WriteLine("[4] General Store");
        Console.WriteLine("[5] Mayor's House");
        Console.WriteLine("[6] Church");
        if (hero.Journal.Find(x => x.QuestID == "SQ1").QuestState > 0)
        {
            Console.WriteLine("[7] Graveyard");
        }
        Console.WriteLine("[0] Leave Town");

        string? UserInput = Console.ReadLine();
        switch (UserInput)
        {
            case "1":
                CharacterSheetMenu characterSheet = new CharacterSheetMenu();
                characterSheet.ShowMenu(hero);
                break;
            case "2":

                Inn inn = new Inn("Inn");
                InnMenu innMenu = new InnMenu(inn);
                innMenu.ShowMenu(hero);
                break;
            case "3":
                Blacksmith blacksmith = new Blacksmith("Blacksmith");
                BlacksmithMenu blacksmithMenu = new BlacksmithMenu(blacksmith);
                blacksmithMenu.ShowMenu(hero);
                break;
            case "4":
                GeneralStore store = new GeneralStore("General Store");
                StoreMenu storeMenu = new StoreMenu(store);
                storeMenu.ShowMenu(hero);
                break;
            case "5":
                Console.WriteLine("Mayor's House");
                story.BanditQuest1(hero);
                break;
            case "6":
                Console.WriteLine("Visting Church");
                story.SkeletonQuest1(hero);
                break;
            case "7":
                if (hero.Journal.Find(x => x.QuestID == "SQ1").QuestState > 0)
                {
                    SkeletonDungeon1 skeletonDungeon = new SkeletonDungeon1();
                    DaleTown town = new DaleTown();
                    TownMenu townMenuExit = new TownMenu(town);
                    DungeonMenu skeletonDungeonMenu = new DungeonMenu(skeletonDungeon, townMenuExit);
                    skeletonDungeonMenu.ShowMenu(hero);
                }
                break;
            case "0":
                DaleValley daleValley = new DaleValley();
                LocationMenu gameMenu = new LocationMenu(daleValley);
                gameMenu.ShowMenu(hero);
                break;
            default:
                break;
        }

    }
}