import type Id from '@/interfaces/types/request-id'

interface TodoItem {
  title: string
  completed: boolean
  user?: Object
  id: Id
}

export default TodoItem