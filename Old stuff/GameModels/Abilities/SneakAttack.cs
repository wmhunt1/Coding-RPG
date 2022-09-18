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
              
        int damage = targets[target-1].CalculateDamage(user, targets[target-1], false);
        bool crit = user.CheckforCriticalHit();
        if (crit == true)
        {
            damage *= 2;
        }
        int protection = targets[target-1].Head.Protection + targets[target-1].Torso.Protection + targets[target-1].Legs.Protection + targets[target-1].Hands.Protection + targets[target-1].Feet.Protection;
        Console.WriteLine($"{user.Name} Sneak Attacks {Name}, ignoring their armor");
        targets[target-1].DamageHP(damage+protection);
    }
}