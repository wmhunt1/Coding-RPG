using System.Text.Json.Serialization;

namespace GameModels;
public class Humanoid : Character
{
    public Humanoid(string name) : base(name)
    {
        Name = name;
    }
}