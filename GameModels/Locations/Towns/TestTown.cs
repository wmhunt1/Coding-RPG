using System.Text.Json.Serialization;
namespace GameModels;
public class TestTown : Town
{
    public TestTown(string name = "Test Town") : base(name)
    {
        Name = name;
    }
}