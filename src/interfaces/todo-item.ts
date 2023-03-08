import type Id from '@/interfaces/types/id'

interface TodoItem {
  title: string
  completed: boolean
  user?: Object
  id: Id
}

export default TodoItem