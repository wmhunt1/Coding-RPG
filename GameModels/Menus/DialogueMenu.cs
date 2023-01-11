using System.Text.Json.Serialization;

namespace GameModels
{
    public class DialogueMenu : Menu
    {
         [JsonPropertyName("Dialogue")]
        public Dialogue Dialogue  {get; set;}
        public DialogueMenu(Dialogue dialogue)
        {
            Dialogue = dialogue;
        }
        public override void DisplayMenu(Character hero, Character inventory)
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