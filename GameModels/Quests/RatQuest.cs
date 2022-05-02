using System;
namespace GameModels;

public class RatQuest : Quest
{
    public RatQuest(string name = "Rat Quest"):base(name)
    {
        Name = name;
        Description = "Kill Rats in the Inn Cellar";
    }
}