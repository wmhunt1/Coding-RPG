export function AdvanceConversation(hero, dialogue, conversationLog, response, progress) {
    dialogue.Conversation[progress].responseEffect(hero, response[1])
    conversationLog.push(response[0])
    conversationLog.push(dialogue.Conversation[progress + 1].Dialogue[response[1]])
}