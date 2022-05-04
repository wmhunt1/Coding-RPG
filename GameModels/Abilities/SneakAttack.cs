using System;
namespace GameModels;

public class SneakAttack : Ability
{
    public SneakAttack(string name = "Sneak Attack", int cost = 2):base(name, cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public override void UseAbility(Character user, List<Character> targets)
    {
        user.SpendMP(StaminaCost);
        for (int i = 0; i< targets.Count; i++)
        {
            Console.WriteLine($"[{i+1}] {targets[i].Name}");   
        }
        int target = int.Parse(Console.ReadLine());
        int damage = targets[target-1].CalculateDamage(user, targets[target-1], true);
        Console.WriteLine($"{user.Name} Power Attacks {Name}");
        targets[target-1].DamageHP(damage+user.Attack);
    }
}