namespace GameModels;
public class GroupDeBuffRemovalSpell : GroupRecoverySpell
{
    public DeBuff RemovedDeBuff {get; set;} = new DeBuff("Name", 1, 1);
    public GroupDeBuffRemovalSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void SpellEffect(Character hero, List<Character> allies, List<Character> enemies)
    {
        for (int ally = 0; ally < allies.Count; ally++)
        {
            if (allies[ally].DeBuffs.Find(x => x.Name == RemovedDeBuff.Name) != null)
            {
                allies[ally].DeBuffs.Find(x => x.Name == RemovedDeBuff.Name)?.RemoveDeBuff(allies[ally]);
            }
        }
    }
}