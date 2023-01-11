using System.Text.Json.Serialization;

namespace GameModels;
public class Buff
{
    [JsonPropertyName("Name")]
    public string Name {get; set;}
    [JsonPropertyName("Duration")]
    public int Duration {get; set;}
    [JsonPropertyName("RemainingDuration")]
    public int RemainingDuration {get; set;}
    public Buff(string name, int duration, int remainingDuration)
    {
        Name = name;
        Duration = duration;
        RemainingDuration = remainingDuration;
    }
    public virtual Character ApplyBuff(Character character)
    {
        return character;
    }
    public virtual Character RemoveBuff(Character character)
    {
        return character;
    }
}