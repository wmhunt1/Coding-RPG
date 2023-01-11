using System.Text.Json.Serialization;
namespace GameModels;
public class Cleave : Ability
{
    public Cleave(string name = "Cleave", int cost = 5):base(name, cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public override void AbilityEffect(Character user, List<Character> targets)
    {
        Console.WriteLine($"{user.Name} cleaves through all enemies");
        for (int target = 0; target < targets.Count; target++)
        {
            user.BasicAttack(targets[target]);
        }
    }
}