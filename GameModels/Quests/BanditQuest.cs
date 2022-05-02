using System;
namespace GameModels;

public class BanditQuest : Quest
{
    public BanditQuest(string name = "Bandit Quest"):base(name)
    {
        Name = name;
        Description = "Kill Bandits in the Forest";
    }
}