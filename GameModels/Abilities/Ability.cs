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
}