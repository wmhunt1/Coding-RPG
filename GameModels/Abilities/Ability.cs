using System;
namespace GameModels;

public class Ability
{
    public string Name;
    public int StaminaCost;
    public Ability(string name, int cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public virtual void UseAbility(Character user, List<Character> Targets)
    {

    }
    public Character GainAbility(Character character)
    {
        character.ActionBar?.Add(this);
        return character;
    }
}