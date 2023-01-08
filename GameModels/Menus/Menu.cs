namespace GameModels
{
    public class Menu
    {
        public virtual void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                showMenu = false;
            }
        }
        public void AnyKey()
        {
            Console.WriteLine("Press any key to continue");
            string? input = Console.ReadLine();
        }
    }
}