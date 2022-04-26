using GameModels;

namespace GameUI;
public class Menu
{
    public string Name = "Menu";
    public virtual void ShowMenu(Character hero)
    {
        Console.WriteLine(Name);
    }
}
