namespace GameModels;
public class GroupDeBuffRemovalSpell : GroupRecoverySpell
{
    public DeBuff RemovedDeBuff = new DeBuff("Name", 1, 1);
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
            for (int cond = 0; cond < allies[ally].DeBuffs.Count; cond++)
            {
                if (RemovedDeBuff.Name == allies[ally].DeBuffs[cond].Name)
                {
                    allies[ally].DeBuffs[cond].RemoveDeBuff(allies[ally]);
                }
            }
        }
    }
}