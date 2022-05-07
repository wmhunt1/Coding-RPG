using System;
namespace GameModels;

public class Faction
{
    public string Name;
    public List<Character> Members = new List<Character>();
    public string Rank = "";
    public int Reputation = 0;
    public Faction(string name)
    {
        Name = name;
    }
}