import type IdType from '@/interfaces/types/id'
import type NewMessageItem from '@/interfaces/newmessage-item'

interface Message extends NewMessageItem {
  id: IdType
}

export default Message