using System.Text.Json.Serialization;
namespace GameModels;
public class Fighter : Job
{
    public Fighter(string name = "Fighter") : base(name)
    {
        Name = name;
    }
}