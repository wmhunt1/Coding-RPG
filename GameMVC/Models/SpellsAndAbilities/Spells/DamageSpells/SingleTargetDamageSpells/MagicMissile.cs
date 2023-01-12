using System.Text.Json.Serialization;
namespace GameModels;
public class MagicMissile : SingleTargetDamageSpell
{
    public MagicMissile(string name = "Magic Missile", string school = "Destruction", int level = 1, int cost = 5, int spellDamage = 5) : base(name, school, level, cost, spellDamage)
    {
        Name = name;
        SpellSchool = school;
        SpellLevel = level;
        ManaCost = cost;
        SpellDamage = spellDamage;
        SpellDamageType = new ForceDamage();
    }
}