namespace GameModels;
public class Skeleton : Character
{   
    public Skeleton(string name = "Skeleton"):base(name)
    {
        Name = name;
        this.CurrentXP = 10;
        Ally = false;
        Weapon = new Weapon("Wooden Club", 1, "Bludgeoning");
        Armor = new Armor("Leather Scraps", 1, "Leather");
    }
}
