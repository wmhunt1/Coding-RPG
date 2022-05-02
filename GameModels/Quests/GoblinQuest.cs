using System;
namespace GameModels;

public class GoblinQuest : Quest
{
    public GoblinQuest(string name = "Goblin Quest"):base(name)
    {
        Name = name;
        Description = "Kill Goblins in the Dwarven Mine";
    }
}