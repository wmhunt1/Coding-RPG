using System.Text.Json.Serialization;

namespace GameModels;
public class Healer : Humanoid
{
    public Healer(string name = "Healer") : base(name)
    {
        Name = name;
        Ally = false;
        CurrentXP = 20;
        this.CurrentHP = 20;
        this.MaxHP = 20;
        SpellBook = new List<Spell>{new HealSpell()};
    }
    public override void CombatAI(Character char1, List<Character> allies, List<Character> enemies)
    {
        bool halfHP = false;
        for (int ally = 0; ally < allies.Count; ally++)
        {
            if (allies[ally].CurrentHP <= allies[ally].MaxHP/2)
            {
                halfHP = true;
            }
        }
        if (this.CurrentMP > 0 && halfHP == true)
        {
            char1.SpellBook.Find(x => x.Name == "Heal")?.CastSpell(char1, allies, enemies);
        }
        else
        {
            base.CombatAI(char1, allies, enemies);
        }

    }
}