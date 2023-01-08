namespace GameModels
{
    public class LocationMenu : Menu
    {
        public string Name;
        Location Location;
        public LocationMenu(string name, Location location)
        {
            Name = name;
            Location = location;
        }
        public virtual void DisplayLocationContent(Character hero)
        {
            Location.LocationContent(hero);
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                DisplayLocationContent(hero);
                showMenu = false;
            }
        }
    }
}