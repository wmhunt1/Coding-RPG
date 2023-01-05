namespace GameModels;
public class Buff
{
    public string Name;
    public int Duration;
    public int RemainingDuration;
    public Buff(string name, int duration, int remainingDuration)
    {
        Name = name;
        Duration = duration;
        RemainingDuration = remainingDuration;
    }
    public virtual Character ApplyBuff(Character character)
    {
        return character;
    }
    public virtual Character RemoveBuff(Character character)
    {
        return character;
    }
}