export function AdvanceConversation(hero, char, dialogue, conversationLog, response, progress) {
    dialogue.Conversation[progress].responseEffect(hero, response[1])
    conversationLog.push(hero.Name + ": " + response[0])
    conversationLog.push(char + ": " + dialogue.Conversation[progress + 1].Dialogue[response[1]])
}