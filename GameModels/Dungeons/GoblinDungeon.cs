using System;
namespace GameModels;

public class GoblinDungeon : Dungeon
{
    public GoblinDungeon(string name = "Dwarven Mine"):base(name)
    {
        Name = name;
        Encounter = new Goblin("Goblin");
        Boss = new GoblinBoss("Goblin Boss");
    }
}