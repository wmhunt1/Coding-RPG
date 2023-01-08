namespace GameModels;
public class Rat : Beast
{
    public Rat(string name = "Rat") : base(name)
    {
        Name = name;
        Ally = false;
        this.CurrentHP = 5;
        this.MaxHP = 5;
        this.Strength = 5;
        this.Dexterity = 10;
        this.CurrentXP = 10;
        Weapon = new Bite();
        ItemDrop = new RatTail();
    }
}
