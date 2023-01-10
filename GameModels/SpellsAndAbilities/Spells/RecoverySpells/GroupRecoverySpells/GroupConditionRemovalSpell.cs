namespace GameModels;
public class GroupConditionRemovalSpell : GroupRecoverySpell
{
    public Condition RemovedCondition {get; set;} = new Condition("Name");
    public GroupConditionRemovalSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
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
            if (allies[ally].Conditions.Find(x => x.Name == RemovedCondition.Name) != null)
            {
                allies[ally].Conditions.Find(x => x.Name == RemovedCondition.Name)?.RemoveCondition(allies[ally]);
            }
        }
    }
}