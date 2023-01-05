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
    public int Constitution = 10;
    public int Dexterity = 10;
    public int Intelligence = 10;
    public int Wisdom = 10;
    public int Charisma = 10;
    public int WillPower = 10;
    public int Perception = 10;
    public int Luck = 10;
    public int Beauty = 10;
    public bool Ally = false;
    public Weapon Weapon = new Weapon("Fists", 0, 0, "Bludgeoning");
    public Torso Torso = new Torso("Naked", 0, 0, "No");
    public Accessory Accessory = new Accessory("None", 0);
    public List<Character> Companions = new List<Character>();
    public int Gold = 0;
    public List<Item> Inventory = new List<Item>();
    public List<Ability> Abilities = new List<Ability>();
    public List<Spell> SpellBook = new List<Spell>();
    public Character(string name)
    {
        Name = name;
        Ally = true;
    }
    public int LevelUp()
    {
        this.Level++;
        Console.WriteLine($"{this.Name} Levels Up, reaching Level {this.Level}");
        this.MaxXP = this.Level * this.MaxXP;
        HealHP(this.MaxHP);
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

        if (this.CurrentHP > this.MaxHP)
        {
            this.CurrentHP = this.MaxHP;
        }
        return this.CurrentHP;
    }
    public int TakeDamage(int damage)
    {
        if (damage >= 0)
        {
            this.CurrentHP -= damage;
        }
        return this.CurrentHP;
    }
    public int GainMana(int gain)
    {
        this.CurrentMP += gain;

        if (this.CurrentMP > this.MaxMP)
        {
            this.CurrentMP = this.MaxMP;
        }
        return this.CurrentMP;
    }
    public int SpendMana(int cost)
    {
        if (cost >= 0)
        {
            this.CurrentMP -= cost;
        }
        return this.CurrentMP;
    }
    public int RecoverStamina(int gain)
    {
        this.CurrentSP += gain;

        if (this.CurrentSP > this.MaxSP)
        {
            this.CurrentSP = this.MaxSP;
        }
        return this.CurrentSP;
    }
    public int SpendStamina(int cost)
    {
        if (cost >= 0)
        {
            this.CurrentSP -= cost;
        }
        return this.CurrentSP;
    }
    public void FullRest()
    {
        Console.WriteLine($"{this.Name} rests and fully recovers.");
        HealHP(MaxHP);
        GainMana(MaxMP);
        RecoverStamina(MaxSP);
    }
    public bool CheckForCrit()
    {
        Random rand = new Random();
        int number = rand.Next(0, 100);
        if (number <= this.Luck)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public void BasicAttack(Character target)
    {
        bool crit = CheckForCrit();
        int damage = this.Strength + this.Weapon.WeaponDmg - target.Torso.Protection - target.Dexterity;
        if (crit == true)
        {
            damage *= 2;
        }
        target.TakeDamage(damage);
        if (damage > 0)
        {
            Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Weapon.Name}, dealing {damage} {this.Weapon.WeaponDmgType} Damage");
            if (crit == true)
            {
                Console.WriteLine("Critical Hit!");

            }
        }
        else
        {
            Console.WriteLine($"{this.Name} attacks {target.Name} with {this.Weapon.Name}, but deals no damage");
        }
    }
    public int AddGold(int gp)
    {
        Gold += gp;
        return Gold;
    }
    public int RemoveGold(int gp)
    {
        Gold -= gp;
        return Gold;
    }
    public List<Item> AddItemToInventory(Item item)
    {
        //if item in inventory increase quantity
        Inventory.Add(item);
        return Inventory;
    }
    public List<Item> RemoveItemFromInventory(Item item)
    {
        //if quantity is 0 remove item
        Inventory.Remove(item);
        return Inventory;
    }
    public List<Ability> LearnAbility(Ability ability)
    {
        Abilities.Add(ability);
        return Abilities;
    }
    public List<Spell> LearnSpell(Spell spell)
    {
        SpellBook.Add(spell);
        return SpellBook;
    }
}
