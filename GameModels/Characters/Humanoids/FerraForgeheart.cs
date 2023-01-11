using System.Text.Json.Serialization;

namespace GameModels;
public class FerraForgeheart : Humanoid
{
    public FerraForgeheart(string name = "Ferra Forgeheart") : base(name)
    {
        Name = name;
        Ally = true;
        Job = new Cleric();
        Job.AddJobPackage(this);
    }
}