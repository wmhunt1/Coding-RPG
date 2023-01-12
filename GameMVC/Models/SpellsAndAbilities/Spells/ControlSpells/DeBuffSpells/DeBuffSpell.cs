using System.Text.Json.Serialization;

namespace GameModels;
public class DeBuffSpell : ControlSpell
{
    [JsonPropertyName("AppliedDeBuff")]
    public DeBuff AppliedDeBuff { get; set; } = new DeBuff("DeBuff", 1, 1);
    public DeBuffSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void SpellEffect(Character hero, List<Character> allies, List<Character> enemies)
    {

    }
}