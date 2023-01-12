using System.Text.Json.Serialization;
namespace GameModels;
public class UtilitySkill : Skill
{
    public UtilitySkill(string name) : base(name)
    {
        Name = name;
    }
}