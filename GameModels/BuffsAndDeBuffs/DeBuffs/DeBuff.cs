namespace GameModels;
public class DeBuff
{
    public string Name;
    public int Duration;
    public int RemainingDuration;
    public DeBuff(string name, int duration, int remainingDuration)
    {
        Name = name;
        Duration = duration;
        RemainingDuration = remainingDuration;
    }
    public virtual Character ApplyDeBuff(Character character)
    {
        return character;
    }
    public virtual Character RemoveDeBuff(Character character)
    {
        return character;
    }
}