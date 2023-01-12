using System.Text.Json.Serialization;
namespace GameModels;
public class Barbarian : Job
{
    public Barbarian(string name = "Barbarian") : base(name)
    {
        Name = name;
    }
    public override Character AddJobPackage(Character hero)
    {
        Rage rage = new Rage();
        rage.LearnAbility(hero);
        return hero;
    }
}