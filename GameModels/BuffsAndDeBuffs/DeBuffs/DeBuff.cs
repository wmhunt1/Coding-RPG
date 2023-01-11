using System.Text.Json.Serialization;

namespace GameModels;
public class DeBuff
{
    [JsonPropertyName("Name")]
    public string Name;
    [JsonPropertyName("Duration")]
    public int Duration;
    [JsonPropertyName("RemainingDuration")]
    public int RemainingDuration;
    public DeBuff(string name, int duration, int remainingDuration)
    {
        Name = name;
        Duration = duration;
        RemainingDuration = remainingDuration;
    }
    public virtual Character ApplyDeBuff(Character character)
    {
        return character;
    }
    public virtual Character RemoveDeBuff(Character character)
    {
        return character;
    }
}