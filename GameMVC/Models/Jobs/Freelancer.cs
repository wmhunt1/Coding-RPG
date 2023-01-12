using System.Text.Json.Serialization;
namespace GameModels;
public class Freelancer : Job
{
    public Freelancer(string name = "Freelancer") : base(name)
    {
        Name = name;
    }
}