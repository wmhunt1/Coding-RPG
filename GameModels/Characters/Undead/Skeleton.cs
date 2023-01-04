namespace GameModels;
public class Skeleton : Undead
{
    public Skeleton(string name = "Skeleton") : base(name)
    {
        Name = name;
        Ally = false;
        this.CurrentXP = 10;
        Weapon = new Club();
        Torso = new Torso("Leather Scraps", 0, 1, "Leather");
        // resistance to peircing and slashing
        // weakness to bludeoning
    }
}
