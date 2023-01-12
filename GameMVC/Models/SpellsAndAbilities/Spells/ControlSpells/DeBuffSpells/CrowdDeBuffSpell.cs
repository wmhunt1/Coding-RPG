using System.Text.Json.Serialization;
namespace GameModels;
public class CrowdDeBuffSpell : DeBuffSpell
{
    public CrowdDeBuffSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
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
            AppliedDeBuff.ApplyDeBuff(enemies[enemy]);
        }
    }
}