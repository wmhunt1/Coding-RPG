using System.Text.Json.Serialization;

namespace GameModels;
public class BuffSpell : Spell
{
    [JsonPropertyName("AppliedBuff")]
    public Buff AppliedBuff {get; set;} = new Buff("Name", 1, 0);
    public BuffSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
}