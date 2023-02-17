using System.Text.Json;
using System.Text.Json.Serialization;
namespace GameModels;
public class SneakAttack : Ability
{
    public SneakAttack(string name = "Sneak Attack", int cost = 5):base(name, cost)
    {
        Name = name;
        StaminaCost = cost;
    }
    public override void AbilityEffect(Character user, List<Character> enemies)
    {
         if (user.Ally == true)
        {

            Console.WriteLine("Select target");
            for (int enemy = 0; enemy < enemies.Count; enemy++)
            {
                Console.WriteLine($"[{enemy + 1}]{enemies[enemy].Name}: {enemies[enemy].BaseStats.HP.Current}/{enemies[enemy].BaseStats.HP.Max}");
            }
            string? targetInput = Console.ReadLine();
            if (targetInput != null)
            {
                int target = Int32.Parse(targetInput);
                user.ArmorIgnoringAttack(enemies[target-1]);
            }
            else
            {
                Console.WriteLine("You choose no target and miss");
            }
        }
    }
}