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
      public Character LearnSpell(Character character)
    {
        character.Spellbook?.Add(this);
        return character;
    }
}