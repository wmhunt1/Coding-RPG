using System;
namespace GameModels;

public class Cleave : Ability
{
    public Cleave(string name = "Cleave", int cost = 2):base(name, cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public override void UseAbility(Character user, List<Character> Targets)
    {
        user.SpendMP(StaminaCost);
        Console.WriteLine($"{user.Name} cleaves through their foes");
        for (int i = 0; i < Targets.Count; i++)
        {
            user.BasicAttack(user, Targets[i]);
        }
    }
}