using System;
namespace GameModels;

public class Cleave : Ability
{
    public Cleave(string name = "Cleave", int cost = 2):base(name, cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public override void UseAbility(Character user, List<Character> targets)
    {
        user.SpendMP(StaminaCost);
        Console.WriteLine($"{user.Name} cleaves through their foes");
        for (int i = 0; i < targets.Count; i++)
        {
            user.BasicAttack(user, targets[i]);
        }
    }
}