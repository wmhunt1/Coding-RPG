using System.Text.Json.Serialization;

namespace GameModels;
public class Dialogue
{
    [JsonPropertyName("Name")]
    public string Name {get; set;}
    public Dialogue(string name)
    {
        Name = name;
    }
    public virtual void HaveDialogue(Character hero)
    {

    }
}