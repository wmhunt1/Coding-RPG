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
    public virtual Character JoinFaction(Character character)
    {
        character.Factions.Add(this);
        return character;
    }
    public virtual Character LeaveFaction(Character character)
    {
        character.Factions.Remove(this);
        return character;
    }
    public virtual Character IncreaseReputation(Character character, int inc)
    {
        Reputation += inc;
        return character;
    }
    public virtual Character DecreaseReputation(Character character, int dec)
    {
        Reputation -= dec;
        return character;
    }
}