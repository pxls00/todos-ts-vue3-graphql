import { useMessagesStore } from '@/stores/messages'
import createMessage from '@/helpers/create-message'

import type NewMessageItem from '@/interfaces/newmessage-item'
import type MessageItem from '@/interfaces/message-item'

interface Toast {
  addNewMessage(message: NewMessageItem): void
  removeMessage(message: MessageItem): void
  waitAction(): void
  stopAction(): void
}

export default {
  install: (app: any) => {
    const store = useMessagesStore()

    function addNewMessage(message: NewMessageItem): void {
      const createdMessage: MessageItem = createMessage(message)
      store.newMessage(createdMessage)
    }

    function removeMessage(message: MessageItem): void {
      store.removeMessage(message)
    }

    function waitAction(): void {
      store.waitAction()
    }

    function stopAction(): void {
      store.unwaitAction()
    }

    const toast: Toast = {
      addNewMessage,
      removeMessage,
      waitAction,
      stopAction,
    }

    app.provide('toast', toast)
  },
}
