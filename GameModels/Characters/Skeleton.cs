namespace GameModels;
public class Skeleton : Undead
{
    public Skeleton(string name = "Skeleton") : base(name)
    {
        Name = name;
        Ally = false;
        this.CurrentXP = 10;
        Weapon = new Weapon("Wooden Club", 1, "Bludgeoning");
        Armor = new Armor("Leather Scraps", 1, "Leather");
    }
}
