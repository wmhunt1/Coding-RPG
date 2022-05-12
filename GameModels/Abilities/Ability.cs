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
    public bool CheckIfKnowAbility(Character character)
    {
        bool known = false;
        if (character.ActionBar.Count > 0)
        {
            for (int i = 0; i < character.ActionBar.Count; i++)
            {
                if (character.ActionBar[i].Name == this.Name)
                {
                    known = true;
                }
            }
        }
        return known;
    }
    public Character GainAbility(Character character)
    {
        bool known = CheckIfKnowAbility(character);
        if (known == false)
        {
            character.ActionBar?.Add(this);
            Console.WriteLine($"{character.Name} learns {this.Name}");
        }
        else
        {
            Console.WriteLine($"{character.Name} already knows {this.Name}");
        }
        return character;
    }
}