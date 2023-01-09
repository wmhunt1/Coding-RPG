namespace GameModels;
public class QuestDialogue : Dialogue
{
    public QuestDialogue(string name) : base(name)
    {
        Name = name;
    }
    public virtual bool ObjectiveComplete(Character hero)
    {
        return false;
    }
    public override void HaveDialogue(Character hero)
    {
    }
}