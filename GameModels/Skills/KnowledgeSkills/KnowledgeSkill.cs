using System.Text.Json.Serialization;
namespace GameModels;
public class KnowledgeSkill : Skill
{
    public KnowledgeSkill(string name) : base(name)
    {
        Name = name;
    }
}