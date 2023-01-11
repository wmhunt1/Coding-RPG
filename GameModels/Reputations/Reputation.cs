using System.Text.Json.Serialization;

namespace GameModels;
public class Reputation
{
    [JsonPropertyName("Name")]
    public string Name { get; set; }
    public Reputation(string name)
    {
        Name = name;
    }

}