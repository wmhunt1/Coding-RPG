namespace GameModels;
public class Orc : Humanoid
{
    public Orc(string name = "Orc") : base(name)
    {
        Name = name;
        Ally = false;
        CurrentXP = 20;
        CurrentHP = 15;
        MaxHP = 15;
        Weapon = new TwoHAxe();
        Abilities.Add(new Rage());
    }
    public override void CombatAI(Character char1, List<Character> allies, List<Character> enemies)
    {
        if (char1.Buffs.Find(x => x.Name == "Rage") == null)
        {
            char1.Abilities.Find(x => x.Name == "Rage")?.UseAbility(char1, enemies);
        }
        else
        {
            base.CombatAI(char1, allies, enemies);
        }

    }
}