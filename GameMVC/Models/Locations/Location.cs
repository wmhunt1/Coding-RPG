using System.Text.Json.Serialization;

namespace GameModels;
public class Location
{
    [JsonPropertyName("Name")]
    public string Name { get; set; }
    public Location(string name)
    {
        Name = name;
    }
    public virtual void EntryEvent(Character hero)
    {
        Console.WriteLine($"{hero.Name} enters {Name}");
    }
    public virtual void LocationContent(Character hero)
    {

    }
    public virtual void ExitEvent(Character hero)
    {
        Console.WriteLine($"{hero.Name} leaves {Name}");
    }
    public void VisitLocation(Character hero)
    {
        EntryEvent(hero);
        LocationContent(hero);
        ExitEvent(hero);

    }
}