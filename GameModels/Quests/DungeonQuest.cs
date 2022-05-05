using System;
namespace GameModels;

public class DungeonQuest : Quest
{
    public DungeonQuest(string name):base(name)
    {
        Name = name;
    }
}