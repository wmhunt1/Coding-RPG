using System;
namespace GameModels;

public class Job
{
    public string Name;
    public Weapon Weapon = new Club();
    public Armor Armor = new ClothTunic();
    public Job(string name)
    {
        Name = name;
    }
    public Character ChooseJob(Character character)
    {
        character.Job = this;
        character.Weapon = Weapon;
        character.Armor = Armor;
        return character;

    }
}