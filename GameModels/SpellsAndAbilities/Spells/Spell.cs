using System.Text.Json.Serialization;

namespace GameModels;
public class Spell
{
    [JsonPropertyName("Name")]
    public string Name { get; set; }
    [JsonPropertyName("SpellSchool")]
    public string SpellSchool { get; set; }
    [JsonPropertyName("SpellLevel")]
    public int SpellLevel { get; set; }
    [JsonPropertyName("ManaCost")]
    public int ManaCost { get; set; }
    [JsonPropertyName("Description")]
    public string Description { get; set; } = "";
    public Spell(string name, string school, int level, int cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public bool HasEnoughMP(Character caster)
    {
        if (caster.BaseStats.MP.Current >= ManaCost)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public virtual void SpellEffect(Character caster, List<Character> allies, List<Character> targets)
    {

    }
    public void CastSpell(Character caster, List<Character> allies, List<Character> enemies)
    {
        bool manaCheck = this.HasEnoughMP(caster);
        Console.WriteLine($"{caster.Name} casts {this.Name}");
        if (manaCheck == true)
        {
            caster.BaseStats.SP.endMana(ManaCost);
            SpellEffect(caster, allies, enemies);
        }
        else
        {
            Console.WriteLine("The spell fizzles");
        }
    }
    public Character LearnSpell(Character caster)
    {
        if (caster.BaseStats.SP.ellBook.Find(x => x.Name == Name) == null)
        {
            Console.WriteLine($"{caster.Name} learns the Spell: {Name}");
            caster.BaseStats.SP.ellBook.Add(this);
        }
        return caster;
    }
}