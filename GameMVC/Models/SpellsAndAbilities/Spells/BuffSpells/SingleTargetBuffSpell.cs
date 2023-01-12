using System.Text.Json.Serialization;
namespace GameModels;
public class SingleTargetBuffSpell : BuffSpell
{
    public SingleTargetBuffSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void SpellEffect(Character hero, List<Character> allies, List<Character> enemies)
    {
        Console.WriteLine("Select target");
        for (int ally = 0; ally < allies.Count; ally++)
        {
            Console.WriteLine($"[{ally + 1}]{allies[ally].Name}: {allies[ally].CurrentHP}/{allies[ally].MaxHP}");
        }
        string? selectionInput = Console.ReadLine();
        int selection;
        bool parseSucess = Int32.TryParse(selectionInput, out selection);
        if (parseSucess == true && selection > 0 && selection <= allies.Count)
        {
            AppliedBuff.ApplyBuff(allies[selection - 1]);
        }
    }
}