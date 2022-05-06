using System;
namespace GameModels;

public class Rage : Ability
{
    public Rage(string name = "Rage", int cost = 2):base(name, cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public override void UseAbility(Character user, List<Character> targets)
    {
        user.SpendMP(StaminaCost);
        Console.WriteLine($"{user.Name} goes into a rage");
        RageBuff rage = new RageBuff();
        rage.AddEffect(user);
    }
}