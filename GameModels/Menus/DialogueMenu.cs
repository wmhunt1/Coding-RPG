namespace GameModels
{
    public class DialogueMenu : Menu
    {
        public Dialogue Dialogue  {get; set;}
        public DialogueMenu(Dialogue dialogue)
        {
            Dialogue = dialogue;
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {
                ShowTitle();
                Dialogue.HaveDialogue(hero);
                AnyKey();
                showMenu = false;
            }
        }
    }
}