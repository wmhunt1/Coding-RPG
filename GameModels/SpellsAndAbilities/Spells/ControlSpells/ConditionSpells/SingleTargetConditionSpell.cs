namespace GameModels;
public class SingleTargetConditionSpell : ConditionSpell
{
    public SingleTargetConditionSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void SpellEffect(Character hero, List<Character> allies, List<Character> enemies)
    {
        Console.WriteLine("Select target");
        for (int enemy = 0; enemy < enemies.Count; enemy++)
        {
            Console.WriteLine($"[{enemy + 1}]{enemies[enemy].Name}: {enemies[enemy].CurrentHP}/{enemies[enemy].MaxHP}");
        }
        string? selectionInput = Console.ReadLine();
        int selection;
        bool parseSucess = Int32.TryParse(selectionInput, out selection);
        if (parseSucess == true && selection > 0 && selection <= enemies.Count)
        {
            AppliedCondition.ApplyCondition(enemies[selection - 1]);
        }
    }
}