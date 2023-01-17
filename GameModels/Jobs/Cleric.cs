using System.Text.Json.Serialization;
namespace GameModels;
public class Cleric : Job
{
    public Cleric(string name = "Cleric") : base(name)
    {
        Name = name;
    }
    public override Character AddJobPackage(Character hero)
    {
        HealSpell healSpell = new HealSpell();
        healSpell.LearnSpell(hero);
        Club club = new Club();
        Hat hat = new Hat();
        Tunic tunic = new Tunic();
        Trousers trousers = new Trousers();
        Gloves gloves = new Gloves();
        Boots boots = new Boots();
        WoodenShield shield = new WoodenShield();
        hat.EquipItem(hero, hero);
        tunic.EquipItem(hero, hero);
        trousers.EquipItem(hero, hero);
        gloves.EquipItem(hero, hero);
        boots.EquipItem(hero, hero);
        club.EquipItem(hero, hero);
        shield.EquipItem(hero, hero);
        return hero;
    }
}