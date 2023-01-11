using System.Text.Json.Serialization;

namespace GameModels;
public class Job
{
    [JsonPropertyName("Name")]
    public string Name { get; set; }
    public Job(string name)
    {
        Name = name;
    }
    public virtual Character AddJobPackage(Character hero)
    {
        return hero;
    }
    public Character ChooseJob(Character hero)
    {
        hero.Job = this;
        this.AddJobPackage(hero);
        return hero;
    }
}