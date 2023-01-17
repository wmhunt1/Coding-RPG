using System.Text.Json.Serialization;

namespace GameModels;
public class Rat : Beast
{
    public Rat(string name = "Rat") : base(name)
    {
        Name = name;
        Ally = false;
        this.CurrentXP = 10;
        Weapon = new Bite();
        ItemDrop = new RatTail();
    }
}
