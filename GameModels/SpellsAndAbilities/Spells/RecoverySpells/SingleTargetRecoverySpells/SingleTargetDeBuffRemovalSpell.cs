namespace GameModels;
public class SingleTargetDeBuffRemovalSpell : SingleTargetRecoverySpell
{
    public DeBuff RemovedDeBuff = new DeBuff("Name", 1, 1);
    public SingleTargetDeBuffRemovalSpell(string name, string school, int level, int cost, int healingAmount) : base(name, school, level, cost)
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
        if (parseSucess == true && selection > 0 && selection <= enemies.Count)
        {
            if (allies[selection - 1].DeBuffs.Find(x => x.Name == RemovedDeBuff.Name) != null)
            {
                allies[selection - 1].DeBuffs.Find(x => x.Name == RemovedDeBuff.Name)?.RemoveDeBuff(allies[selection - 1]);
            }
        }
    }
}