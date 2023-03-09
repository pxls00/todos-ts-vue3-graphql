import type NewMessageItem from '@/interfaces/newmessage-item'
import type MessageItem from '@/interfaces/message-item'

export default function createMessage(message: NewMessageItem): MessageItem  {
  const messageItem: MessageItem = {
    title: message.title,
    type: message.type,
    id: Date.now().toString(),
  }
  if(message.duration) {
    messageItem.duration = message.duration
  }
  return messageItem
}
