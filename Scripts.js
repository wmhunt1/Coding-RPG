        var Day = 0;
        var Player = 
        {
            Name: "Character",
            Level: 1,
            CurrentHP: 10,
            MaxHP: 10,
            Gold: 0,
            Atk: 2,
            Armor: 1,
            Dead: false,
            Magic: false,
        }
        // Need to figure out how to fill this for each enemy or make it a template
        var Enemy = 
        {
            Name: "N",
            CurrentHP: 5,
            MaxHP: 5,
            Atk: 2,
            Armor: 0,
            Dead: false,
        }
    // functions
        function DMGPlayer()
        {
            //Should reduce damage by armor amount
            Player.CurrentHP = Player.CurrentHP - (Enemy.Atk - Player.Armor);
            //should kill player when HP is reduced to 0
            /*When (Player.CurrentHP <= 0)
            {
                Player.Dead = true;
            }*/
        }
        function DMGEnemy()
        {
            //should reduce damage by armor amount
            Enemy.CurrentHP = Enemy.CurrentHP - (Player.Atk - Enemy.Armor);
           /* When (Enemy.CurrentHP <= 0)
            {
                Enemy.Dead = true;
            }*/
        }
        function LevelUp()
        {
            Player.Level += 1;
            MaxHP += 10;
        }
        function AddGold(x)
        {
            Player.Gold += x;
        }
        function RemoveGold(x)
        {
            Player.Gold -= x;
        }
        function Rest()
        {
            Player.CurrentHP = Player.MaxHP;
            Day += 1;
        }
        function UseItem()
        {
            //Need to make items
        }
    