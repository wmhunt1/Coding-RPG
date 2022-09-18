using System;
namespace GameModels;

public class Spell
{
    public string Name;
    public int SpellLevel;
    public int ManaCost;
    public Spell(string name, int level, int cost)
    {
        Name = name;
        SpellLevel = level;
        ManaCost = cost;
    }
    public virtual void CastSpell(Character caster, List<Character> targets)
    {

    }
    public bool CheckIfKnowSpell(Character character)
    {
        bool known = false;
        if (character.Spellbook.Count > 0)
        {
            for (int i = 0; i < character.Spellbook.Count; i++)
            {
                if (character.Spellbook[i].Name == this.Name)
                {
                    known = true;
                }
            }
        }
        return known;
    }
    public Character LearnSpell(Character character)
    {
        bool known = CheckIfKnowSpell(character);
        if (known == false)
        {
            character.Spellbook?.Add(this);
            Console.WriteLine($"{character.Name} learns {this.Name}");
        }
        else
        {
            Console.WriteLine($"{character.Name} already knows {this.Name}");
        }
        return character;
    }
}