using System.Text.Json.Serialization;

namespace GameModels;
public class ProtectionType
{
    [JsonPropertyName("Name")]
    public string Name {get; set;}
    public ProtectionType(string name)
    {
        Name = name;
    }
}