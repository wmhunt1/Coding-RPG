using System.Text.Json.Serialization;

namespace GameModels;
public class Dungeon : Location
{
    [JsonPropertyName("Encounter1")]
    public List<Character> Encounter1 { get; set; }
    [JsonPropertyName("Encounter2")]
    public List<Character> Encounter2 { get; set; }
    [JsonPropertyName("Encounter3")]
    public List<Character> Encounter3 { get; set; }
    [JsonPropertyName("BossEncounter")]
    public List<Character> BossEncounter { get; set; }
    public Dungeon(string name, List<Character> encounter1, List<Character> encounter2, List<Character> encounter3, List<Character> bossEncounter) : base(name)
    {
        Name = name;
        Encounter1 = encounter1;
        Encounter2 = encounter2;
        Encounter3 = encounter3;
        BossEncounter = bossEncounter;
    }
}