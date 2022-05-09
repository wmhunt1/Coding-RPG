using System;
namespace GameModels;

public class GoblinRace : Humanoid
{
    public GoblinRace(string name = "Goblin"):base(name)
    {
        Name = name;
    }
}