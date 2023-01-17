namespace GameModels;
public class Hero : Character
{
    public Hero(string name) : base(name)
    {
        Name = name;
        Job = new Freelancer();
        Job.AddJobPackage(this);
    }
}