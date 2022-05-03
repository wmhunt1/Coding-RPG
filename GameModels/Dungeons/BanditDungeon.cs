using System;
namespace GameModels;

public class BanditDungeon : Dungeon
{
    public BanditDungeon(string name = "Bandit Hideout"):base(name)
    {
        Name = name;
        Encounter = new List<Character>() {new Bandit("Forest Bandit")};
        Boss = new BanditBoss("Forest Bandit Boss");
    }
}