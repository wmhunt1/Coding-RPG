namespace GameModels;
public class Character
{
    public string Name;
    public int Level = 1;
    public int CurrentHP = 10;
    public int MaxHP = 10;
    public Character(string name)
    {
        Name = name;
    }
}
