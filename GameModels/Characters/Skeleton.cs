namespace GameModels;
public class Skeleton : Character
{   
    public Skeleton(string name = "Rat"):base(name)
    {
        Name = name;
        this.CurrentXP = 10;
        Weapon = new Weapon("Wooden Club", 0, "Bludgeoning");
        Armor = new Armor("Leather Scraps", 1, "Leather");
    }
}
