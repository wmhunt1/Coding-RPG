namespace GameModels;
public class Relationship
{
    public Character AssociatedCharacter {get; set;}
    public int RelationshipValue {get; set;} = 0;
    public string RelationshipName {get; set;} = "Acquaintances";
    public Relationship(Character character)
    {
        AssociatedCharacter = character;
    }
    public Character AddRelationship(Character hero)
    {
        if (hero.Relationships.Find(x => x.AssociatedCharacter == AssociatedCharacter) == null)
        {
            Console.WriteLine($"{hero.Name} has met: {AssociatedCharacter.Name}");
            hero.Relationships.Add(this);
        }
        return hero;
    }
    public Character UpdateRelationshipName(Character hero)
    {
        int value = hero.Relationships.Find(x => x.AssociatedCharacter == AssociatedCharacter)!.RelationshipValue;
        string updatedName = "";
        if (value <= -1)
        {
            updatedName = "Enemies";
        }
        else if (value >= 1)
        {
            updatedName = "Friends";
        }
        else
        {
            updatedName = "Acquaintances";
        }
        hero.Relationships.Find(x => x.AssociatedCharacter == AssociatedCharacter)!.RelationshipName = updatedName;
        Console.WriteLine($"{hero.Name} is now {hero.Relationships.Find(x => x.AssociatedCharacter == AssociatedCharacter)!.RelationshipName} with {hero.Relationships.Find(x => x.AssociatedCharacter == AssociatedCharacter)!.AssociatedCharacter.Name}");
        return hero;
    }
    public Character IncreaseRelationship(Character hero)
    {
        hero.Relationships.Find(x => x.AssociatedCharacter == AssociatedCharacter)!.RelationshipValue++;
        UpdateRelationshipName(hero);
        return hero;
    }
    public Character DecreaseRelationship(Character hero)
    {
        hero.Relationships.Find(x => x.AssociatedCharacter == AssociatedCharacter)!.RelationshipValue--;
        UpdateRelationshipName(hero);
        return hero;
    }

}