import type NewMessageItem from '@/interfaces/newmessage-item'
import type MessageItem from '@/interfaces/message-item'

interface Toast {
  addNewMessage(message: NewMessageItem): void
  removeMessage(message: MessageItem): void
  waitAction(): void
  stopAction(): void
}


export default Toast