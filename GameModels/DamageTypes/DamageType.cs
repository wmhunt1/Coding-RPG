using System.Text.Json.Serialization;

namespace GameModels;
public class DamageType
{
    [JsonPropertyName("Name")]
    public string Name {get; set;}
    public DamageType(string name)
    {
        Name = name;
    }
}