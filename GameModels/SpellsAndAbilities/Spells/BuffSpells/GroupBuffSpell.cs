using System.Text.Json.Serialization;
namespace GameModels;
public class GroupBuffSpell : BuffSpell
{
    public GroupBuffSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void SpellEffect(Character hero, List<Character> allies, List<Character> enemies)
    {
        for (int ally = 0; ally < allies.Count; ally++)
        {
            AppliedBuff.ApplyBuff(allies[ally]);
        }
    }
}