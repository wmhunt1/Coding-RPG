namespace GameModels;
public class Spell
{
    public string Name {get; set;}
    public string SpellSchool {get; set;}
    public int SpellLevel {get; set;}
    public int ManaCost {get; set;}
    public string Description {get; set;} = "";
    public Spell(string name, string school, int level, int cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public bool HasEnoughMP(Character caster)
    {
        if (caster.CurrentMP >= ManaCost)
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
            caster.SpendMana(ManaCost);
            SpellEffect(caster, allies, enemies);
        }
        else
        {
            Console.WriteLine("The spell fizzles");
        }
    }
    public Character LearnSpell(Character caster)
    {
        if (caster.SpellBook.Find(x => x.Name == Name) == null)
        {
            Console.WriteLine($"{caster.Name} learns the Spell: {Name}");
            caster.SpellBook.Add(this);
        }
        return caster;
    }
}