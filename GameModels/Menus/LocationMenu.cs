using System.Text.Json.Serialization;

namespace GameModels
{
    public class LocationMenu : Menu
    {
        [JsonPropertyName("Location")]
        Location Location { get; set; }
        public LocationMenu(Location location)
        {
            Location = location;
        }
        public virtual void DisplayLocationContent(Character hero)
        {
            Location.VisitLocation(hero);
        }
        public override void DisplayMenu(Character hero, Character inventory)
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