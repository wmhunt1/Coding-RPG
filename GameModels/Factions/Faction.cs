using System.Text.Json.Serialization;

namespace GameModels;
public class Faction
{
    [JsonPropertyName("Name")]
    public string Name { get; set; }
    [JsonPropertyName("Members")]
    public List<Character> Members { get; set; } = new List<Character>();
    [JsonPropertyName("Rank")]
    public int Rank { get; set; } = 0;
    [JsonPropertyName("CurrentRankName")]
    public string CurrentRankName { get; set; }
    [JsonPropertyName("RankNames")]
    public List<String> RankNames { get; set; }
    public Faction(string name, List<String> rankNames)
    {
        Name = name;
        RankNames = rankNames;
        CurrentRankName = rankNames[0];
    }
    public virtual Character JoinFaction(Character member)
    {
        if (member.Factions.Find(x => x.Name == Name) == null)
        {
            Console.WriteLine($"{member.Name} joins: {Name}");
            member.Factions.Add(this);
        }
        return member;
    }
    public virtual Character IncreaseFactionRank(Character member)
    {
        if (member.Factions.Find(x => x.Name == Name) != null)
        {
            member.Factions.Find(x => x.Name == Name)!.Rank++;
        }
        return member;
    }
    public virtual Character FindNewRankName(Character member)
    {
        member.Factions.Find(x => x.Name == Name)!.CurrentRankName = RankNames[member.Factions.Find(x => x.Name == Name)!.Rank];
        return member;
    }
    public virtual Character GetPromotion(Character member)
    {
        if (member.Factions.Find(x => x.Name == Name) != null)
        {
            if (member.Factions.Find(x => x.Name == Name)!.CurrentRankName != RankNames[RankNames.Count - 1])
            {
                member.Factions.Find(x => x.Name == Name)?.IncreaseFactionRank(member);
                member.Factions.Find(x => x.Name == Name)?.FindNewRankName(member);
                Console.WriteLine($"{member.Name} is now a {member.Factions.Find(x => x.Name == Name)!.CurrentRankName} in {Name}");
            }
            else
            {
                Console.WriteLine($"{member.Name} cannot be promoted any further");
            }
        }
        return member;
    }
}