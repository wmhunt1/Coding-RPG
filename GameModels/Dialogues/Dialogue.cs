namespace GameModels;
public class Dialogue
{
    public string Name {get; set;}
    public Dialogue(string name)
    {
        Name = name;
    }
    public virtual void HaveDialogue(Character hero)
    {

    }
}