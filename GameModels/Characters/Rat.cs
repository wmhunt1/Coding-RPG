namespace GameModels;
public class Rat : Beast
{   
    public Rat(string name = "Rat"):base(name)
    {
        Name = name;
        Ally = false;
        this.CurrentHP = 5;
        this.MaxHP = 5;
        this.Strength = 10;
        this.Dexterity = 5;
        this.CurrentXP = 10;
        Weapon = new Weapon("Bite", 1, "Piercing");
        Armor = new Armor("Fur", 0, "Natural");
    }
}
