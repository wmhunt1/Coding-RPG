using System.Text.Json.Serialization;
namespace GameModels;
public class Freelancer : Job
{
    public Freelancer(string name = "Freelancer") : base(name)
    {
        Name = name;
    }
    public override Character AddJobPackage(Character hero)
    {
        Dagger dagger = new Dagger();
        Hat hat = new Hat();
        Tunic tunic = new Tunic();
        Trousers trousers = new Trousers();
        Gloves gloves = new Gloves();
        Boots boots = new Boots();
        WoodenShield shield = new WoodenShield();
        Dog dog = new Dog();
        hat.EquipItem(hero, hero);
        tunic.EquipItem(hero, hero);
        trousers.EquipItem(hero, hero);
        gloves.EquipItem(hero, hero);
        boots.EquipItem(hero, hero);
        dagger.EquipItem(hero, hero);
        dog.JoinParty(hero);
        shield.EquipItem(hero, hero);
        return hero;
    }
}