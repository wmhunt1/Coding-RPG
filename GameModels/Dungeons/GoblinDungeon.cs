using System;
namespace GameModels;

public class GoblinDungeon : Dungeon
{
    public GoblinDungeon(string name = "Dwarven Mine"):base(name)
    {
        Name = name;
        Encounter = new Goblin("Goblin");
        Boss = new List<Character>() {new GoblinBoss("Goblin Boss")};
    }
    public override List<Character> GenerateEncounter()
    {
        Random rnd = new Random();
        int random = rnd.Next(2, 5);
        List<Character> encounterEnemies = new List<Character>();
        for (int i = 0; i < random; i++)
        {
            encounterEnemies.Add(new Goblin("Goblin"));
        }
        return encounterEnemies;
    }
}