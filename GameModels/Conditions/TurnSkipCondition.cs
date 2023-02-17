using System.Text.Json.Serialization;

namespace GameModels;
public class TurnSkipCondition : Condition
{
    public TurnSkipCondition(string name) : base(name)
    {
        Name = name;
    }
    public override Character ResistCondition(Character char1)
    {
        Random random = new Random();
        int resistingAttribute = char1.Attributes.WillPower.Value + char1.Attributes.WillPower.ValueBonus + char1.Attributes.WillPower.ValuePenalty;
        int chance = random.Next(resistingAttribute, 100);
        if (chance >= 50)
        {
            Console.WriteLine($"{char1.Name}'s {Name}'s condition ends");
            this.RemoveCondition(char1);
        }
        return char1;
    }
}