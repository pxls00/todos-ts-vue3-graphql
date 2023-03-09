import type GetTodos from '@/interfaces/get-todos-gql'
import type CreateTodo from '@/interfaces/create-todo-gql'
import type DeleteTOdo from '@/interfaces/delete-todo-gql'
import type UpdateTodo from '@/interfaces/update-todo-gql'

interface TodosGql {
  getTodos: GetTodos 
  createTodo: CreateTodo
  deleteTodo: DeleteTOdo
  updateTodo: UpdateTodo
}

export default TodosGql