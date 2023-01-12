using System.Text.Json.Serialization;

namespace GameModels;
public class Beast : Character
{
    public Beast(string name) : base(name)
    {
        Name = name;
    }
}