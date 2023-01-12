using System.Text.Json.Serialization;

namespace GameModels;
public class Skeleton : Undead
{
    public Skeleton(string name = "Skeleton") : base(name)
    {
        Name = name;
        Ally = false;
        this.CurrentXP = 10;
        this.Dexterity = 8;
        Weapon = new Club();
        Torso = new Torso("Leather Scraps", 0, 0);
        Resistances = new List<DamageType>{new PiercingDamage(), new SlashingDamage()};
        Weaknesses = new List<DamageType>{new BludgeoningDamage()};
        Immunities = new List<DamageType>{new PoisonDamage()};
        ConditionImmunities = new List<Condition>{new PoisonCondition(), new SleepCondition()};
    }
}
