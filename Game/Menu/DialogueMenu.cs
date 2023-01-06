using System;
using GameModels;

namespace GameSpace
{
    public class DialogueMenu : Menu
    {
        public Dialogue Dialogue;
        public DialogueMenu(Dialogue dialogue)
        {
            Dialogue = dialogue;
        }
        public override void DisplayMenu(Character hero)
        {
            bool showMenu = true;
            while (showMenu)
            {

                Dialogue.HaveDialogue(hero);
                AnyKey();
                showMenu = false;
            }
        }
    }
}