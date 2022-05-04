using System;
namespace GameModels;

public class PowerAttack : Ability
{
    public PowerAttack(string name = "Power Attack", int cost = 2):base(name, cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public override void UseAbility(Character user, List<Character> Targets)
    {
        //double damage
    }
}