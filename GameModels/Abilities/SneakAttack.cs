using System;
namespace GameModels;

public class SneakAttack : Ability
{
    public SneakAttack(string name = "Sneak Attack", int cost = 2):base(name, cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public override void UseAbility(Character user, List<Character> Targets)
    {
        //igore armor
    }
}