namespace GameModels;
public class Dialogue
{
    public string Name;
    public Dialogue(string name)
    {
        Name = name;
    }
    public virtual void HaveDialogue(Character hero)
    {

    }
}