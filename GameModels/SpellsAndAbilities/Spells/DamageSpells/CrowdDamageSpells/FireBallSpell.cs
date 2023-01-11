using System.Text.Json.Serialization;
namespace GameModels;
public class FireBallSpell : CrowdDamageSpell
{
    public FireBallSpell(string name = "FireBall", string school = "Destruction", int level = 1, int cost = 10, int spellDamage = 5) : base(name, school, level, cost, spellDamage)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        SpellDamageType = new FireDamage();
    }
    public override void SpellEffect(Character caster, List<Character> allies, List<Character> enemies)
    {
        for (int enemy = 0; enemy < enemies.Count; enemy++)
        {
            caster.AttackSpell(enemies[enemy], SpellDamage, SpellDamageType);
            BurnCondition burn = new BurnCondition();
            burn.ApplyCondition(enemies[enemy]);
        }
    }
}