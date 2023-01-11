using System.Text.Json.Serialization;

namespace GameModels;
public class Ability
{
    [JsonPropertyName("Name")]
    public string Name {get; set;}
    [JsonPropertyName("StaminaCost")]
    public int StaminaCost {get; set;}
    public Ability(string name, int cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public bool HasEnoughSP(Character user)
    {
        if (user.CurrentSP >= StaminaCost)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public virtual void AbilityEffect(Character user, List<Character> targets)
    {

    }
    public void UseAbility(Character user, List<Character> targets)
    {
        bool staminaCheck = this.HasEnoughSP(user);
        if (staminaCheck == true)
        {
            user.SpendStamina(StaminaCost);
            AbilityEffect(user, targets);
        }
        else
        {
            Console.WriteLine("Not enough Stamina");
        }
    }
    public Character LearnAbility(Character char1)
    {
        if (char1.Abilities.Find(x => x.Name == Name) == null)
        {
            Console.WriteLine($"{char1.Name} learns the Ability: {Name}");
            char1.Abilities.Add(this);
        }
        return char1;
    }
}