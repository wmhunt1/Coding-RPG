using System.Text.Json.Serialization;

namespace GameModels;
public class Condition
{
    [JsonPropertyName("Name")]
    public string Name {get; set;}
    public Condition(string name)
    {
        Name = name;
    }
    public bool CheckIfImmuneToCondition(Character char1)
    {
        bool immune = false;
        if (char1.ConditionModifiers.Immunities.Count > 0)
        {
            for (int cdn = 0; cdn < char1.ConditionModifiers.Immunities.Count; cdn++)
            {
                if (char1.ConditionModifiers.Immunities[cdn].Name == this.Name)
                {
                    immune = true;
                }
            }
        }
        return immune;
    }
    public bool CondtionAlreadyApplied(Character char1)
    {
        bool alreadyApplied = false;
        if (char1.Conditions.Count > 0)
        {
            for (int cdn = 0; cdn < char1.Conditions.Count; cdn++)
            {
                if (char1.Conditions[cdn].Name == this.Name)
                {
                    alreadyApplied = true;
                }
            }
        }
        return alreadyApplied;
    }
    public Character ApplyCondition(Character char1)
    {
        bool alreadyApplied = CondtionAlreadyApplied(char1);
        bool immune = CheckIfImmuneToCondition(char1);
        if (alreadyApplied != true && immune != true)
        {
            char1.Conditions.Add(this);
        }
        else if (alreadyApplied == true)
        {
            Console.WriteLine($"{char1.Name} is already afflicted with {this.Name}");
        }
        else
        {
            Console.WriteLine($"{char1.Name} is immune to {this.Name}");
        }
        return char1;
    }
    public Character RemoveCondition(Character char1)
    {
        char1.Conditions.Remove(this);
        return char1;
    }
    public virtual Character ResistCondition(Character char1)
    {
        Random random = new Random();
        int resistingAttribute = 0;
        int chance = random.Next(resistingAttribute, 100);
        if (chance >= 50)
        {
            Console.WriteLine($"{char1.Name}'s {Name}'s condition ends");
            this.RemoveCondition(char1);
        }
        return char1;
    }
}