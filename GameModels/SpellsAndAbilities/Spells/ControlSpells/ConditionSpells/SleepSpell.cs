namespace GameModels;
public class SleepSpell : CrowdConditionSpell
{
    public SleepSpell(string name = "Sleep", string school = "Illusion", int level = 1, int cost = 5) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        AppliedCondition = new SleepCondition();
    }
}