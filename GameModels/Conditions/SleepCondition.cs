namespace GameModels;
public class SleepCondition : TurnSkipCondition
{
    public SleepCondition(string name = "Asleep"):base(name)
    {
        Name = name;
    }
}