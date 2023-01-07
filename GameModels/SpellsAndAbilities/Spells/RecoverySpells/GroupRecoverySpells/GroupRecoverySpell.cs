namespace GameModels;
public class GroupRecoverySpell : RecoverySpell
{
    public GroupRecoverySpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }

}