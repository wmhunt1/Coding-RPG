export function AddToConversationLog(log, message)
{
    log.push(message);
}
export function NextResponses(dialogue, next)
{
    for (var i = 0; i < dialogue.Conversation.heroSide.length; i++)
    {
        if (dialogue.Conversation.heroSide[i].Id === next)
        {
            return dialogue.Conversation.heroSide[i].Options;
        }
    }
}
export function AdvanceConversation(hero, dialogue, conversationLog, response) {
    for (var i = 0; i < dialogue.Conversation.npcSide.length; i++)
    {
        if (dialogue.Conversation.npcSide[i].Id === response[1])
        {
            AddToConversationLog(conversationLog, dialogue.Conversation.npcSide[i].Line)
            return dialogue.Conversation.npcSide[i];
        }
    }
}