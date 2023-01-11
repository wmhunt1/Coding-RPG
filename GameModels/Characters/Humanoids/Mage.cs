using System.Text.Json.Serialization;

namespace GameModels;
public class Mage : Humanoid
{
    public Mage(string name = "Mage") : base(name)
    {
        Name = name;
        Ally = false;
        CurrentXP = 20;
        this.CurrentHP = 20;
        this.MaxHP = 20;
        SpellBook = new List<Spell>{new MagicMissile()};
    }
    public override void CombatAI(Character char1, List<Character> allies, List<Character> enemies)
    {
        if (this.CurrentMP > 0)
        {
            char1.SpellBook.Find(x => x.Name == "Magic Missile")?.CastSpell(char1, allies, enemies);
        }
        else
        {
            base.CombatAI(char1, allies, enemies);
        }

    }
}