import type MessageTypes from '@/interfaces/types/message-types'

interface Message {
  title: string
  duration?: number
  type: MessageTypes
}

export default Message
