using System.Text.Json.Serialization;
namespace GameModels;
public class CombatSkill : Skill
{
    public CombatSkill(string name) : base(name)
    {
        Name = name;
    }
}