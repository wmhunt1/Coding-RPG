namespace GameModels;
public class EmptyFinger : Ring
{
    public EmptyFinger(string name = "Empty Finger", int cost = 0) : base(name, cost)
    {
        Name = name;
        Cost = cost;
    }

}