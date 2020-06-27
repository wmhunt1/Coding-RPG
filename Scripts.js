        var Day = 1;
        var Player = 
        {
            Name: "Character",
            Level: 1,
            XP: 0,
            CurrentHP: 10,
            MaxHP: 10,
            Gold: 0,
            Atk: 1,
            Armor: 0,
            Dead: false,
            Magic: false,
            Fame: 0,
            HomeOwner: false,
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
        function AddXP(x)
        {
            Player.XP += x;
        }
        function AddGold(x)
        {
            Player.Gold += x;
        }
        function RemoveGold(x)
        {
            Player.Gold -= x;
        }
        function AddFame(x)
        {
            Player.Fame += x;
        }
        function Rest()
        {
            Player.CurrentHP = Player.MaxHP;
            Day =+ 1;
        }
        function Bad_Rest()
        {
            Player.CurrentHP = Player.MaxHP*.5;
            Day =+ 1;
        }
        function UseItem()
        {
            //Need to make items
        }