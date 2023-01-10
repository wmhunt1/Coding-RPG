namespace GameModels;
public class GatheringSkill : Skill
{
    public GatheringSkill(string name) : base(name)
    {
        Name = name;
    }
    public virtual void GatheringMessage(Character skiller, Item item)
    {

    }
    public override void SkillActivity(Character skiller, int xp, Item input, Item output)
    {
        GatheringMessage(skiller, output);
        output.AddItemToInventory(skiller);
        EarnSkillXP(skiller, xp);
    }
}