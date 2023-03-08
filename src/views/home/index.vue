<template>
  <div class="home">
    <FormTodo 
      @submit='onAddTodo'
    />
    <TodoList
      :todos="todos"
      @updateTodo="onUpdateTodo"
      @deleteTodo="onDeleteTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormTodo from '@/components/form/todo.vue'
import TodoList from '@/components/todo/list.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    FormTodo,
    TodoList,
  },
})
</script>

<script setup lang="ts">
import fetchWrapper from '@/helpers/fetch-wrapper'

import type TodoItem from '@/interfaces/todo-item'
import type IdType from '@/interfaces/types/id'

import { onMounted, ref, inject } from 'vue'

const toast:any = inject('toast')

interface NewTodo {
  title: string,
  completed: boolean
}

const todos = ref<any[]>([])

async function fetchTodos(search: string = '') {
  try {
    toast.waitAction()
    const getTodosQuery: string = `
      query Todos {
        todos (
          options: {
            slice: {
              limit: 10
            }
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
    const {
      data: {
        todos: { data },
      },
    } = await fetchWrapper(getTodosQuery)
    todos.value = data as any[]
  } catch (error) {
    console.log(error)
  } finally {
    toast.stopAction()
  }
}

async function onAddTodo(todoItem: NewTodo) {
  try {
    toast.waitAction()
    const createTodoMutation: string = `
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
    const {
      data: { createTodo },
    } = await fetchWrapper(createTodoMutation)
    todos.value.unshift(createTodo)
  } catch (error) {
    console.log(error)
  } finally {
    toast.stopAction()
  }
}

async function onUpdateTodo(todoItem: TodoItem) {
  try {
    toast.waitAction()
    const updateTodoMutation: string = `
      mutation UpdateTodo {
        updateTodo(id: ${todoItem.id}, input: {completed: ${todoItem.completed}, title: ${JSON.stringify(todoItem.title)}}) {
          id,
          title,
          completed
        }
      }
    `
    const {
      data: { updateTodo },
    } = await fetchWrapper(updateTodoMutation)
    const todo = todos.value.find(
      (item: TodoItem): boolean => item.id === todoItem.id
    ) as TodoItem | undefined
    if (todo) {
      todo.completed = todoItem.completed
    }
    // todos.value = data as any[]
  } catch (error) {
    console.log(error)
  } finally {
    toast.stopAction()
  }
}

async function onDeleteTodo(id: IdType) {
  try {
    toast.waitAction()
    const deleteTodoMutation: string = `
      mutation DeleteTodo {
        deleteTodo(id: ${id})
      }
    `
    await fetchWrapper(deleteTodoMutation)
    todos.value = todos.value.filter(
      (item: TodoItem): boolean => item.id !== id
    )
    // todos.value = data as any[]
  } catch (error) {
    console.log(error)
  } finally {
    toast.stopAction()
  }
}

onMounted(async () => {
  await fetchTodos()
})
</script>
