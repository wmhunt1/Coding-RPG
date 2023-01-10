namespace GameModels;
public class ConditionSpell : ControlSpell
{
    public Condition AppliedCondition {get; set;} = new Condition("Condition");
    public ConditionSpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }
    public override void SpellEffect(Character hero, List<Character> allies, List<Character> enemies)
    {

    }
}