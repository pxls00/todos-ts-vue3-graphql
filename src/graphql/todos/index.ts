import type TodosGql from '@/interfaces/graphql-todos'

export default (): TodosGql => ({
  getTodos (sort = { completed: 'all' }, search = '', limit = 10) {
    const searchQuery = search !== '' ? `search: {q: "${search}"}` : ''
    const sortQuery =
      sort.completed === 'all'
        ? ''
        : `sort: {
      field: "completed"
      order: ${sort.completed === 'active' ? 'ASC' : 'DESC'}
    }`
    const getTodosQuery: string = `
      query Todos {
        todos (
          options: {
            ${sortQuery}
            slice: {
              limit: ${limit}
            }
            ${searchQuery}
          }
        ) {
          data {
            id,
            title,
            completed
            user {
              id
              name
            }
          }
        }
      }
    `

    return getTodosQuery
  },

  createTodo (todoItem) {
    const createTodoMutation = `
      mutation CreateTodo {
        createTodo(input: {
          title: ${JSON.stringify(todoItem.title)}
          completed: ${JSON.stringify(todoItem.completed)}
        }) {
          title,
          id,
          completed
        }
      }
    `

    return createTodoMutation
  },

  deleteTodo (id) {
    const deleteTodoMutation: string = `
      mutation DeleteTodo {
        deleteTodo(id: ${id})
      }
    `

    return deleteTodoMutation
  },

  updateTodo (todoItem) {
    const updateTodoMutation: string = `
      mutation UpdateTodo {
        updateTodo(id: ${todoItem.id}, input: {completed: ${
    todoItem.completed
  }, title: ${JSON.stringify(todoItem.title)}}) {
          id,
          title,
          completed
        }
      }
    `

    return updateTodoMutation
  },
})
