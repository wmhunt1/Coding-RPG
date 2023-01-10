namespace GameModels
{
    public class LocationMenu : Menu
    {
        Location Location {get; set;}
        public LocationMenu(Location location)
        {
            Location = location;
        }
        public virtual void DisplayLocationContent(Character hero)
        {
            Location.VisitLocation(hero);
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                ShowTitle();
                DisplayLocationContent(hero);
                showMenu = false;
            }
        }
    }
}