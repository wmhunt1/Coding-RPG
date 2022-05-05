using System;
namespace GameModels;

public class BanditDungeon : Dungeon
{
    public BanditDungeon(string name = "Bandit Hideout"):base(name)
    {
        Name = name;
        Encounter = new Bandit("Forest Bandit");
        Boss = new List<Character>() {new BanditBoss("Forest Bandit Boss")};
    }
}