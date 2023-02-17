using System.Text.Json.Serialization;

namespace GameModels;
public class SingleTargetHealingSpell : SingleTargetRecoverySpell
{
    [JsonPropertyName("HealingAmount")]
    public int HealingAmount { get; set; }
    public SingleTargetHealingSpell(string name, string school, int level, int cost, int healingAmount) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        HealingAmount = healingAmount;
    }
    public override void SpellEffect(Character hero, List<Character> allies, List<Character> enemies)
    {
        if (hero.Ally == true)
        {
            Console.WriteLine("Select target");
            for (int ally = 0; ally < allies.Count; ally++)
            {
                Console.WriteLine($"[{ally + 1}]{allies[ally].Name}: {allies[ally].BaseStats.HP.Current}/{allies[ally].BaseStats.HP.Max}");
            }
            string? selectionInput = Console.ReadLine();
            int selection;
            bool parseSucess = Int32.TryParse(selectionInput, out selection);
            if (parseSucess == true && selection > 0 && selection <= enemies.Count)
            {
                allies[selection - 1].HealHP(HealingAmount);
            }
        }
        else
        {
            Random randomTarget = new Random();
            int target = randomTarget.Next(0, allies.Count);
            allies[target].HealHP(HealingAmount);
        }
    }
}