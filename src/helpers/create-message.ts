import type NewMessageItem from '@/interfaces/newmessage-item'
import type MessageItem from '@/interfaces/message-item'

export default function createMessage(message: NewMessageItem): MessageItem  {
  const messageItem: MessageItem = {
    title: message.title,
    type: message.type,
    duration: message.duration || 4000,
    id: Date.now().toString(),
  }
  console.log(messageItem)
  return messageItem
}
