using System.Text.Json.Serialization;
namespace GameModels;
public class Pet : Job
{
    public Pet(string name = "Pet") : base(name)
    {
        Name = name;
    }
}