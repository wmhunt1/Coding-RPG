namespace GameModels;
public class Character
{
    public string Name = "";
    public int Level = 1;
    public int CurrentXP = 0;
    public int MaxXP = 100;
    public int CurrentHP = 10;
    public int MaxHP = 10;
    public int CurrentMP = 10;
    public int MaxMP = 10;
    public int CurrentSP = 10;
    public int MaxSP = 10;
    public int Strength = 10;
    public int Dexterity = 10;
    public Weapon Weapon = new Weapon("Unarmed", 0, "Bludgeoning");
    public Armor Armor = new Armor("Unarmored", 0, "None");
    public Character(string name)
    {
        Name = name;
    }
    public int LevelUp()
    {
        this.Level++;
        Console.WriteLine($"{this.Name} Levels Up, reaching Level {this.Level}");
        this.MaxXP = this.Level * this.MaxXP;
        return this.Level;
    }
    public bool CheckForLevelUp()
    {
        if (this.CurrentXP >= this.MaxXP)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public int EarnXP(int exp)
    {
        this.CurrentXP += exp;
        Console.WriteLine($"{this.Name} gains {exp} XP");
        bool levelUp = this.CheckForLevelUp();
        if (levelUp == true)
        {
            this.LevelUp();
        }
        return this.CurrentXP;
    }
    public int HealHP(int heal)
    {
        this.CurrentHP += heal;
        Console.WriteLine($"{this.Name} heals {heal} XP");
        if (this.CurrentHP > this.MaxHP)
        {
            this.CurrentHP = this.MaxHP;
        }
        return this.CurrentHP;
    }
    public int TakeDamage(int damage)
    {
        this.CurrentHP -= damage;
        return this.CurrentHP;
    }
    public void Attack(Character target)
    {
        int damage = target.TakeDamage(this.Strength + this.Weapon.WeaponDmg - target.Armor.Protection);
        Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Weapon.Name}, dealing {damage} {this.Weapon.WeaponDmgType} Damage");
    }
}
