namespace GameModels;
public class GroupConditionRemovalSpell : GroupRecoverySpell
{
    public Condition RemovedCondition = new Condition("Name");
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
            for (int cond = 0; cond < allies[ally].Conditions.Count; cond++)
            {
                if (RemovedCondition.Name == allies[ally].Conditions[cond].Name)
                {
                    allies[ally].Conditions[cond].RemoveCondition(allies[ally]);
                }
            }
        }
    }
}