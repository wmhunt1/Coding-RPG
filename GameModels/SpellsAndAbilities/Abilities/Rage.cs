namespace GameModels;
public class Rage : Ability
{
    public Rage(string name = "Rage", int cost = 5):base(name, cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public override void AbilityEffect(Character user, List<Character> targets)
    {
        RageBuff rage = new RageBuff();
        rage.ApplyBuff(user);
    }
}