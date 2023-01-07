namespace GameModels;
public class RecoverySpell : Spell
{
    public RecoverySpell(string name, string school, int level, int cost) : base(name, school, level, cost)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
    }

}