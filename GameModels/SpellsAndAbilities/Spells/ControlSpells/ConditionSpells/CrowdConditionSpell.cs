using System.Text.Json.Serialization;
namespace GameModels;
public class CrowdConditionSpell : ConditionSpell
{
    public CrowdConditionSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void SpellEffect(Character hero, List<Character> allies, List<Character> enemies)
    {
        for (int enemy = 0; enemy < enemies.Count; enemy++)
        {
            AppliedCondition.ApplyCondition(enemies[enemy]);
        }
    }
}