import type Id from '@/interfaces/types/request-id'
import type CommentItem from '@/interfaces/comment-item'

interface TodoItem {
  title: string
  completed: boolean
  comments: CommentItem[]
  id: Id
}

export default TodoItem