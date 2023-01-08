namespace GameModels;
public class Spell
{
    public string Name;
    public string SpellSchool;
    public int SpellLevel;
    public int ManaCost;
    public string Description = "";
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
      public Character LearnSpell(Character hero)
    {
        bool alreadyKnown = false;
        if (hero.SpellBook.Count > 0)
        {
            for (int abil = 0; abil < hero.SpellBook.Count; abil++)
            {
                if (hero.SpellBook[abil].Name == Name)
                {
                    alreadyKnown = true;
                }
            }
        }
        if (alreadyKnown == false)
        {
            hero.SpellBook.Add(this);
        }
        return hero;
    }
}