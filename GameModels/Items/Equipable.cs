namespace GameModels;
public class Equipable : Item
{
    public Equipable(string name) : base(name)
    {
        Name = name;
    }
    public virtual void Equip(Character hero)
    {

    }
}